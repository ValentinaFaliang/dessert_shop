import React, { useRef, useState } from 'react';
import logo from '../../assets/logo/logo2.png';
import Navigation from '../Navigation';
import basketIcon from './../../assets/icons/shopping-bag.png';
import './Header.css';
import useOutsideClick from '../../utils/useOutsideClick';
import Basket from '../Basket';

export const Header = () => {
  const [openBasketModal, setOpenbBasketModal] = useState(false);
  console.log(openBasketModal);
  const basketRef = useRef<HTMLDivElement>(null);
  useOutsideClick(basketRef, () => setOpenbBasketModal(false));
  return (
    <>
      <header className="header__container grid">
        <div className="header__container-logo">
          <picture>
            <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
          </picture>
        </div>
        <Navigation />
        <div className="basket-icon">
          <img
            onClick={() => setOpenbBasketModal((openBasketModal) => !openBasketModal)}
            src={basketIcon}
            alt="basket logo"
          />
        </div>
      </header>
      {openBasketModal && <Basket ref={basketRef} />}
    </>
  );
};
