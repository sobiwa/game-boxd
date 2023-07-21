import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OutletContext, type UserGameDataItem as UserData } from '../App';
import { getUserDataForGame } from '../firebase';
import BacklogButton from './BacklogButton';
import BioteRanker from './BioteRanker';
import ReviewForm from './ReviewForm';
import ErrorNote from './ErrorNote';

interface PropTypes {
  gameID: number | string;
}

export interface ErrorNoteType {
  message: string;
  details: string;
}

export default function UserGameData({ gameID }: PropTypes) {
  const { user }: OutletContext = useOutletContext();
  const [backlogged, setBacklogged] = useState(false);
  const [backlogDegree, setBacklogDegree] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState<ErrorNoteType | null>(null);

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
        setError({
          message: 'Error retrieving user data',
          details: (err as Error).message,
        });
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
          setError={setError}
          label
        />
      </div>
      <div className='ranker-container user-game-data--item'>
        <BioteRanker
          gameID={+gameID}
          initialRating={rating}
          setError={setError}
          label
        />
      </div>
      <ReviewForm gameID={+gameID} initialValue={review} setError={setError} />
      {error && <ErrorNote message={error.message} details={error.details} setError={setError}/>}
    </div>
  );
}
