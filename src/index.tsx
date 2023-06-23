import './style.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Search, { action as searchAction } from './routes/Search'
import { searchAction as mockSearchAction } from './mocks/actions'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'search', element: <Search />, action: mockSearchAction }]
  }
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
