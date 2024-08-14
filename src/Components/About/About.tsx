import React from 'react';
import teaser1 from './../../assets/teaser/teaser1.png';
import teaser2 from './../../assets/teaser/teaser2.png';
import teaser3 from './../../assets/teaser/teaser3.png';
import teaser4 from './../../assets/teaser/teaser4.png';
import './About.css';
import AboutBlock from '../AboutBlock';

export const About = () => {
  return (
    <section id="About" className="about-container">
      <AboutBlock
        headerText="Indulge in the Sweetness of Zephyr Marshmallows"
        text1="Elevate Your Senses"
        text2="Discover our artisanal marshmallow creations, each handcrafted with meticulous attention to detail. From
      classic flavors to innovative twists"
        buttonText="Explore the Collection"
        picture={teaser1}
        needBtn
      />
      <AboutBlock
        smallText="Savor the Sweetness"
        headerText="Uncover the Secrets of Zephyrs Marshmallow Magic"
        text1="Immerse Yourself in the Delightful World of Zephyr Marshmallows"
        text2="Discover the Perfect Blend of Flavors and Textures"
        picture={teaser2}
      />
      <AboutBlock
        smallText="Savor the Sweetness"
        headerText="Uncover the Secrets of Zephyrs Marshmallow Magic"
        text1="Discover the Perfect Blend of Flavors and Textures"
        buttonText="Treat Yourself"
        picture={teaser3}
        needBtn
        reverse
      />
      <div className="about-extra">
        <h2>Elevate Your Marshmallow Experience</h2>
        <p>Discover the Artistry Behind Zephyrs Marshmallow Masterpieces</p>
      </div>

      <AboutBlock
        smallText="Savor the Moment"
        headerText="Crafted with Love, Enjoyed with Delight"
        text1="Indulge in the Irresistible Goodness of Zephyr's Marshmallow Creations"
        buttonText="Treat Yourself"
        picture={teaser4}
        needBtn
        reverse
      />
    </section>
  );
};
