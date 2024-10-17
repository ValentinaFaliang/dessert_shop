import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';
import { AddToCartBtn } from '../Buttons';

export const MenuItem = ({ id, title, img, price }: any) => {
  return (
    <section className="menu-item">
      <Link to="/item_page" state={{ id, title, img, price }}>
        <figure className="menu-item__container">
          <img className="menu-item__image" src={img} alt={title} loading="lazy" />
          <figcaption className="menu-item__description">
            <div className="menu-item__title">
              <h3>{title}</h3>
              <h4>{price}$ per 1 piece</h4>
            </div>
          </figcaption>
        </figure>
      </Link>
      <AddToCartBtn itemId={id} />
    </section>
  );
};
