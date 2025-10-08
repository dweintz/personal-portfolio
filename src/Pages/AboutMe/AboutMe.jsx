import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (location.pathname === '/about') {
      setAnimate(false);
      const timeout = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div className="about-page">
      <div className={`about-box2 slide-box`}>
        <h2>About Me</h2>
        <p>
          Hi! I’m Donny, a computer engineering student at Purdue University, where I focus on
          learning and building innovative technology projects. Outside of class, I love staying
          active and spending time in nature — running along scenic trails, hiking through forests,
          and going on backpacking adventures whenever I can. I’m also passionate about exploring
          new hobbies, whether that’s experimenting with electronics, working on personal coding
          projects, or trying out new outdoor challenges. Browse the gallery above to get a
          glimpse of some of the exciting activities and experiences that make my life both
          fun and fulfilling!
        </p>
      </div>

      <div
        className={`contact-box slide-box ${'slide-right'}`}>
        <div className="contact-item">
          <FaPhone size={24} />
          <span>(513) 815-2765</span>
        </div>
        <div className="contact-item">
          <FaEnvelope size={24} />
          <span>donnyweintz@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaLinkedin size={24} />
          <a href="https://linkedin.com/in/donnyweintz" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/donnyweintz
          </a>
        </div>
        <div className="contact-item">
          <FaGithub size={24} />
          <a href="https://github.com/dweintz" target="_blank" rel="noopener noreferrer">
            github.com/dweintz
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
