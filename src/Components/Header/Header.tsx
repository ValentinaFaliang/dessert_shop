import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo2.png';
import Navigation from '../Navigation';
import CartIcon from './../../assets/icons/shopping-bag.png';
import './Header.css';
// import Cart from '../Cart';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { openModal } from '../../store/modalSlice';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <header className="header__container grid">
        {!isMobile ? (
          <>
            <div className="header__container-logo">
              <picture>
                <Link to="/">
                  <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
                </Link>
              </picture>
            </div>
            <Navigation onClose={() => setIsBurgerOpen(false)} />
            <div className="cart-icon">
              <img onClick={() => dispatch(openModal())} src={CartIcon} alt="Cart logo" />
            </div>
          </>
        ) : (
          <div className="burger-header__container">
            <div className="header__container-logo burger-logo">
              <picture>
                <Link to="/">
                  <img className="header__container-logo-img" src={logo} onClick={() => window.scrollTo(0, 0)} />
                </Link>
              </picture>
            </div>
            <div className="cart-icon">
              <img onClick={() => dispatch(openModal())} src={CartIcon} alt="Cart logo" />
            </div>
            <button onClick={toggleBurgerMenu} className="burger-button">
              ☰
            </button>
            {isBurgerOpen && <Navigation onClose={() => setIsBurgerOpen(false)} />}
          </div>
        )}
      </header>
      {/* <Cart /> */}
    </>
  );
};
