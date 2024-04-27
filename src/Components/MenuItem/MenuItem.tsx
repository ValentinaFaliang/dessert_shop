import React from 'react';
import zefir1 from './../../assets/menu-items/strawberry_flavour.jpg';
import './MenuItem.css';

export const MenuItem = () => {
  return (
    <section className="menu-item">
      <figure className="menu-item__container">
        <img className="menu-item__image" src={zefir1} alt="soda_can" />
        <figcaption className="menu-item__description">
          <div className="menu-item__title">
            <h3>Original</h3>
            <h4>zephyr</h4>
          </div>
          <p className="menu-item__about">Organic pitaya blended with sprouted chia, bananas, and fresh fruit.</p>
        </figcaption>
      </figure>
    </section>
  );
};
