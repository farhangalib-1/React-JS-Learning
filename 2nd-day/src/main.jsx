import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './User.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User name="Galib" age="26" country="Bangladesh" />
    <User name="Neymar" age="35" country="Brazil" />
    <User name="Farhan" age = "21" country="Bangladesh" />
    <User name="Ishraq"  age="20" country="Pakistan"/>
  </StrictMode>,
)
