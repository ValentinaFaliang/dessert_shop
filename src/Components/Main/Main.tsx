import React from 'react';
import './Main.css';
import Intro from '../Intro';
import Carousel from '../Carousel';
import About from '../About';
import ProductIntro from '../ProductIntro';

export const Main = () => {
  return (
    <div className="main-block__container">
      <Intro />
      <Carousel />
      <About />
      <ProductIntro />
    </div>
  );
};
