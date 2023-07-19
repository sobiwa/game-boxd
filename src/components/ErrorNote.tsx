import { useMemo, useState } from 'react';
import uniqid from 'uniqid';
import infoIcon from '../assets/icons/info-black.svg';
import type { ErrorNoteType } from './UserGameData';
import closeIcon from '../assets/icons/close-black.svg';

interface PropTypes {
  message: string;
  details: string;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

export default function ErrorNote({ message, details, setError }: PropTypes) {
  const uniqueKey = useMemo(() => uniqid(), [message]);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div key={uniqueKey} className='error-note-wrapper'>
      <div className='error-note'>
        <div className='primary-message'>
          <button
            type='button'
            className='error-info-button'
            onClick={() => setShowDetails((prev) => !prev)}
          >
            <img src={infoIcon} alt='view details' />
          </button>
          {message}
          <button
            type='button'
            className='error-close-button'
            onClick={() => setError(null)}
          >
            <img src={closeIcon} alt='close' />
          </button>
        </div>
        {showDetails && <p>{details}</p>}
      </div>
    </div>
  );
}
