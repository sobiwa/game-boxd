import { useRef } from 'react';
import { format, parseISO } from 'date-fns';
import randomLogo from '../assets/logo';
import type { Result } from '../mocks/actions';

interface SearchProps {
  game: Result;
}

interface Release {
  year: string | null;
  rest?: string;
}

export default function SearchResult({ game }: SearchProps): JSX.Element {
  const imgSrc = useRef(game.background_image ?? randomLogo());

  const release: Release = {
    year: null,
  };

  if (game.released) {
    const date = parseISO(game.released);
    release.year = format(date, 'yyyy');
    release.rest = format(date, 'MMMM d');
  }

  return (
    <div className='search-results--item'>
      <div className='search-results--item-contents'>
        <div className='search-results--image-wrapper'>
          <img src={imgSrc.current} alt={game.name} />
        </div>
        <div className='search-results--item-name'>{game.name}</div>
        {release.year && (
          <div>
            <div className='release-date'>
              <div className='year'>{release.year}</div>
              <div className='rest'>{`| ${release.rest}`}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
