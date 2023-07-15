import { useRef, useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import SliderBlock from './SliderBlock';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';

interface PropTypes {
  gameID: number;
  degree: number;
  setDegree: React.Dispatch<React.SetStateAction<number>>;
}

export default function Slider({ gameID, degree, setDegree }: PropTypes) {
  // const active = useRef(false);

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


  function handleButtonSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.target.value)
  }

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
        handleSubmit={(e) => handleButtonSubmit(e)}
      />
    );
  }

  return (
    <div className={`slider ${processing ? 'processing' : ''}`}>
      <fetcher.Form method='post' action={`../edit/${gameID}`}>
        <input
          onFocus={hover}
          onBlur={unhover}
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
