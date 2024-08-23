import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Navigation.css';

export const Navigation = () => {
  const links = ['#About', '/#Products', '/#Contact'];

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, [window.location.pathname]);
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <Link to="/">
          <li className="navigation__links-item" onClick={() => window.scrollTo(0, 0)}>
            Home
          </li>
        </Link>
        {links.map((link) => {
          return (
            <li className="navigation__links-item" key={link}>
              <a href={link}>{link.replace(/\W/g, '')}</a>
            </li>
          );
        })}
        <li className="navigation__links-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="navigation__links-item">
          <button className="button btn_dark">FAQ</button>
        </li>
      </ul>
    </nav>
  );
};
