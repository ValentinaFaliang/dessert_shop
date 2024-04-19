import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import Menu from '../Menu';
import AuthorInfo from '../AuthorInfo';
import Main from '../Main';

export const App = () => {
  const router = createHashRouter([
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
          path: '/author',
          element: <AuthorInfo />
        }
      ],
      errorElement: null
    }
  ]);
  return <RouterProvider router={router} />;
};
