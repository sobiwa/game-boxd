import { useState } from 'react';
import ErrorNote, { type ErrorNoteType } from './ErrorNote';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface PropTypes {
  close: () => void;
}

export default function AccountSlider({ close }: PropTypes) {
  const [error, setError] = useState<ErrorNoteType | null>(null);
  const [slide, setSlide] = useState<boolean>(false);

  return (
    <div className='account-slider-wrapper'>
      <button
        className='nullify-button'
        type='button'
        onClick={close}
        aria-label='close'
      />
      {error && (
        <ErrorNote
          message={error.message}
          details={error.details}
          setError={setError}
        />
      )}
      <div
        className='account-slider'
        style={{ translate: slide ? '-100%' : '0' }}
      >
        <SignIn close={close} setSlide={setSlide} setError={setError} />
        <SignUp close={close} setSlide={setSlide} setError={setError} />
      </div>
    </div>
  );
}
