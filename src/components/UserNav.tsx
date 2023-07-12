import type { User } from '../hooks/useUser';
import bioteIcon from '../assets/icons/biotes/biote.svg';

interface PropTypes {
  user: User;
}

export default function UserNav({ user }: PropTypes) {
  if (!user) {
    return (
      <button className='user-button' type='button'>
        <div className='avatar-container'>
          <img src={bioteIcon} alt='avatar' />
        </div>
        Sign in
      </button>
    );
  }
  return (
    <div className='user-nav'>
      <button className='user-button' type='button'>
        <div className='avatar-container'>
          <img src={user?.firebase.photoURL ?? bioteIcon} alt='avatar' />
        </div>
        {user.firebase.isAnonymous ? 'Anon' : user.firebase.displayName}
      </button>
    </div>
  );
}
