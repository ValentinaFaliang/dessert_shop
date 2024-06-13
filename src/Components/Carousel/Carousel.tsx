import React from 'react';
import zefirLogo from '../../assets/zephyr-images/zefir5.png';
import './Carousel.css';

export const Carousel = () => {
  const numberOfItems = 10;
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...Array(numberOfItems)].map((e, i) => (
          <img className="carousel-item" key={i} src={zefirLogo} />
        ))}
      </div>
      <div className="carousel-track">
        {[...Array(numberOfItems)].map((e, i) => (
          <img className="carousel-item" key={i} src={zefirLogo} />
        ))}
      </div>
    </div>
  );
};
