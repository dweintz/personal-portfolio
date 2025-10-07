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
      title: 'Personal Portfolio Website',
      role: 'Peronal Project',
      location: 'Purdue University',
      duration: 'October 2025',
      description: 'Built a modern, responsive portfolio website from scratch using React and CSS. Implemented dynamic navigation with active link highlighting, full-screen background images, and smooth scrolling between sections. Developed interactive components including a projects gallery with animated transitions, an “About Me” section with a photo carousel, and contact boxes with icons. Focused on clean design, usability, and cross-device compatibility to create an engaging experience for visitors.',
      images: [project2Img1, project2Img2],
      github: 'https://github.com/username/inventory-tool',
      attachment: 'InventoryReport.pdf',
      skills: ['Python', 'Image Processing', 'CT Imagining', 'Testing', 'Inspection'],
    },
    {
      title: 'Pedestrian Detection for Crash Avoidance',
      role: 'Purdue Vertically Integreated Projects - Image Processing Team',
      location: 'Purdue University',
      duration: 'Aug 2024 – Dec 2024',
      description: 'Contributed to the development of a pedestrian detection algorithm as part of the Vertically Integrated Projects (VIP) Image Processing and Analysis (IPA) team. We utilized object detection and classification techniques such as Histograms of Oriented Gradients (HOG) and Support Vector Machines (SVM). To filter results, we employed post-processing techniques like hard-negative mining, non-maximum suppression, and thresholding. We paired the pedestrian detector with an algorithm to find the optimal path for an autonomous vehicle in near-collision scenarios. We presented our results at the Fall 2024 Purdue Undergraduate Research Expo.',
      images: [project2Img1, project2Img2],
      github: 'https://github.com/username/inventory-tool',
      attachment: 'InventoryReport.pdf',
      skills: ['Python', 'Image Processing', 'CT Imagining', 'Testing', 'Inspection'],
    },
    {
      title: 'Nutrition Change Estimation From Video',
      role: 'Purdue Vertically Integreated Projects - Image Processing Team',
      location: 'Purdue University',
      duration: 'Aug 2025 – Present',
      description: 'I am developing a system to predict calorie changes in recipes by analyzing videos from the HD-EPIC dataset. I implemented real-time hand-object interaction detection using MediaPipe, achieving approximately 75% accuracy. Additionally, I am building a YOLO-based convolutional neural network for automated food detection.',
      images: [project1Img1, project1Img2],
      github: 'https://github.com/username/drone-nav',
      attachment: 'DronePaper.pdf',
      skills: ['Python', 'Image Processing', 'CT Imagining', 'Testing', 'Inspection'],
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        {projects.map((proj, i) => (
          <div key={i}
          className={`project-box ${i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
          >
            <h2 className="project-title">{proj.title}</h2>
            <h3 className="work-role">{proj.role}</h3>
            <p className="project-location">📍 {proj.location}</p>
            <p className="project-duration">📅 {proj.duration}</p>
            <p className="project-desc"><br></br>{proj.description}</p>
            <div className="skills-container">
              {proj.skills.map((skill, l) => (
                <span key={l} className="skill-pill">{skill}</span>
              ))}
            </div>
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
