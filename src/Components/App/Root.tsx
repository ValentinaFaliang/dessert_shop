import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Cart from '../Cart';

export const Root = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Outlet />
          <Cart />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Provider>
  );
};
