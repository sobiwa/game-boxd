import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import useProcessing from '../hooks/useProcessing';
import bioteIcon from '../assets/icons/biotes/biote.svg';
import useUpdateListener from '../hooks/useUpdateListener';

interface PropTypes {
  gameID: number;
  initialValue: string;
}

export default function ReviewForm({ gameID, initialValue }: PropTypes) {
  const [review, setReview] = useState('');
  const fetcher = useFetcher();

  function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(e.target.value);
  }

  const newUpdate = useUpdateListener(fetcher.data?.review);

  console.log(newUpdate);

  useEffect(() => {
    setReview(initialValue);
  }, [initialValue]);

  const processing = useProcessing(fetcher.formData);

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
