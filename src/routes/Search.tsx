import { useEffect, useRef, useState } from 'react';
import {
  Form,
  useLoaderData,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';
import { type Response as GamesSearchResponse } from '../mocks/actions';
import SearchResult from '../components/SearchResult';
import { getUserDataForGamesArray } from '../firebase';
import type { User } from '../hooks/useUser';

// TODO: compare search results with user data in firebase to populate cards

export async function loader({ request }: any): Promise<GamesSearchResponse> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  let games;
  if (q) {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=0022e0846f034f58b2507bd0e9e5c8d0&page_size=10&search=${q}`
      );
      games = await response.json();
    } catch (err) {
      throw new Error(
        `Problem fetching games from API: ${(err as Error).message}`
      );
    }
  }
  return { games, q };
}

interface FontSizeRecord {
  breakingPoint?: number;
  [key: number]: number;
}

export interface UserGameDataItem {
  gameID: number;
  userID?: string;
  backlogged?: boolean;
  rating?: number;
  review?: string;
}

interface UserGameData {
  [key: number]: UserGameDataItem;
}

export default function Search() {
  const { games, q } = useLoaderData() as GamesSearchResponse;
  const { user }: { user: User } = useOutletContext();

  const [userGameData, setUserGameData] = useState<UserGameData | null>(null);
  /* TODO: 
      x map games array into an array of ids
      x contact firebase to return data of matches
      x setState of data
      x use that state to pass as prop to searchResult
      
      Editing:
      x useFetcher to access form action and write change on firebase
      x fetcher.formData = optimistic UI
      (updates state immediately. can revert if update failed)
      (idea: add pending status with former rating to state)
      - actionResponse will indicate if write was success.
      - if write is success update state to reflect new rating
          
  */
  let gameIds: number[] | undefined;
  if (games) {
    gameIds = games.results.map((game) => game.id);
  }

  useEffect(() => {
    async function fetchUserData() {
      if (!gameIds) return;
      const data = await getUserDataForGamesArray(gameIds);
      setUserGameData(data as UserGameData);
    }

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const navigation = useNavigation();

  const inputRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef(0);
  const fontSizeRecords = useRef({} as FontSizeRecord);
  const [fontSize, setFontSize] = useState<number | null>(null);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    const searchInput = document.getElementById('q');
    if (searchInput) {
      (searchInput as HTMLInputElement).value = q ?? '';
    }
  }, [q]);

  function isOverflown(element: HTMLInputElement) {
    return element.scrollWidth > element.clientWidth;
  }

  function manageFontSize() {
    if (!inputRef.current) return;
    const currentInputLength = (inputRef.current as HTMLInputElement).value
      .length;
    if (isOverflown(inputRef.current)) {
      const cssUnitValue = inputRef.current.computedStyleMap().get('font-size');
      if (!cssUnitValue) return;
      const currentFontSize = (cssUnitValue as CSSUnitValue).value;
      setFontSize((prev) => {
        let newFontSize;
        if (prev === null) {
          fontSizeRecords.current.breakingPoint = currentInputLength;
          newFontSize = currentFontSize - 1;
        } else {
          newFontSize = prev - 1;
        }
        const filteredFontSize = newFontSize >= 16 ? newFontSize : 16;
        fontSizeRecords.current[currentInputLength] = filteredFontSize;
        return filteredFontSize;
      });
    } else if (fontSize !== null) {
      setFontSize((prev) => {
        /* if for some reason input length is less than the point
        at which font size was altered, font size reverts back and
        fontSizeRecords resets */
        if (
          (fontSizeRecords.current.breakingPoint &&
            currentInputLength < fontSizeRecords.current.breakingPoint) ||
          currentInputLength === 0 ||
          prev === null
        ) {
          fontSizeRecords.current = {};
          return null;
        }

        /* if backspacing, sets font size to cached size at that 
        value.length if exists, otherwise returns current fontSize
        unchanged */
        if (
          lengthRef.current >
          (inputRef.current as HTMLInputElement).value.length
        ) {
          if (currentInputLength in fontSizeRecords.current) {
            return fontSizeRecords.current[currentInputLength];
          }
          return prev;
        }

        /* user is typing without overflow after alterations 
        on font size (prev is not null), so font size is cached
        for this input length and font size is unchanged */
        fontSizeRecords.current[currentInputLength] = prev;
        return prev;
      });
    }
    lengthRef.current = currentInputLength;
  }

  // DECIDED TO GIVE INDIVIDUAL STATES TO CHILDREN
  // function updateGameData(id: number) {
  //   return (update: UserGameDataItem) => {
  //     setUserGameData((prev) => ({
  //       ...prev,
  //       [id]: prev?.[id] ? { ...prev[id], ...update } : update,
  //     }));
  //   };
  // }

  return (
    <div className='search-page'>
      <Form className='search-form' role='search'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className='search-input-label' htmlFor='search-input' />
        <div className='search-form--contents'>
          <input
            style={{ fontSize: fontSize ? `${fontSize}px` : '' }}
            ref={inputRef}
            id='q'
            className={`search ${searching ? 'searching' : ''}`}
            type='search'
            name='q'
            defaultValue={q ?? ''}
            onChange={manageFontSize}
          />
          <button className='search-button' type='submit'>
            <img src={searchIcon} alt='search' />
          </button>
        </div>
      </Form>
      {!!games && games.results?.length === 0 && <div>No results found</div>}
      {!!games && !!games.results?.length && (
        <div className='search-results'>
          {games.results.map((game) => (
            <SearchResult
              key={game.id}
              game={game}
              initialUserData={userGameData?.[game.id]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
