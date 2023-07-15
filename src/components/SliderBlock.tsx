import blockIcon from '../assets/icons/square.svg';
import blockEmptyIcon from '../assets/icons/square-empty.svg';

interface PropTypes {
  active: boolean;
  position: number;
  degree: number;
  hoverDegree: number;
  setHoverDegree: React.Dispatch<React.SetStateAction<number>>;
}

export default function SliderBlock({
  active,
  position,
  degree,
  hoverDegree,
  setHoverDegree,
}: PropTypes) {
  const degreeVisual = active ? hoverDegree : degree ?? 0;
  const imgSrc = +degreeVisual >= position ? blockIcon : blockEmptyIcon;

  return (
    <div className='slider-block'>
      <button
        onMouseEnter={() => {
          setHoverDegree(position);
        }}
        onFocus={() => {
          setHoverDegree(position);
        }}
        className='slider-block-button'
        type='submit'
        value={position}
      >
        <img
          style={{ pointerEvents: 'none' }}
          className='slider-block-img'
          src={imgSrc}
          alt=''
        />
        <img
          style={{ pointerEvents: 'none' }}
          className='slider-block-img'
          src={imgSrc}
          alt=''
        />
      </button>
    </div>
  );
}
