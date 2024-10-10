import React, { useRef, useState } from 'react';
import logo from '../../assets/logo/logo2.png';
import Navigation from '../Navigation';
import CartIcon from './../../assets/icons/shopping-bag.png';
import './Header.css';
import useOutsideClick from '../../utils/useOutsideClick';
import Cart from '../Cart';

export const Header = () => {
  const [openCartModal, setOpenbCartModal] = useState(false);
  const CartRef = useRef<HTMLDivElement>(null);
  useOutsideClick(CartRef, () => setOpenbCartModal(false));
  return (
    <>
      <header className="header__container grid">
        <div className="header__container-logo">
          <picture>
            <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
          </picture>
        </div>
        <Navigation />
        <div className="Cart-icon">
          <img onClick={() => setOpenbCartModal((openCartModal) => !openCartModal)} src={CartIcon} alt="Cart logo" />
        </div>
      </header>
      {openCartModal && <Cart ref={CartRef} />}
    </>
  );
};
