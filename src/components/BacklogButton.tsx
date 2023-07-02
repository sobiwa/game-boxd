import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import book from '../assets/icons/book-filled-ink.png';
import bookClosed from '../assets/icons/book-closed.png';

interface PropTypes {
  initialSetting?: boolean;
  gameID: number;
}

export default function BacklogButton({ initialSetting, gameID }: PropTypes) {
  const fetcher = useFetcher();
  const [userSetting, setUserSetting] = useState(initialSetting ?? false);

  let tempBacklogged;

  if (fetcher.formData) {
    console.log(fetcher.formData.get('backlogged') === 'true');
    tempBacklogged = fetcher.formData.get('backlogged') === 'true' ? book : bookClosed;
  }

  useEffect(() => {
    console.log('setting userSetting');
    if (fetcher?.data?.backlogged !== undefined) {
      setUserSetting(fetcher.data.backlogged);
    }
  }, [fetcher.data?.backlogged]);

  // update when user data is retrieved from firebase
  useEffect(() => {
    setUserSetting(initialSetting ?? false);
  }, [initialSetting]);

  let imgSrc;

  if (tempBacklogged) {
    imgSrc = tempBacklogged
  } else {
    imgSrc = userSetting ? book : bookClosed;
  }

  return (
    <div>
      <fetcher.Form method='post' action={`../edit/${gameID}`}>
        <button
          className='backlog-button'
          type='submit'
          name='backlogged'
          value={userSetting ? 'false' : 'true'}
        >
          <img src={imgSrc} />
        </button>
      </fetcher.Form>
    </div>
  );
}
