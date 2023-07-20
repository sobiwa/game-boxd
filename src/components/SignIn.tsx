import { useState, useEffect } from 'react';
import { Form, Link, useFetcher } from 'react-router-dom';
import GoogleButton from './GoogleButton';
import { emailSignIn } from '../firebase';
import ErrorNote, { type ErrorNoteType } from './ErrorNote';

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
  cancel: () => void;
}

interface ResponseTypes {
  error?: string;
  success?: string;
}

export default function SignIn({ cancel }: PropTypes) {
  const [error, setError] = useState<ErrorNoteType | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetcher = useFetcher();

  // const actionData = useActionData() as ResponseTypes;

  // useEffect(() => {
  //   if (actionData && actionData.error) {
  //     setError({ message: 'Error signing in', details: actionData.error });
  //   }
  // }, [actionData]);

  useEffect(() => {
    if (fetcher.data?.error) {
      setError({ message: 'Error signing in', details: fetcher.data.error });
    }
  }, fetcher.data);

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
    <div className='sign-in-container'>
      {error && (
        <ErrorNote
          message={error.message}
          details={error.details}
          setError={setError}
        />
      )}
      <button
        className='nullify-button'
        type='button'
        onClick={cancel}
        aria-label='close'
      />
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
              <button className='button' type='submit'>
                Sign in
              </button>
            </div>
          </li>
        </ul>
      </fetcher.Form>
      <Link>Create Account</Link>
      <div>OR</div>
      <GoogleButton />
    </div>
  );
}
