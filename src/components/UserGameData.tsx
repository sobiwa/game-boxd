import { useState, useEffect } from 'react';
import { useOutletContext, useFetcher } from 'react-router-dom';
import { OutletContext, type UserGameDataItem as UserData } from '../App';
import { getUserDataForGame } from '../firebase';
import BacklogButton from './BacklogButton';
import BioteRanker from './BioteRanker';

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
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState<ErrorNote | null>(null);

  const fetcher = useFetcher();

  useEffect(() => {
    async function fetchUserData() {
      if (!gameID) return;
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
        }
      } catch (err) {
        setError({ message: (err as Error).message, origin: 'fetchUserData' });
      }
    }

    if (user) {
      fetchUserData();
    }
  }, [user]);

  function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(e.target.value);
  }

  return (
    <div className='user-game-data'>
      <div className='backlog-button-container user-game-data--item'>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <div className='title'>
            Backlogged
            <span className='value-display'>
              {backlogged ? 'true' : 'false'}
            </span>
          </div>
          <BacklogButton gameID={+gameID} initialSetting={backlogged} />
        </label>
      </div>
      <div className='ranker-container user-game-data--item'>
        <div className='title'>
          Rate<span className='value-display'>{rating === 0 ? 'no rating' : rating}</span>
        </div>
        <BioteRanker gameID={+gameID} initialRating={rating} />
      </div>
      <fetcher.Form
        method='post'
        action={`../edit/${gameID}`}
        className='review-form'
      >
        <label htmlFor='review' className='review'>
          <div className='title'>Review</div>
          <textarea
            name='review'
            onChange={handleReviewChange}
            id='review'
            value={review}
          />
        </label>
        <button type='submit' className='review-submit'>
          Submit
        </button>
      </fetcher.Form>
    </div>
  );
}
