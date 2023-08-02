import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import useProcessing from '../hooks/useProcessing';
import { emailSignUp } from '../firebase';
import { type ErrorNoteType } from './ErrorNote';
import backIcon from '../assets/icons/back.svg';
import useErrorRefresher from '../hooks/useErrorRefresher';

export async function action({ request }: { request: Request }) {
  // await new Promise((res) => setTimeout(res, 2000));
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  try {
    if (!email || !password || !confirmPassword) {
      throw new Error('Missing field');
    }
    if (password !== confirmPassword) throw new Error('Passwords do not match');
    await emailSignUp(`${email}`, `${password}`);
    return { success: 'Signed up' };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

interface PropTypes {
  close: () => void;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

export default function SignUp({ close, setSlide, setError }: PropTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fetcher = useFetcher();

  useErrorRefresher(fetcher.state, setError);

  const processing = useProcessing(fetcher.state);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.error) {
      const newError: ErrorNoteType = {
        message: '',
        details: fetcher.data.error,
      };
      switch (fetcher.data.error) {
        case 'Passwords do not match':
          newError.message = 'Password mismatch';
          break;
        default:
          newError.message = 'Error signing in';
      }
      setError(newError);
    }
    if (fetcher.data?.success) {
      close();
    }
  }, [fetcher]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className='account-slide sign-up'>
      <fetcher.Form method='post' action='/account/sign-up'>
        <ul className='sign-in--list'>
          <li>
            <label htmlFor='create-email'>Email</label>
            <input
              id='create-email'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </li>
          <li>
            <label htmlFor='create-password'>Password</label>
            <input
              id='create-password'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
          </li>
          <li>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              id='confirm-password'
              className={password !== confirmPassword ? 'error-input' : ''}
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </li>
          <li>
            <div className='button-container'>
              <button
                className={`sign-in-button button ${
                  processing ? 'processing' : ''
                }`}
                type='submit'
              >
                Create Account
              </button>
            </div>
          </li>
        </ul>
      </fetcher.Form>
      <button
        className='back-button'
        type='button'
        onClick={() => setSlide(false)}
      >
        <img src={backIcon} alt='back' />
      </button>
    </div>
  );
}
