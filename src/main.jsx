import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StepContext from './StepContext'

createRoot(document.getElementById('root')).render(
    <StepContext>
  <StrictMode>
    <App />
  </StrictMode>
    </StepContext>
)
