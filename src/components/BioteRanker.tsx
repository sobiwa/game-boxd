import { useRef, useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import Biote from './Biote';

interface PropTypes {
  gameID: number;
  initialRating: number | undefined;
}

export default function BioteRanker({ initialRating, gameID }: PropTypes) {
  const fetcher = useFetcher();

  const active = useRef(false);

  const [userRating, setUserRating] = useState(initialRating ?? 0);
  const [hoverRating, setHoverRating] = useState(0);

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

  // update when user data is retrieved from firebase
  useEffect(() => {
    setUserRating(initialRating ?? 0);
  }, [initialRating]);


  return (
    <div
      className={`biote-ranker ${tempRating ? 'temp' : ''}`}
      onPointerEnter={hover}
      onPointerCancel={unhover}
      onPointerLeave={unhover}
    >
      <fetcher.Form method='post' action={`../edit/${gameID}`}>
        <Biote
          rating={tempRating ?? userRating}
          rank={1}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <Biote
          rating={tempRating ?? userRating}
          rank={2}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <Biote
          rating={tempRating ?? userRating}
          rank={3}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <Biote
          rating={tempRating ?? userRating}
          rank={4}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <Biote
          rating={tempRating ?? userRating}
          rank={5}
          active={active.current}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
      </fetcher.Form>
    </div>
  );
}
