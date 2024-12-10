import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Navigation.css';
// import { Contact } from '../Contact/Contact';
import { CloseModalBtn } from '../Buttons';
import useOutsideClick from '../../utils/useOutsideClick';
import { useAppDispatch } from '../../store/hooks';
import { openModal } from '../../store/modalSlice';

export const Navigation = ({ onClose }: { onClose: () => void }) => {
  const links = ['about', 'products'];
  const dispatch = useAppDispatch();
  const innerRef = useRef(null);

  useOutsideClick(innerRef, () => onClose());

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <nav className="navigation">
        <div ref={innerRef} className="navigation-for-mobile">
          <div className="navigation__close-btn">
            <CloseModalBtn onClick={onClose} />
          </div>
          <ul className="navigation__links">
            <Link to="/">
              <li className="navigation__links-item" onClick={() => window.scrollTo(0, 0)}>
                Home
              </li>
            </Link>
            {links.map((link) => {
              return (
                <Link to={link} key={link}>
                  <li className="navigation__links-item" key={link}>
                    {link}
                  </li>
                </Link>
              );
            })}
            <li className="navigation__links-item" onClick={() => dispatch(openModal('contact'))}>
              Contact
            </li>
            <li className="navigation__links-item" onClick={() => window.scrollTo(0, 0)}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className="navigation__links-item">
              <button className="button btn_dark">FAQ</button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Contact /> */}
    </>
  );
};
