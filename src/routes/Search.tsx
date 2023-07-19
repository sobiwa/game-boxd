import { useState, useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import type { Response as GamesSearchResponse } from '../mocks/searchLoader';
import SearchResult from '../components/SearchResult';
import { getUserDataForGamesArray } from '../firebase';
import type { UserGameData, OutletContext } from '../App';
import SearchBar from '../components/SearchBar';
import type { ErrorNoteType } from '../components/UserGameData';
import ErrorNote from '../components/ErrorNote';

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

  const [error, setError] = useState<ErrorNoteType | null>(null);

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
              setError={setError}
            />
          ))}
          {error && (
            <ErrorNote
              message={error.message}
              details={error.details}
              setError={setError}
            />
          )}
        </div>
      )}
    </div>
  );
}
