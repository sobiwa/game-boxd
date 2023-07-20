import { useState, useMemo, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import randomLogo from './assets/logo';
import useUser, { type User } from './hooks/useUser';
import { type GamesArray } from './mocks/searchLoader';
import SearchBar from './components/SearchBar';
import bioteLogo from './assets/icons/biotes/biote.svg';
import UserNav from './components/UserNav';
import SignIn from './components/SignIn';

export interface UserGameDataItem {
  gameID: number;
  userID?: string;
  backlogged?: boolean;
  backlogDegree?: number;
  rating?: number;
  review?: string;
}

export interface UserGameData {
  [key: number]: UserGameDataItem;
}

export interface OutletContext {
  user: User;
  gameData: GamesArray | null;
  setGameData: React.Dispatch<React.SetStateAction<GamesArray | null>>;
  userGameData: UserGameData | null;
  setUserGameData: React.Dispatch<React.SetStateAction<UserGameData | null>>;
}

export default function App() {
  const user = useUser();

  const signInRef = useRef<null | HTMLDialogElement>(null);
  const [gameData, setGameData] = useState<GamesArray | null>(null);
  const [userGameData, setUserGameData] = useState<UserGameData | null>(null);

  const loc = useLocation();

  const randomizedLogo = useMemo(() => randomLogo(), []);

  const logo =
    !loc.search && window.innerWidth < 500
      ? { src: bioteLogo, style: { height: '30px', width: '30px' } }
      : { src: randomizedLogo, style: {} };

  const outletContext: OutletContext = {
    user,
    gameData,
    setGameData,
    userGameData,
    setUserGameData,
  };

  function openSignInModal() {
    if (signInRef.current) signInRef.current.showModal();
  }

  function closeSignInModal() {
    if (signInRef.current) signInRef.current.close();
  }

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo-wrapper' style={logo.style}>
          <img src={logo.src} style={logo.style} alt='logo' />
        </div>
        {!loc.search && <SearchBar />}
        <UserNav user={user} openSignIn={() => openSignInModal()}/>
      </div>
      <main>
        <Outlet context={outletContext} />
      </main>
      <dialog ref={signInRef} className='sign-in-modal'>
        <SignIn cancel={() => closeSignInModal()} />
      </dialog>
    </div>
  );
}
