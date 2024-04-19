import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__links-item">Home</li>
        <li className="navigation__links-item">Menu</li>
        <li className="navigation__links-item">About us</li>
      </ul>
    </nav>
  );
};
