import React from 'react';
import Carousel from '../Carousel';
import './Main.css';
import Menu from '../Menu';

export const Main = () => {
  return (
    <div className="main-block__container">
      <section className="main-block__carousel">
        <button className="button carousel-button">View marshmallows</button>
        <Carousel />
      </section>
      <Menu />
    </div>
  );
};
