import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import book from '../assets/icons/book-filled-ink.png';
import bookClosed from '../assets/icons/book-closed.png';
import useProcessing from '../hooks/useProcessing';

interface PropTypes {
  gameID: number;
  initialSetting: boolean | undefined;
  label: boolean;
}

export default function BacklogButton({
  initialSetting,
  gameID,
  label,
}: PropTypes) {
  const fetcher = useFetcher();
  const [userSetting, setUserSetting] = useState(initialSetting ?? false);

  useEffect(() => {
    if (fetcher?.data?.backlogged !== undefined) {
      setUserSetting(fetcher.data.backlogged);
    }
  }, [fetcher.data?.backlogged]);

  // update when user data is retrieved from firebase
  useEffect(() => {
    setUserSetting(initialSetting ?? false);
  }, [initialSetting]);

  // const temp = fetcher?.formData?.get('backlogged');


  const processing = useProcessing(fetcher?.formData);

  const appearsBacklogged =
    (fetcher.formData && fetcher.formData.get('backlogged') === 'true') ||
    (!fetcher.formData && userSetting);

  return (
    <>
      {label && (
        <div className='title'>
          Backlogged
          <span className='value-display'>
            {appearsBacklogged ? 'true' : 'false'}
          </span>
        </div>
      )}
      <div
        className={`backlog-button-container ${
          appearsBacklogged ? 'backlogged' : ''
        }`}
      >
        <fetcher.Form method='post' action={`../edit/${gameID}`}>
          <button
            className={`backlog-button ${processing ? 'temp' : ''}`}
            type='submit'
            name='backlogged'
            value={userSetting ? 'false' : 'true'}
          >
            <div className='backlog-img-wrapper'>
              <img
                src={appearsBacklogged ? book : bookClosed}
                alt={userSetting ? 'remove from backlog' : 'add to backlog'}
              />
            </div>
          </button>
        </fetcher.Form>
      </div>
    </>
  );
}
