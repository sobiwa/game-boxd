import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import randomLogo from './assets/logo';

export default function App() {
  const [logo, setLogo] = useState(randomLogo());

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo-wrapper'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
