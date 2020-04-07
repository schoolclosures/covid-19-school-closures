import React from 'react';
import ButtonLink from '../button-link/ButtonLink.component';
import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero-section column section">
      <p className="hero-text">Information and free tutoring for families and teachers during COVID-19 school closures.</p>
      <div className="hero-cta-holder row">
        <ButtonLink buttonAction={"For Parents"} outlineColor={"white"} path="/for-parents" />
        <ButtonLink buttonAction={"For Teachers"} outlineColor={"white"} path="/for-teachers" />
      </div>
    </div>
  )
};

export default Hero;
