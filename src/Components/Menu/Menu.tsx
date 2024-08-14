import React from 'react';
import MenuItem from '../MenuItem';
import './Menu.css';

export const Menu = () => {
  return (
    <section className="menu-container">
      <p className="menu-paragraph">Make all your sweet wishes become true 😋</p>
      <div className="menu-items-container">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="menu-smth"></div>
    </section>
  );
};
