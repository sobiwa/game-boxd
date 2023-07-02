import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import randomLogo from './assets/logo';
import useUser from './hooks/useUser';

export default function App() {
  const [logo, setLogo] = useState(randomLogo());
  const user = useUser();
  console.log(user);

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo-wrapper'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <main>
        <Outlet context={{user}}/>
      </main>
    </div>
  );
}
