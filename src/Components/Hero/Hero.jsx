import React, { useEffect, useState } from 'react';
import './Hero.css';
import AboutBox from '../AboutBox/AboutBox';

const Hero = () => {
  return (
    <div className='hero'>
      <AboutBox />
    </div>
  );
};

export default Hero;
