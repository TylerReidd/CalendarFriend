import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NavBar from './components/Navbar'
import Login from './pages/Login.jsx'
import { Calendar } from './components/Calendar.jsx'
import CreateEvent from './pages/CreateEvent.jsx'

createRoot(document.getElementById('root')).render
(
  <StrictMode>
     <App/>
  </StrictMode>,
)
