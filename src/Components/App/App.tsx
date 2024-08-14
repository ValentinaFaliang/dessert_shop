import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import Main from '../Main';
import Menu from '../Menu';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: '/menu',
          element: <Menu />
        }
      ],
      errorElement: null
    }
  ]);
  return <RouterProvider router={router} />;
};
