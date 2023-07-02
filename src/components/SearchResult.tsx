import { useRef } from 'react';
import { format, parseISO } from 'date-fns';
import randomLogo from '../assets/logo';
import { type Result } from '../mocks/actions';
import PlatformsIcons from './PlatformIcons';
import BioteRanker from './BioteRanker';
import BacklogButton from './BacklogButton';
import { type UserGameDataItem } from '../routes/Search';

interface SearchProps {
  game: Result;
  initialUserData: UserGameDataItem | undefined;
}

interface Release {
  year: string | null;
  rest?: string;
}

/*
Initialize userData with props. 
Origin is ONE firebase read of all search results.
Updates to user data on firebase will be displayed
and controlled based on success of writes, avoiding
unnecessary reads
*/

export default function SearchResult({ game, initialUserData }: SearchProps) {
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
        <BioteRanker initialRating={initialUserData?.rating} gameID={game.id} />
        <BacklogButton
          initialSetting={initialUserData?.backlogged}
          gameID={game.id}
        />
      </div>
    </div>
  );
}
