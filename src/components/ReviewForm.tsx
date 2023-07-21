import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import useProcessing from '../hooks/useProcessing';
import bioteIcon from '../assets/icons/biotes/biote.svg';
import useUpdateListener from '../hooks/useUpdateListener';
import type { ErrorNoteType } from './UserGameData';
import useErrorRefresher from '../hooks/useErrorRefresher';

interface PropTypes {
  gameID: number;
  initialValue: string;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

export default function ReviewForm({
  gameID,
  initialValue,
  setError,
}: PropTypes) {
  const [review, setReview] = useState('');
  const fetcher = useFetcher();

  useErrorRefresher(fetcher.state, setError);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.error) {
      setError({
        message: 'Error updating review',
        details: fetcher.data.error,
      });
    }
  }, [fetcher]);

  function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(e.target.value);
  }

  const newUpdate = useUpdateListener(fetcher.data?.review);

  useEffect(() => {
    setReview(initialValue);
  }, [initialValue]);

  const processing = useProcessing(fetcher.state);

  return (
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
      <div className='review-submit-wrapper'>
        <button
          type='submit'
          className={`review-submit ${processing ? 'processing' : ''}`}
        >
          Submit
          {newUpdate && (
            <div className='update-biote-wrapper'>
              <img className='update-biote' src={bioteIcon} alt='' />
            </div>
          )}
        </button>
      </div>
    </fetcher.Form>
  );
}
