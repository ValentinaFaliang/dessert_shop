import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

export const MenuItem = () => {
  return (
    <section className="menu-item">
      <Link to="/item_page">
        <figure className="menu-item__container">
          <div className="menu-item__image"></div>
          <figcaption className="menu-item__description">
            <div className="menu-item__title">
              <h3>Original</h3>
              <h4>3$ per 1 piece</h4>
            </div>
          </figcaption>
        </figure>
      </Link>
      <button className="button">Add to card</button>
    </section>
  );
};
