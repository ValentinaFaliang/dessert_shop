import React from 'react';
import logo from '../../assets/logo/logo2.png';
import Navigation from '../Navigation';
import './Header.css';

export const Header = () => {
  return (
    <header className="header__container grid">
      <div className="header__container-logo">
        <picture>
          <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
        </picture>
      </div>
      <Navigation />
    </header>
  );
};
