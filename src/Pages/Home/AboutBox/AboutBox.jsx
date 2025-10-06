import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AboutBox.css';
import mePic from '../../../assets/me_no_background.png';

const AboutBox = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation(); // React Router hook

  useEffect(() => {
    // Reset and re-trigger animation whenever route changes
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 50); // small delay
    return () => clearTimeout(timeout);
  }, [location.pathname]);

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
        <p><br></br>
          I built this website using React as a fun way to practice my front-end development skills. 
          Check out my Work Experience, Projects, and About Me pages to learn more about my experience and interests.
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
