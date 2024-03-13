import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App';
import './styles/style.scss';

// Initialise le conteneur racine de l'application.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le conteneur racine, enveloppée dans React.StrictMode pour une meilleure détection des problèmes.
root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
