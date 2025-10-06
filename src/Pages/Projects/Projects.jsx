import React, { useState, useEffect } from 'react';
import './Projects.css';
import project1Img1 from '../../assets/IMG_8391.jpg';
import project1Img2 from '../../assets/IMG_8391.jpg';
import project2Img1 from '../../assets/IMG_8391.jpg';
import project2Img2 from '../../assets/IMG_8391.jpg';

const Projects = () => {
  const galleryImages = [
    { src: project1Img1, caption: 'Project 1: Main view' },
    { src: project1Img2, caption: 'Project 1: Details' },
    { src: project2Img1, caption: 'Project 2: Main view' },
    { src: project2Img2, caption: 'Project 2: Demo' },
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


  const projects = [
    {
      title: 'Autonomous Drone Navigation',
      location: 'Purdue University',
      duration: 'Jan 2024 – May 2024',
      description: 'Developed a drone navigation system using computer vision and ROS...',
      images: [project1Img1, project1Img2],
      github: 'https://github.com/username/drone-nav',
      attachment: 'DronePaper.pdf',
    },
    {
      title: 'Inventory Management System',
      location: 'GE Aerospace',
      duration: 'May 2025 – Aug 2025',
      description: 'Created a Python tool to optimize inventory usage and reduce waste...',
      images: [project2Img1, project2Img2],
      github: 'https://github.com/username/inventory-tool',
      attachment: 'InventoryReport.pdf',
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-gallery">
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
        <button className="gallery-btn prev-btn" onClick={prevImage}>‹</button>
        <button className="gallery-btn next-btn" onClick={nextImage}>›</button>
      </div>


      <div className="projects-container">
        {projects.map((proj, i) => (
          <div key={i} className="project-box">
            <h2 className="project-title">{proj.title}</h2>
            <p className="project-location">📍 {proj.location}</p>
            <p className="project-duration">📅 {proj.duration}</p>
            <p className="project-desc">{proj.description}</p>
            <div className="project-images">
              {proj.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Project ${i} Image ${idx}`} />
              ))}
            </div>
            <div className="project-links">
              {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub Repo</a>}
              {proj.attachment && <a href={proj.attachment} target="_blank" rel="noreferrer">Attachment</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
