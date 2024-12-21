import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Day1 from './day1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day1 />
  </StrictMode>,
)
