import React, { useEffect, useRef, useState } from 'react';
import './AuthorInfo.css';
import chef from './../../assets/chef/chef.png';

export const AuthorInfo = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollY);
  console.log(ref.current);

  return (
    <section className="authorInfo">
      <h2 className="main-title">About us</h2>
      <figure className="authorInfo__desc">
        <img className="authorInfo__desc--chef" src={chef} alt="chef" />
        <figcaption className="authorInfo__desc--description">
          <h4 ref={ref}>Hi! My name is Olga!</h4>
          <p>
            Zefír is a type of soft confectionery made by whipping fruit and berry purée (mostly apple puree) with sugar
            and egg whites with subsequent addition of a gelling agent like pectin, carrageenan, agar, or gelatine.
          </p>
        </figcaption>
      </figure>
    </section>
  );
};
