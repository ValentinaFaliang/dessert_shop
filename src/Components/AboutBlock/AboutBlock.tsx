import React from 'react';
import './AboutBlock.css';
import { Link } from 'react-router-dom';

type AboutBlockProps = {
  smallText?: string;
  headerText: string;
  text1: string;
  text2?: string;
  buttonText?: string;
  picture: string;
  needBtn?: boolean;
  reverse?: boolean;
};

export const AboutBlock = ({
  smallText,
  headerText,
  text1,
  text2,
  buttonText,
  picture,
  needBtn,
  reverse
}: AboutBlockProps) => {
  return (
    <div id="About" className={reverse ? 'about-teaser-block teaser3' : 'about-teaser-block'}>
      <div className="text-block">
        {needBtn ? <p className="super-extra-small-text">{smallText}</p> : ''}
        <h2>{headerText}</h2>
        <p className="extra-small-text">{text1}</p>
        <p className="small-text">{text2}</p>
        {needBtn ? <button className="button btn_dark"> <Link to="/menu">{buttonText}</Link></button> : ''}
      </div>
      <div className="photo-block">
        <img src={picture} alt="teaser" />
      </div>
    </div>
  );
};
