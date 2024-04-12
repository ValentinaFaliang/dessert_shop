import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

export const Root = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};
