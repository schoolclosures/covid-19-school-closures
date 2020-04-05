import React from 'react';
import Button from '../button/Button.component';
import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero-section column">
      <p className="hero-text">Information and free tutoring for families and teachers during COVID-19 school closures.</p>
      <div className="hero-cta-holder row">
        <Button buttonAction={"For Parents"} outlineColor={"white"}/>
        <Button buttonAction={"For Teachers"} outlineColor={"white"}/>
      </div>
    </div>
  )
};

export default Hero;
