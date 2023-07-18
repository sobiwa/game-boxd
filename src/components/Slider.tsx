import { useRef, useState, useEffect } from 'react';
import { useFetcher, useSubmit } from 'react-router-dom';
import SliderBlock from './SliderBlock';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';
import infoIcon from '../assets/icons/info.svg';

interface PropTypes {
  gameID: number;
  degree: number;
  setDegree: React.Dispatch<React.SetStateAction<number>>;
}

export default function Slider({ gameID, degree, setDegree }: PropTypes) {
  // TODO: fix bug where number stops working after hovering buttons

  const formRef = useRef<null | HTMLFormElement>(null);
  const numberRef = useRef<null | HTMLInputElement>(null);

  const [active, setActive] = useState(false);
  const [hoverDegree, setHoverDegree] = useState(degree);
  const [showInfo, setShowInfo] = useState(false);

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
    if (numberRef.current && numberRef.current !== document.activeElement) {
      setActive(false);
    }
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
    setActive(false);
  }

  return (
    <div className='slider'>
      <fetcher.Form
        className='slider-form'
        ref={formRef}
        method='post'
        action={`../edit/${gameID}`}
      >
        <div
          className='slider-title'
          onPointerLeave={() => setShowInfo(false)}
          onPointerCancel={() => setShowInfo(false)}
        >
          <div>Interest</div>
          <button
            type='button'
            className='info-button'
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <img src={infoIcon} alt='info' />
          </button>
          {showInfo && (
            <div className='info-box'>
              Likelihood of playing. Helps with backlog organization.
            </div>
          )}
        </div>
        <input
          ref={numberRef}
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
          className={`block-container ${newUpdate ? 'update' : ''}`}
          onPointerEnter={hover}
          onPointerCancel={unhover}
          onPointerLeave={unhover}
          onFocus={hover}
          onBlur={unhover}
        >
          {blocks}
          {processing && (
            <div className='processing-animation-wrapper'>
              <div className='processing-animation' />
            </div>
          )}
        </div>
      </fetcher.Form>
    </div>
  );
}
