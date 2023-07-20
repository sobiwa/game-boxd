import { useState } from 'react';
import type { User } from '../hooks/useUser';
import bioteIcon from '../assets/icons/biotes/biote.svg';

interface PropTypes {
  user: User;
  openSignIn: () => void;
}

export default function UserNav({ user, openSignIn }: PropTypes) {
  const [showNav, setShowNav] = useState(false);

  if (!user) {
    return (
      <div className='user-nav'>
        <button className='user-button' type='button'>
          <div className='avatar-container'>
            <img src={bioteIcon} alt='avatar' />
          </div>
          Sign in
        </button>
      </div>
    );
  }
  return (
    <div className='user-nav'>
      <button
        className='user-button'
        type='button'
        onClick={() => setShowNav((prev) => !prev)}
      >
        <div className='avatar-container'>
          <img src={user?.firebase.photoURL ?? bioteIcon} alt='avatar' />
        </div>
        {user.firebase.isAnonymous ? 'Anon' : user.firebase.displayName}
      </button>
      {showNav && (
        <div className='user-nav--collapsible'>
          <ul>
            <li>
              <button
                type='button'
                onClick={() => {
                  openSignIn();
                  setShowNav(false);
                }}
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
