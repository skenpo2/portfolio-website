import React from 'react';
import Online from './Online';
import BigButton from './BigButton';

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <Online />
          <p className="big-text">
            Transform your innovative visions into functional software solutions
            with expert development and cutting-edge technology
          </p>
          <div className="big-btn-container">
            <BigButton className={'first big-btn'} name="Download CV" />
            <BigButton className={'second big-btn'} name="Contact me" />
          </div>
        </div>
        <div className="hero-right"></div>
      </div>
    </section>
  );
};

export default Hero;
