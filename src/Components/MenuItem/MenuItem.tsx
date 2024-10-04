import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

export const MenuItem = ({ id, title, img }: any) => {
  return (
    <section className="menu-item">
      <Link to="/item_page" state={{ id, title, img }}>
        <figure className="menu-item__container">
          <img className="menu-item__image" src={img} alt={title} loading="lazy" />
          <figcaption className="menu-item__description">
            <div className="menu-item__title">
              <h3>{title}</h3>
              <h4>3$ per 1 piece</h4>
            </div>
          </figcaption>
        </figure>
      </Link>
      <button className="button">Add to card</button>
    </section>
  );
};
