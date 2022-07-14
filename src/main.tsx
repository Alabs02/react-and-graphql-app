import React, { StrictMode } from 'react'
import { render } from 'react-dom'

// APP
import App from '@/app';

// GLOBAL STYLES
import '@/assets/scss/app.scss';
import '@/styles/global.scss';

// APP ROOT
const root = document.getElementById('root') as HTMLElement;

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
