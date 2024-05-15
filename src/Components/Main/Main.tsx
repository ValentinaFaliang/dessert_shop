import React from 'react';
import './Main.css';
import Intro from '../Intro';
import Carousel from '../Carousel';
// import Menu from '../Menu';
// import AuthorInfo from '../AuthorInfo';

export const Main = () => {
  return (
    <div className="main-block__container">
      <Intro />
      <Carousel />
      {/* <section className="main-block__carousel">
        <button className="button carousel-button">View marshmallows</button>
        
      </section>
      <Menu />
      <AuthorInfo /> */}
    </div>
  );
};
