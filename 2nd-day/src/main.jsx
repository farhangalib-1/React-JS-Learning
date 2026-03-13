import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserLoggedIn from './UserLoggedIn.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserLoggedIn loggedIn={true}  />
  </StrictMode>,
)
