import React from 'react';
import './Main.css';
import Intro from '../Intro';
import Carousel from '../Carousel';
import About from '../About';
// import Menu from '../Menu';
// import AuthorInfo from '../AuthorInfo';

export const Main = () => {
  return (
    <div className="main-block__container">
      <Intro />
      <Carousel />
      <About />
      {/* <section className="main-block__carousel">
        <button className="button carousel-button">View marshmallows</button>
        
      </section>
      <Menu />
      <AuthorInfo /> */}
    </div>
  );
};
