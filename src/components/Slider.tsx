import { useRef, useState, useEffect } from 'react';
import { useFetcher, useSubmit } from 'react-router-dom';
import SliderBlock from './SliderBlock';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';

interface PropTypes {
  gameID: number;
  degree: number;
  setDegree: React.Dispatch<React.SetStateAction<number>>;
}

export default function Slider({ gameID, degree, setDegree }: PropTypes) {
  // TODO: fix bug where number stops working after hovering buttons

  const formRef = useRef<null | HTMLFormElement>(null);

  const [active, setActive] = useState(false);
  const [hoverDegree, setHoverDegree] = useState(degree);

  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data?.backlogDegree) {
      setDegree(fetcher.data.backlogDegree);
    }
  }, [fetcher]);

  const processing = useProcessing(fetcher.formData);

  const newUpdate = useUpdateListener(fetcher.data?.backlogDegree);

  function hover() {
    setActive(true);
  }

  function unhover() {
    setActive(false);
    setHoverDegree(degree);
  }

  let tempRating;

  if (fetcher.formData) {
    const newRating = fetcher.formData.get('backlogDegree');
    if (newRating) {
      tempRating = +newRating;
    }
  }

  const degreeAppearance = tempRating ?? degree;

  const blocks = [];
  for (let i = 1; i <= 100; i += 1) {
    blocks.push(
      <SliderBlock
        key={`block-${i}`}
        active={active}
        position={i}
        degree={degreeAppearance}
        hoverDegree={hoverDegree}
        setHoverDegree={setHoverDegree}
      />
    );
  }

  function handleNumberBlur() {
    if (
      fetcher.formData ||
      Number(fetcher.data?.backlogDegree) === hoverDegree
    ) {
      return;
    }
    if (formRef.current) {
      fetcher.submit(formRef.current);
    }
    unhover();
  }

  return (
    <div className={`slider ${processing ? 'processing' : ''}`}>
      <fetcher.Form ref={formRef} method='post' action={`../edit/${gameID}`}>
        <input
          name='backlogDegree'
          onFocus={hover}
          onBlur={handleNumberBlur}
          onChange={(e) => setHoverDegree(+e.target.value)}
          className='slider-number'
          type='number'
          min='1'
          max='100'
          value={active ? hoverDegree : degreeAppearance}
        />
        <div
          className='block-container'
          onPointerEnter={hover}
          onPointerCancel={unhover}
          onPointerLeave={unhover}
          onFocus={hover}
          onBlur={unhover}
        >
          {blocks}
        </div>
      </fetcher.Form>
    </div>
  );
}
