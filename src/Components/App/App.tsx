import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import Main from '../Main';
import Menu from '../Menu';
import { ItemPage } from '../ItemPage/ItemPage';

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
        },
        {
          path: '/item_page',
          element: <ItemPage />
        }
      ],
      errorElement: null
    }
  ]);
  return <RouterProvider router={router} />;
};
