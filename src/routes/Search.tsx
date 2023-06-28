import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';
import { type Response as GamesSearchResponse } from '../mocks/actions';
import SearchResult from '../components/SearchResult';

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

export default function Search() {
  const { games, q } = useLoaderData() as GamesSearchResponse;
  console.log(games);
  const navigation = useNavigation();

  const inputRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef(0);
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
        if (prev === null) {
          return currentFontSize - 1;
        }
        return prev - 1;
      });
    } else {
      setFontSize((prev) => {
        if (
          prev === null ||
          lengthRef.current >
            (inputRef.current as HTMLInputElement).value.length
        )
          return null;
        return prev;
      });
    }
    lengthRef.current = currentInputLength;
  }

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
            <SearchResult key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
