import React, { useEffect, useState } from 'react';
import './AboutBox.css';
import mePic from '../../assets/me_no_background.png';

const AboutBox = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`about-box ${visible ? 'slide-in' : ''}`}>
      <div className="about-left">
        <img src={mePic} alt="Me" />
      </div>
      <div className="about-right">
        <h2>Hello!</h2>
        <p>
          I'm Donny, a Computer Engineering student at Purdue University. I enjoy building projects that
          combine computer vision, AI, and embedded systems. I love solving real-world problems with code and electronics!
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
