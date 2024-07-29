import React from 'react';
import logo from '../../assets/logo/logo2.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container grid">
      <div className="footer-logo">
        <figure>
          <img src={logo} />
          <figcaption>
            <p>© 2024 Olga Volga Zefir, Inc. </p>
            <p>All rights reserved.</p>
          </figcaption>
        </figure>
      </div>
      <nav className="footer-nav">
        <ul>
          <li className="nav-title">Quick Links</li>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
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
