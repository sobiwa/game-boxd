import { useState, useMemo } from 'react';
import { Params, useLoaderData, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import type { SingleGameResponse } from '../mocks/gameInfoLoader';
import PlatformsIcons from '../components/PlatformIcons';
import ReleaseDate from '../components/ReleaseDate';
import esrbGenerator from '../helpers/esrbGenerator';
import metaColor from '../helpers/metaColor';
import GameInfoList from '../components/GameInfoList';
import UserGameData from '../components/UserGameData';

/* had useEffect to access cached data from search results, but search results return
different data (e.g., no description) */
export async function loader({ params }: { params: Params }) {
  const { gameID } = params;
  if (gameID) {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${gameID}?key=0022e0846f034f58b2507bd0e9e5c8d0`
      );
      return response;
    } catch (err) {
      throw new Error(
        `Problem fetching game data from API: ${(err as Error).message}`
      );
    }
  } else {
    throw new Error('Page not found');
  }
}

export default function GameInfo() {
  const { gameID } = useParams();

  const [expandDescription, setExpandDescription] = useState(false);

  const gameData = useLoaderData() as SingleGameResponse | null;

  if (!gameData || !gameID) {
    return <div>Page not found</div>;
  }

  const {
    name,
    parent_platforms: parentPlatforms,
    background_image: bgImg,
    description,
    released,
    metacritic,
    platforms,
    esrb_rating: esrbRating,
    playtime,
    developers,
    publishers,
    genres,
  } = gameData;

  const lists = [
    { descriptor: 'Developers', data: developers },
    { descriptor: 'Publishers', data: publishers },
    { descriptor: 'Genres', data: genres },
    { descriptor: 'Platforms', data: platforms },
  ].filter((item) => item.data);

  const esrbIcon = useMemo(
    () => (esrbRating?.id ? esrbGenerator(esrbRating.id) : null),
    [esrbRating]
  );

  return (
    <div className='game-info-page'>
      <div className='game-info'>
        <div className='title-container'>
          <h1>{name}</h1>
          {released && <ReleaseDate rawDate={released} />}
        </div>
        <div className='img-container'>
          {!!parentPlatforms && <PlatformsIcons platforms={parentPlatforms} />}
          <img className='bg-img' src={bgImg} alt={name} />
        </div>
        <div className='game-info-box'>
          {!!description && (
            <div className='description'>
              <div className='title'>Description</div>
              <div className='description-contents'>
                <div className={expandDescription ? '' : 'fade'}>
                  {parse(description)}
                </div>
                <button
                  className='description-expansion-button'
                  type='button'
                  onClick={() => setExpandDescription((prev) => !prev)}
                >
                  {expandDescription ? 'show less' : 'show more'}
                </button>
              </div>
            </div>
          )}
          <div className='game-info-box--small'>
            {!!playtime && (
              <div>
                <div className='small-item-container'>
                  <div className='title--sub'>Average Playtime</div>
                  <div>{`${playtime} hours`}</div>
                </div>
              </div>
            )}
            {!!metacritic && (
              <div>
                <div className='small-item-container'>
                  <div className='title--sub'>MetaScore</div>
                  <div
                    style={{ backgroundColor: metaColor(metacritic) }}
                    className='metascore'
                  >
                    {metacritic}
                  </div>
                </div>
              </div>
            )}
            {!!esrbRating && (
              <div>
                <div className='small-item-container'>
                  <div className='title--sub'>Age Rating</div>
                  <div>
                    <img
                      className='esrb'
                      src={esrbIcon}
                      alt={esrbRating.name}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {lists.length > 0 && (
            <div className='game-info-box--lists'>
              {lists.map((item) => (
                <GameInfoList
                  key={`${item.descriptor}-list`}
                  title={item.descriptor}
                  items={item.data}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <UserGameData gameID={gameID} />
    </div>
  );
}
