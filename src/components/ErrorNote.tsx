import { useState } from 'react';
import infoIcon from '../assets/icons/info-black.svg';
import closeIcon from '../assets/icons/close-black.svg';

export interface ErrorNoteType {
  message: string;
  details: string;
}

interface PropTypes {
  message: string;
  details: string;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

export default function ErrorNote({ message, details, setError }: PropTypes) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='error-note-wrapper'>
      <div className='error-note'>
        <div className='primary-message'>
          <div>
            <button
              type='button'
              className='error-info-button'
              onClick={() => setShowDetails((prev) => !prev)}
            >
              <img src={infoIcon} alt='view details' />
            </button>
            {message}
          </div>
          <button
            type='button'
            className='error-close-button'
            onClick={() => setError(null)}
          >
            <img src={closeIcon} alt='close' />
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateRows: showDetails ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.2s',
          }}
        >
          <p style={{ overflow: 'hidden' }}>{details}</p>
        </div>
      </div>
    </div>
  );
}
