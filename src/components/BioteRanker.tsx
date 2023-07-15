import { useRef, useState, useEffect, useMemo } from 'react';
import { useFetcher } from 'react-router-dom';
import Biote from './Biote';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';

interface PropTypes {
  gameID: number;
  initialRating: number | undefined;
  label: boolean;
}

export default function BioteRanker({
  initialRating,
  gameID,
  label,
}: PropTypes) {
  const fetcher = useFetcher();

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
      tempRating = +newRating;
    }
  }

  useEffect(() => {
    if (fetcher?.data?.rating) {
      setUserRating(fetcher.data.rating);
    }
  }, [fetcher]);

  const ratingAppearance = tempRating ?? userRating;

  const processing = useProcessing(fetcher.formData);

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
      <div
        className={`biote-ranker ${processing ? 'temp' : ''}`}
        onPointerEnter={hover}
        onPointerCancel={unhover}
        onPointerLeave={unhover}
      >
        <fetcher.Form method='post' action={`../edit/${gameID}`}>
          {biotes}
        </fetcher.Form>
      </div>
    </>
  );
}
