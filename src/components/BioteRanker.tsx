import { useRef, useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import Biote from './Biote';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';
import type { ErrorNoteType } from './ErrorNote';
import useErrorRefresher from '../hooks/useErrorRefresher';

interface PropTypes {
  gameID: number;
  initialRating: number | null | undefined;
  label?: boolean;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

export default function BioteRanker({
  initialRating,
  gameID,
  label,
  setError,
}: PropTypes) {
  const fetcher = useFetcher();

  useErrorRefresher(fetcher.state, setError);

  const active = useRef(false);

  const [userRating, setUserRating] = useState(initialRating ?? 0);
  const [hoverRating, setHoverRating] = useState(0);

  // update when user data is retrieved from firebase
  useEffect(() => {
    setUserRating(initialRating ?? 0);
  }, [initialRating]);

  function hover() {
    active.current = true;
  }

  function unhover() {
    active.current = false;
    setHoverRating(0);
  }

  let tempRating;

  if (fetcher.formData) {
    const newRating = fetcher.formData.get('rating');
    if (newRating) {
      tempRating = newRating === 'null' ? 0 : +newRating;
    }
  }

  useEffect(() => {
    if (fetcher.data?.rating !== undefined) {
      setUserRating(fetcher.data.rating ?? 0);
    }
  }, [fetcher.data?.rating]);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.error !== undefined) {
      setError({
        message: 'Error updating rating',
        details: fetcher.data.error,
      });
    }
  }, [fetcher]);

  const ratingAppearance = tempRating ?? userRating;

  const processing = useProcessing(fetcher.state);

  const newUpdate = useUpdateListener(fetcher.data?.rating);

  const biotes = [];
  for (let i = 1; i < 6; i += 1) {
    biotes.push(
      <div
        key={`${gameID}-biote-${i}`}
        className={`biote-wrapper ${newUpdate ? 'jump' : ''}`}
      >
        <Biote
          rating={ratingAppearance}
          rank={i}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
      </div>
    );
  }

  return (
    <>
      {label && (
        <div className='title'>
          Rate
          <span className='value-display'>
            {ratingAppearance === 0 ? 'no rating' : ratingAppearance}
          </span>
        </div>
      )}
      <div className={`biote-ranker ${processing ? 'temp' : ''}`}>
        <fetcher.Form method='post' action={`../edit/${gameID}`}>
          <div
            className='biotes-container'
            onPointerEnter={hover}
            onPointerCancel={unhover}
            onPointerLeave={unhover}
          >
            {biotes}
          </div>
          {ratingAppearance > 0 && (
            <button
              name='rating'
              value='null'
              type='submit'
              className='nullify-button'
              aria-label='delete rating'
            />
          )}
        </fetcher.Form>
      </div>
    </>
  );
}
