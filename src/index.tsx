import './style.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Search, { loader as searchLoader } from './routes/Search';
import mockSearchLoader from './mocks/searchLoader';
import mockGameInfoLoader from './mocks/gameInfoLoader';
import editUserGameData from './routes/editUserGameData';
import GameInfo, { loader as gameInfoLoader } from './routes/GameInfo';
import { action as signInAction } from './components/SignIn';
import { action as signUpAction } from './components/SignUp';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'search', element: <Search />, loader: mockSearchLoader },
      { path: 'edit/:gameID', action: editUserGameData },
      {
        path: 'games/:gameID',
        element: <GameInfo />,
        loader: mockGameInfoLoader,
      },
      { path: 'account/sign-in', action: signInAction },
      { path: 'account/sign-up', action: signUpAction },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
