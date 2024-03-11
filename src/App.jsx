import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import HeaderFooterLayout from './Layout/HeaderFooterLayout';
import Home, { loader as homeLoader } from './pages/Home';
import ErrorPage from './pages/Error-page';
import House, { loader as houseLoader } from './pages/Housing';
import About from './pages/About';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <HeaderFooterLayout>
        <Outlet />
      </HeaderFooterLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Utilisez `index: true` pour la route racine
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'house/:title',
        element: <House />,
        loader: houseLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default AppRouter;
