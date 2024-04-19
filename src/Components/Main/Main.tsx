import React from 'react';
import Carousel from '../Carousel';
import './Main.css';

export const Main = () => {
  return (
    <div className="main-block__container">
      <section className="main-block__carousel">
        <Carousel />
      </section>
    </div>
  );
};
