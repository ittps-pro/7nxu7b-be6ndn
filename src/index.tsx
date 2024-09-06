import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { useSWR } from 'swr';

const root = createRoot(document.getElementById('root') as HTMLElement);

let fields = [];

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
