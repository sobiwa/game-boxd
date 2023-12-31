import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import GoogleButton from './GoogleButton';
import { emailSignIn } from '../firebase';
import { type ErrorNoteType } from './ErrorNote';
import useProcessing from '../hooks/useProcessing';
import useErrorRefresher from '../hooks/useErrorRefresher';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    if (!email || !password) {
      throw new Error('Missing field');
    }
    await emailSignIn(`${email}`, `${password}`);
    return { success: 'Signed in' };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

interface PropTypes {
  close: () => void;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>;
}

interface ResponseTypes {
  error?: string;
  success?: string;
}

export default function SignIn({ close, setSlide, setError }: PropTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetcher = useFetcher();

  useErrorRefresher(fetcher.state, setError)

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.error) {
      const newError: ErrorNoteType = {
        message: '',
        details: fetcher.data.error,
      };
      switch (fetcher.data.error) {
        case 'Firebase: Error (auth/user-not-found).':
          newError.message = 'User not found';
          break;
        default:
          newError.message = 'Error signing in';
      }
      setError(newError);
    }
    if (fetcher.data?.success) {
      close();
    }
  }, [fetcher.data]);

  const processing = useProcessing(fetcher.state);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className='account-slide'>
      <fetcher.Form method='post' action='/account/sign-in'>
        <ul className='sign-in--list'>
          <li>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              value={password}
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
                Sign in
              </button>
            </div>
          </li>
        </ul>
      </fetcher.Form>
      <button
        className='create-account-button'
        type='button'
        onClick={() => setSlide(true)}
      >
        Create Account
      </button>
      <div>OR</div>
      <GoogleButton />
    </div>
  );
}
