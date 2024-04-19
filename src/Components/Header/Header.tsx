import React from 'react';
import logo from '../../assets/logo/logo.png';
import Navigation from '../Navigation';
import './Header.css';

export const Header = () => {
  return (
    <div className="header__container grid">
      <div className="header__container-logo">
        <picture>
          <img className="header__container-logo-img" src={logo} />
        </picture>
      </div>
      <Navigation />
    </div>
  );
};
