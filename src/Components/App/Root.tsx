import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/productSlice';

export const Root = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Provider>
  );
};
