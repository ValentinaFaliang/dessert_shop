import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Navigation.css';
import { Contact } from '../Contact/Contact';
import { CloseModalBtn } from '../Buttons';
import useOutsideClick from '../../utils/useOutsideClick';

type ModalState = {
  open: () => void;
  close: () => void;
};

export const Navigation = ({ onClose }: { onClose: () => void }) => {
  const links = ['/#About', '/#Products'];
  const contactModalRef = useRef<ModalState>(null);
  const innerRef = useRef(null);

  useOutsideClick(innerRef, onClose);

  const openModal = () => {
    contactModalRef.current?.open();
  };

  console.log(onClose);

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
                <li className="navigation__links-item" key={link}>
                  <a href={link}>{link.replace(/\W/g, '')}</a>
                </li>
              );
            })}
            <li className="navigation__links-item" onClick={openModal}>
              Contact
            </li>
            <li className="navigation__links-item" onClick={() => window.scrollTo(0, 0)}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className="navigation__links-item">
              <button className="button btn_dark">FAQ</button>
            </li>
          </ul>
          <Contact ref={contactModalRef} />
        </div>
      </nav>
    </>
  );
};
