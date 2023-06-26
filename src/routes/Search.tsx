import { useEffect } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
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

  useEffect(() => {
    const searchInput = document.getElementById('q');
    if (searchInput) {
      (searchInput as HTMLInputElement).value = q ?? '';
    }
  }, [q]);

  return (
    <div className='search-page'>
      <Form className='search-form' role='search'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className='search-input-label' htmlFor='search-input' />
        <div className='search-form--contents'>
          <input
            id='q'
            className='search'
            type='search'
            name='q'
            defaultValue={q ?? ''}
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
