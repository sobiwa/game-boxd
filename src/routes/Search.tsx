import { useState } from 'react';
import { Form, useActionData } from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';
import { type Response as gamesSearchResponse } from '../mocks/actions';
import SearchResult from '../components/SearchResult';

type Response = gamesSearchResponse | string;

export async function action({ request }: any) {
  const data = await request.formData();
  const search: string = data.get('search');
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=0022e0846f034f58b2507bd0e9e5c8d0&page_size=10&search=${search}`
    );
    const games = await response.json();
    return games;
  } catch (err) {
    let errorMessage = 'failed to fetch games';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return errorMessage;
  }
}

export default function Search() {
  const [search, setSearch] = useState('');
  const games = useActionData() as Response;
  console.log(games);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  return (
    <div className='search-page'>
      <Form className='search-form' method='post' action='/search'>
        <div className='search-form--contents'>
          <input
            className='search'
            type='text'
            name='search'
            value={search}
            onChange={handleChange}
          />
          <button className='search-button' type='submit'>
            <img src={searchIcon} alt='search' />
          </button>
        </div>
      </Form>
      <div className='search-results'>
        {games !== null &&
          games !== undefined &&
          typeof games !== 'string' &&
          games.results.map((game) => (
            <SearchResult key={game.id} game={game} />
          ))}
      </div>
    </div>
  );
}
