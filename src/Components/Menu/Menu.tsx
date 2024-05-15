import React from 'react';
import MenuItem from '../MenuItem';
import './Menu.css';

export const Menu = () => {
  return (
    <section className="menu-container">
      <h2 className="main-title menu-title">Menu</h2>
      <p className="menu-paragraph">Make all your sweet wishes become true 😋</p>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </section>
  );
};
