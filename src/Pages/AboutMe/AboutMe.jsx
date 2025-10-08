import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './AboutMe.css';
import photo1 from '../../assets/IMG_0833.jpg';
import photo2 from '../../assets/IMG_4921.jpg';
import photo3 from '../../assets/IMG_5558.jpg';

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

  const galleryImages = [
    { src: photo1, caption: 'Hiking in Linville Gorge, NC' },
    { src: photo2, caption: 'Hiking in Great Smokey Mountains National Park, TN' },
    { src: photo3, caption: 'Water skiing in Michigan' },
  ];

  return (
    <div className="about-page">
      {/* Static Image Gallery */}
      {/* <div
        className={`static-gallery slide-in-left ${animate ? 'show' : ''}`}
        style={{ transitionDelay: '0.2s' }}
      >
        {galleryImages.map((imgObj, index) => (
          <div key={index} className="static-gallery-item">
            <img src={imgObj.src} alt={`Gallery ${index}`} loading="lazy" />
            <div className="gallery-caption">{imgObj.caption}</div>
          </div>
        ))}
      </div> */}

      {/* About Me Box */}
      <div
        className={`about-box2 slide-in-left ${animate ? 'show' : ''}`}
        style={{ transitionDelay: '0.4s' }}
      >
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

      {/* Contact Box */}
      <div
        className={`contact-box slide-in-right ${animate ? 'show' : ''}`}
        style={{ transitionDelay: '0.6s' }}
      >
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
