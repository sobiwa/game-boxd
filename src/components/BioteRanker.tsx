import { useRef, useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import Biote from './Biote';
import useProcessing from '../hooks/useProcessing';

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
          <Biote
            rating={ratingAppearance}
            rank={1}
            active={active.current}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
          <Biote
            rating={ratingAppearance}
            rank={2}
            active={active.current}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
          <Biote
            rating={ratingAppearance}
            rank={3}
            active={active.current}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
          <Biote
            rating={ratingAppearance}
            rank={4}
            active={active.current}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
          <Biote
            rating={ratingAppearance}
            rank={5}
            active={active.current}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
        </fetcher.Form>
      </div>
    </>
  );
}
