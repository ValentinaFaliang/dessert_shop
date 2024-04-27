import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="container">
          <Header />
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};
