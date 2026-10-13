import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Boxclr.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
