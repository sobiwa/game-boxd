import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import randomLogo from '../assets/logo';
import { type Result } from '../mocks/searchLoader';
import PlatformsIcons from './PlatformIcons';
import BioteRanker from './BioteRanker';
import BacklogButton from './BacklogButton';
import { type UserGameDataItem } from '../App';
import ReleaseDate from './ReleaseDate';
import metaColor from '../helpers/metaColor';
import type { ErrorNoteType } from './UserGameData';

interface SearchProps {
  game: Result;
  initialUserData: UserGameDataItem | undefined;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

/*
Initialize userData with props. 
Origin is ONE firebase read of all search results.
Updates to user data on firebase will be displayed
and controlled based on success of writes, avoiding
unnecessary reads
*/

export default function SearchResult({
  game,
  initialUserData,
  setError,
}: SearchProps) {
  const imgSrc = useRef(game.background_image ?? randomLogo());

  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className='search-results--item'>
      <div className='search-results--item-contents'>
        <Link className='search-results--link' to={`../games/${game.id}`}>
          <div
            className={`search-results--image-wrapper ${
              imgLoading ? 'image-loading' : ''
            }`}
          >
            <img
              src={imgSrc.current}
              alt={game.name}
              onLoad={() => setImgLoading(false)}
            />
            {!!game.parent_platforms?.length && (
              <PlatformsIcons platforms={game.parent_platforms} />
            )}
          </div>
          <div className='search-results--item-name'>{game.name}</div>
        </Link>
        {!!game.released && <ReleaseDate rawDate={game.released} />}
        {!!game.metacritic && (
          <div
            title='Metascore'
            className='meta-score'
            style={{ backgroundColor: metaColor(game.metacritic) }}
          >
            {game.metacritic}
          </div>
        )}
        <BioteRanker
          initialRating={initialUserData?.rating}
          gameID={game.id}
          setError={setError}
        />
        <BacklogButton
          initialSetting={initialUserData?.backlogged}
          initialBacklogDegree={initialUserData?.backlogDegree ?? 0}
          gameID={game.id}
          setError={setError}
        />
      </div>
    </div>
  );
}
