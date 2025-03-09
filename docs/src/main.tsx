import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SimpleDialogProvider } from 'react-simple-dialog'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleDialogProvider>
      <App />
    </SimpleDialogProvider>
  </StrictMode>,
)
