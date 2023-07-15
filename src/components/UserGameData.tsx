import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OutletContext, type UserGameDataItem as UserData } from '../App';
import { getUserDataForGame } from '../firebase';
import BacklogButton from './BacklogButton';
import BioteRanker from './BioteRanker';
import ReviewForm from './ReviewForm';

interface PropTypes {
  gameID: number | string;
}

interface ErrorNote {
  message: string;
  origin: string;
}

export default function UserGameData({ gameID }: PropTypes) {
  const { user }: OutletContext = useOutletContext();
  // const [userData, setUserData] = useState<UserData | null>(null);
  const [backlogged, setBacklogged] = useState(false);
  const [backlogDegree, setBacklogDegree] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState<ErrorNote | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      if (!gameID || !user) return;
      try {
        const data = await getUserDataForGame(gameID);
        if (data === 'no user data') return;
        if (data.length > 1) {
          // TODO: allow user to choose which duplicate to delete if for some reason duplicate exists
        } else {
          const retrievedData = data[0] as UserData;
          if (retrievedData.backlogged) setBacklogged(retrievedData.backlogged);
          if (retrievedData.rating) setRating(retrievedData.rating);
          if (retrievedData.review) setReview(retrievedData.review);
          if (retrievedData.backlogDegree)
            setBacklogDegree(retrievedData.backlogDegree);
        }
      } catch (err) {
        console.log(err);
        setError({ message: (err as Error).message, origin: 'fetchUserData' });
      }
    }

    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div className='user-game-data'>
      <div className='user-game-data--item'>
        <BacklogButton
          gameID={+gameID}
          initialSetting={backlogged}
          initialBacklogDegree={backlogDegree}
          label
        />
      </div>
      <div className='ranker-container user-game-data--item'>
        <BioteRanker gameID={+gameID} initialRating={rating} label />
      </div>
      <ReviewForm gameID={+gameID} initialValue={review} />
      {error && <div className='error-bubble'>{error.message}</div>}
    </div>
  );
}
