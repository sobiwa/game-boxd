import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import book from '../assets/icons/book-filled-ink.png';
import bookClosed from '../assets/icons/book-closed.png';
import useProcessing from '../hooks/useProcessing';
import useUpdateListener from '../hooks/useUpdateListener';
import bioteIcon from '../assets/icons/biotes/biote.svg';
import arrowIcon from '../assets/icons/arrow.svg';
import Slider from './Slider';
import InterestDisplay from './InterestDisplay';

interface PropTypes {
  gameID: number;
  initialSetting: boolean | undefined;
  initialBacklogDegree: number;
  label: boolean;
}

export default function BacklogButton({
  initialSetting,
  gameID,
  initialBacklogDegree,
  label,
}: PropTypes) {
  const fetcher = useFetcher();
  const [userSetting, setUserSetting] = useState(initialSetting ?? false);
  const [backlogDegree, setBacklogDegree] = useState(initialBacklogDegree ?? 0);

  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (fetcher?.data?.backlogged !== undefined) {
      setUserSetting(fetcher.data.backlogged);
    }
  }, [fetcher.data?.backlogged]);

  // update when user data is retrieved from firebase
  useEffect(() => {
    setUserSetting(initialSetting ?? false);
  }, [initialSetting]);

  useEffect(() => {
    setBacklogDegree(initialBacklogDegree ?? 0);
  }, [initialBacklogDegree]);

  // const temp = fetcher?.formData?.get('backlogged');

  const processing = useProcessing(fetcher.formData);

  const newUpdate = useUpdateListener(fetcher.data?.backlogged);

  const appearsBacklogged =
    (fetcher.formData && fetcher.formData.get('backlogged') === 'true') ||
    (!fetcher.formData && userSetting);

  return (
    <>
      {label && (
        <label htmlFor={`${gameID}-backlog-button`} className='title'>
          Backlogged
          <span className='value-display'>
            {appearsBacklogged ? 'true' : 'false'}
          </span>
        </label>
      )}
      <div
        className={`backlog-button-container ${
          appearsBacklogged ? 'backlogged' : ''
        }`}
      >
        <fetcher.Form method='post' action={`../edit/${gameID}`}>
          <button
            id={`${gameID}-backlog-button`}
            className='backlog-button'
            type='submit'
            name='backlogged'
            value={userSetting ? 'false' : 'true'}
          >
            {processing && (
              <div className='processing-animation-wrapper'>
                <div className='processing-animation' />
              </div>
            )}
            <div className={`backlog-img-wrapper ${newUpdate ? 'spin' : ''}`}>
              <img
                src={appearsBacklogged ? book : bookClosed}
                alt={userSetting ? 'remove from backlog' : 'add to backlog'}
              />

              {newUpdate && (
                <div className='biote-swirl-wrapper'>
                  <img className='biote-swirl' src={bioteIcon} alt='' />
                </div>
              )}
            </div>
          </button>
        </fetcher.Form>
        {appearsBacklogged && backlogDegree > 0 && (
          <InterestDisplay interest={backlogDegree} />
        )}
        {label && appearsBacklogged && (
          <>
            <button
              type='button'
              className={`slider-button ${showSlider ? 'open' : ''}`}
              onClick={() => setShowSlider((prev) => !prev)}
            >
              <img src={arrowIcon} alt='slider' />
            </button>
            {showSlider && (
              <Slider
                gameID={gameID}
                degree={backlogDegree}
                setDegree={setBacklogDegree}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
