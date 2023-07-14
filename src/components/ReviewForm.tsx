import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import useProcessing from '../hooks/useProcessing';

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
        </button>
      </div>
    </fetcher.Form>
  );
}
