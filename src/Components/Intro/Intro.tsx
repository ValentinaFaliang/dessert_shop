import React from 'react';
import { Link } from 'react-router-dom';
import zefir1 from '../../assets/zephyr-images/zefir1.png';
import zefir2 from '../../assets/zephyr-images/zefir2.png';
import zefir3 from '../../assets/zephyr-images/zefir3.png';
import zefir4 from '../../assets/zephyr-images/zefir4.png';
import zefir5 from '../../assets/zephyr-images/zefir5.png';
import zefir6 from '../../assets/zephyr-images/zefir6.png';
import './Intro.css';

export const Intro = () => {
  return (
    <section className="grid intro_container">
      <div className="intro-text_container">
        <h1>Discover the Sweetness of Zephyr</h1>
        <p>
          Immerse yourself in the world of Zephyr Marshmallow, where the perfect blend of soft, fluffy marshmallows and
          vibrant colors come together to create an unforgettable experience
        </p>
        <button className="button">
          <Link to="/menu">Shop now</Link>
        </button>
      </div>

      <div className="intro-pictures_container intro-pictures_container-left">
        <img className="intro-img-1" src={zefir1} />
        <img className="intro-img-2" style={{ width: '170px' }} src={zefir2} />
        <img className="intro-img-3" src={zefir3} />
      </div>

      <div className="intro-pictures_container intro-pictures_container-right">
        <img className="intro-img-4" style={{ width: '180px' }} src={zefir4} />
        <img className="intro-img-5" style={{ width: '150px' }} src={zefir5} />
        <img className="intro-img-6" src={zefir6} />
      </div>
    </section>
  );
};
