import React, { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { render } from 'react-dom';
import client from '@/graphql/client';
import { MaterialToastContainer } from '@/components/core';

// APP
import App from '@/app';

// GLOBAL STYLES
import '@/assets/scss/app.scss';
import '@/styles/global.scss';

// APP ROOT
const root = document.getElementById('root') as HTMLElement;

render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
      <MaterialToastContainer />
    </ApolloProvider>
  </StrictMode>,
  root
);
