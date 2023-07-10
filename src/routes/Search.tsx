import { useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import type { Response as GamesSearchResponse } from '../mocks/searchLoader';
import SearchResult from '../components/SearchResult';
import { getUserDataForGamesArray } from '../firebase';
import type { UserGameData, OutletContext } from '../App';
import SearchBar from '../components/SearchBar';

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
  const { user, setGameData, userGameData, setUserGameData }: OutletContext =
    useOutletContext();

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

  useEffect(() => {
    setGameData(games?.results ?? null);
  }, [games]);

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
      <SearchBar />
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
