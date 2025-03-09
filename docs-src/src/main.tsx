import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LightDialogProvider } from './../../dist/index';
import './../../dist/style.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LightDialogProvider>
      <App />
    </LightDialogProvider>
  </StrictMode>,
)
