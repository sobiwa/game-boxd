import bioteFull from '../assets/icons/biotes/biote.svg';
import bioteHalf from '../assets/icons/biotes/biote-half.svg';
import bioteEmpty from '../assets/icons/biotes/biote-empty.svg';

interface PropTypes {
  active: boolean;
  rank: number;
  rating: number | undefined;
  hoverRating: number;
  setHoverRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function Biote({
  active,
  rank,
  rating,
  hoverRating,
  setHoverRating,
}: PropTypes) {
  const ratingVisual = active ? hoverRating : rating ?? 0;
  const imgSrc =
    +ratingVisual >= rank
      ? bioteFull
      : +ratingVisual === rank - 0.5
      ? bioteHalf
      : bioteEmpty;

  return (
    <div className='rank-biote'>
      <img
        style={{ pointerEvents: 'none' }}
        className='rank-biote-img'
        src={imgSrc}
        alt='biote'
      />
      <button
        name='rating'
        onMouseEnter={() => {
          setHoverRating(rank - 0.5);
        }}
        className='rank-button'
        type='submit'
        value={rank - 0.5}
        aria-label={`rank game ${rank - 0.5}`}
      />
      <button
        name='rating'
        onMouseEnter={() => {
          setHoverRating(rank);
        }}
        className='rank-button'
        type='submit'
        value={rank}
        aria-label={`rank game ${rank}`}
      />
    </div>
  );
}
