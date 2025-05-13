// This file will remain unchanged since we're using plain HTML/CSS/JS
// and not React for this project. The original React setup is maintained
// to preserve the project structure.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);