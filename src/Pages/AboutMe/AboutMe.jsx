import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import mePic1 from '../../assets/IMG_9186.jpeg';
import mePic2 from '../../assets/IMG_9186.jpeg';
import mePic3 from '../../assets/IMG_9186.jpeg';

const images = [mePic1, mePic2, mePic3]; // Add all the images you want

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      <div className="carousel-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm Donny, a Computer Engineering student at Purdue University. I enjoy working on projects
          that combine AI, computer vision, and embedded systems. I love creating solutions to real-world
          problems with code and electronics!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

