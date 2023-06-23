import { format } from 'date-fns';
import randomLogo from '../assets/logo';
import type { Result } from '../mocks/actions';

interface SearchProps {
  game: Result;
}

export default function SearchResult({ game }: SearchProps): JSX.Element {
  const imgSrc = game.background_image ?? randomLogo();
  let release;
  if (game.released !== null) {
    release = game.released;
  }
  return (
    <div className='search-results--item' key={game.id}>
      <div className='search-results--image-wrapper'>
        <img src={imgSrc} alt={game.name} />
      </div>
      {game.name}
    </div>
  );
}
