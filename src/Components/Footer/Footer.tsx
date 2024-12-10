import React from 'react';
import logo from '../../assets/logo/logo2.png';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { openModal } from '../../store/modalSlice';

export const Footer = () => {
  const dispatch = useAppDispatch();

  return (
    <footer className="footer-container grid">
      <div className="footer-info">
        <p>© 2024 Olga Volga Zefir, Inc. </p>
        <p>All rights reserved.</p>
      </div>
      <div className="footer-logo">
        <figure>
          <img src={logo} />
        </figure>
      </div>
      <nav className="footer-nav">
        <ul>
          <li className="nav-title">Quick Links</li>
          <Link to="/">
            <li onClick={() => window.scrollTo(0, 0)}>Home</li>
          </Link>
          <Link to="/Menu">
            <li>Shop</li>
          </Link>
          <li>Blog</li>
          <li onClick={() => dispatch(openModal('contact'))}>Contact</li>
          <li className="nav-title">Explore Zephyr</li>
          <li>About us</li>
          <li>Marshmallow Flavors</li>
          <li>Recipes</li>
          <li>FAQs</li>
          <li className="nav-title">Connect with Us</li>
          <li>Instagram</li>
          <li>VK</li>
          <li>Telegram</li>
          <li>Flowwow</li>
        </ul>
      </nav>
    </footer>
  );
};
