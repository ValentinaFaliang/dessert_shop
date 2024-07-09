import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__links-item">Home</li>
        <li className="navigation__links-item">About</li>
        <li className="navigation__links-item">Products</li>
        <li className="navigation__links-item">Contact</li>
        <li className="navigation__links-item">
          <button className="button btn_dark">FAQ</button>
        </li>
      </ul>
    </nav>
  );
};
