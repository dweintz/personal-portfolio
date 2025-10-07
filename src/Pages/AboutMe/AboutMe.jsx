import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './AboutMe.css';
import photo1 from '../../assets/IMG_0833.jpg';
import photo2 from '../../assets/IMG_4921.jpg';
import photo3 from '../../assets/IMG_5558.jpg';

const AboutMe = () => {
  const galleryImages = [
      { src: photo1, caption: 'Hiking in Linville Gorge, NC' },
      { src: photo2, caption: 'Hiking in Great Smokey Mountains Nation Park, TN' },
      { src: photo3, caption: 'Water skiing in Michigan' },
    ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentIndex(prev => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    
    <div className="about-page">
      {/* Photo Gallery */}
      <div className="image-gallery">
        {galleryImages.map((imgObj, index) => {
          let className = 'gallery-item';
          if (index === currentIndex) className += ' active';
          else if (index === (currentIndex - 1 + galleryImages.length) % galleryImages.length) className += ' prev';
          else if (index === (currentIndex + 1) % galleryImages.length) className += ' next';

          return (
            <div key={index} className={className}>
              <img src={imgObj.src} alt={`Gallery ${index}`} />
              <div className="gallery-caption">{imgObj.caption}</div>
            </div>
          );
        })}
      </div>

      {/* About Me Box */}
      <div className="about-box2">
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
      <div className="contact-box">
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
          <span>linkedin.com/in/donnyweintz/</span>
        </div>
        <div className="contact-item">
          <FaGithub size={24} />
          <span>github.com/dweintz</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
