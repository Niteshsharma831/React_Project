import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Day1 from './counterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day1 />
  </StrictMode>,
)
