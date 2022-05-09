import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      {/* <Cardapio /> */}
      <Inicio />
    </>
  </React.StrictMode>
);
