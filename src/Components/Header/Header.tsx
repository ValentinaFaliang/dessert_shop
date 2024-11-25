import React, { useRef } from 'react';
import logo from '../../assets/logo/logo2.png';
import Navigation from '../Navigation';
import CartIcon from './../../assets/icons/shopping-bag.png';
import './Header.css';
import Cart from '../Cart';
import { Link } from 'react-router-dom';

type ModalState = {
  open: () => void;
  close: () => void;
};

export const Header = () => {
  const cartRef = useRef<ModalState>(null);
  const openModal = () => {
    cartRef.current?.open();
  };
  return (
    <>
      <header className="header__container grid">
        <div className="header__container-logo">
          <picture>
            <Link to="/">
              <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
            </Link>
          </picture>
        </div>
        <Navigation />
        <div className="Cart-icon">
          <img onClick={openModal} src={CartIcon} alt="Cart logo" />
        </div>
      </header>
      <Cart ref={cartRef} />
    </>
  );
};
