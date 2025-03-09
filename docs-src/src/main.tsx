import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LightDialogProvider } from 'react-light-dialog';
import 'react-light-dialog/style.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LightDialogProvider>
      <App />
    </LightDialogProvider>
  </StrictMode>,
)
