import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import Main from '../Main';
import Menu from '../Menu';
import { ItemPage } from '../ItemPage/ItemPage';
import About from '../About';
import ProductIntro from '../ProductIntro';

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
        { path: 'about', element: <About /> },
        { path: 'products', element: <ProductIntro /> },
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
