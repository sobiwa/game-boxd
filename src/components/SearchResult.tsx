import { useRef } from 'react';
import { format, parseISO } from 'date-fns';
import randomLogo from '../assets/logo';
import type { Result } from '../mocks/actions';
import PlatformsIcons from './PlatformIcons';
import bioteEmpty from '../assets/icons/biotes/biote-empty.svg';

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

  function metaColor(num: number): string {
    return num > 74 ? '#6c3' : num > 49 ? '#fc3' : '#f00';
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
              <div className='rest-wrapper'>
                <div className='rest'>
                  <span>{`| ${release.rest}`}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {!!game.parent_platforms?.length && (
          <PlatformsIcons platforms={game.parent_platforms} />
        )}
        {!!game.metacritic && (
          <div
            title='Metascore'
            className='meta-score'
            style={{ backgroundColor: metaColor(game.metacritic) }}
          >
            {game.metacritic}
          </div>
        )}
        <div className='biote-ranker'>
          <div className='biote-ranker-biote'>
            <img src={bioteEmpty}/>
          </div>

        </div>
      </div>
    </div>
  );
}
