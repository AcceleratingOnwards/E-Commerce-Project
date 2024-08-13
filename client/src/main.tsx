import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App.tsx'
import './app/layout/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
