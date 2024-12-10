import React from 'react';
import cloud from '../../assets/bg/cloud.png';
import './ProductIntro.css';
import { Link } from 'react-router-dom';

const imgArr = new Array(10).fill(cloud);

export const ProductIntro = () => {
  return (
    <section id="Products" className="productIntro_container">
      <div className="bg_clouds-container">
        {imgArr.map((cloud, index) => {
          if (index % 2 == 0) {
            console.log(imgArr.length - index);
            return (
              <img
                key={index}
                src={cloud}
                style={{
                  paddingBottom: `${(Math.random() * (20 - 10) + 10) * 10}px`,
                  paddingLeft: `${(Math.random() * (20 - 10) + 10) * 10}px`
                }}
                className="bg_clouds"
              />
            );
          } else {
            return (
              <img
                key={index}
                src={cloud}
                style={{
                  paddingTop: `${(Math.random() * (20 - 10) + 10) * 10}px`,
                  paddingLeft: `${(Math.random() * (20 - 10) + 10) * 10}px`
                }}
                className="bg_clouds"
              />
            );
          }
        })}
      </div>
      <div className="roseCard-container">
        <img src={cloud} className="roseCard-cloud left-cloud" />
        <img src={cloud} className="roseCard-cloud right-cloud" />
        <div className="roseCard-buttons">
          <Link to="/menu">
            <button className="button btn_white">Explore More</button>
          </Link>
          <Link to="/menu">
            <button className="button btn_white">Discover More</button>
          </Link>
        </div>
        <div className="roseCard-titles">
          <h1>Zefir</h1>
          <h5>Olga Volga</h5>
        </div>
        <div className="roseCard-bottom__btn">
          <Link to="/menu">
            <button className="button btn_white">Unlock the magic of our desserts right now!</button>
          </Link>
        </div>
      </div>
      <div className="learnMore-container">
        <div className="learnMore-titles">
          <h1>Zephyr Marshmallow: Where Sweetness Meets Artistry</h1>
          <Link to="/menu">
            <button className="button">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
