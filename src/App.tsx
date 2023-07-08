import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import randomLogo from './assets/logo';
import useUser, { type User } from './hooks/useUser';
import { type GamesArray } from './mocks/actions';

export interface UserGameDataItem {
  gameID: number;
  userID?: string;
  backlogged?: boolean;
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
  const [logo, setLogo] = useState(randomLogo());
  const user = useUser();
  const [gameData, setGameData] = useState<GamesArray | null>(null);
  const [userGameData, setUserGameData] = useState<UserGameData | null>(null);

  console.log(user);

  const outletContext: OutletContext = {
    user,
    gameData,
    setGameData,
    userGameData,
    setUserGameData,
  };

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo-wrapper'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <main>
        <Outlet context={outletContext} />
      </main>
    </div>
  );
}
