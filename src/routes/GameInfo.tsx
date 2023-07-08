import { useState, useEffect } from 'react';
import {
  Params,
  useLoaderData,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import parse from 'html-react-parser';
import { OutletContext, type UserGameDataItem as UserData } from '../App';
import type { SingleGameResponse } from '../mocks/actions';
import { getUserDataForGame } from '../firebase';
import PlatformsIcons from '../components/PlatformIcons';
import ReleaseDate from '../components/ReleaseDate';

interface ErrorNote {
  message: string;
  origin: string;
}

/* had useEffect to access cached data from search results, but search results return
different data (e.g., no description */
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
  }
  return null;
}

export default function GameInfo() {
  const { gameID } = useParams();
  const { user }: OutletContext = useOutletContext();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<ErrorNote | null>(null);
  const [expandDescription, setExpandDescription] = useState(false);

  const gameData = useLoaderData() as SingleGameResponse | null;
  console.log(gameData);

  useEffect(() => {
    async function fetchUserData() {
      if (!gameID) return;
      try {
        const data = await getUserDataForGame(gameID);
        if (data === 'no user data') return;
        if (data.length > 1) {
          // TODO: allow user to choose which duplicate to delete if for some reason duplicate exists
        } else {
          setUserData(data[0] as UserData);
        }
      } catch (err) {
        setError({ message: (err as Error).message, origin: 'fetchUserData' });
      }
    }

    if (user) {
      fetchUserData();
    }
  }, [user]);

  if (!gameData) {
    return <div>Page not found</div>;
  }

  const {
    name,
    parent_platforms: platforms,
    background_image: bgImg,
    description,
    released,
  } = gameData;

  return (
    <div className='game-info-page'>
      <div className='title-container'>
        <h1>{name}</h1>
        <div className='title--sub'>
          {released && <ReleaseDate rawDate={released} />}
        </div>
      </div>
      <div className='img-container'>
        <PlatformsIcons platforms={platforms} />
        <img className='bg-img' src={bgImg} alt={name} />
      </div>
      <div className='game-info-box'>
        {!!description && (
          <div className='description'>
            Description:
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
        )}
      </div>
    </div>
  );
}
