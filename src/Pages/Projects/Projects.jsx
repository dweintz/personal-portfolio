import React, { useState } from 'react';
import './Projects.css';
import project1Img1 from '../../assets/YOLO.png';
import project1Img2 from '../../assets/IMG_8391.jpg';
import project2Img1 from '../../assets/IMG_8391.jpg';
import project2Img2 from '../../assets/IMG_8391.jpg';
import certificate from '../../assets/OUR_Certificates.pdf';
import final_presentation from '../../assets/Pedestrian_Detection_Accident_Avoidance_F24_Final_Presentation.pdf';
import final_report from '../../assets/Pedestrian_Detection_Accident_Avoidance_F24_Final_Report-compressed.pdf';
import poster from '../../assets/Research_Poster.pdf';
import pedestrian1 from '../../assets/pedestrian1.png';
import pedestrian2 from '../../assets/pedestrian2.png';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const projects = [
    {
      title: 'Personal Portfolio Website',
      role: 'Personal Project',
      location: 'Purdue University',
      duration: 'October 2025',
      description: [
        `Developed and deployed the modern, responsive portfolio website you’re viewing now, 
        built entirely from scratch using React, HTML, and CSS. Designed and implemented a 
        dynamic single-page layout featuring smooth scrolling transitions, active navigation highlighting, 
        and full-screen background visuals to create an engaging and immersive browsing experience.`,

        `Focused heavily on clean, minimalist design principles, usability, and accessibility 
        to ensure seamless performance across desktop, tablet, and mobile devices. 
        Integrated modular React components for efficient maintainability and scalability, 
        while optimizing load times and responsiveness for a polished, professional 
        presentation that highlights my technical and creative abilities.`
      ],
      images: [],
      github: 'https://github.com/dweintz/personal-portfolio',
      skills: [
        'React', 'CSS', 'HTML', 'GitHub Pages', 'Front-end Development',
        'UI/UX Principles', 'Animations', 'npm / Node.js', 'Responsive Web Design'
      ],
    },
    {
      title: 'Nutrition Change Estimation From Video',
      role: 'Purdue Vertically Integrated Projects - Image Processing Team',
      location: 'Purdue University',
      duration: 'Aug 2025 – Present',
      description: [
        `This is an ongoing team project that aims to build a computer vision system 
        that estimates nutritional changes during the cooking process by analyzing 
        video data. The system combines YOLO-based ingredient detection, MediaPipe 
        hand-object interaction tracking, and nutritional database mapping to 
        automatically identify ingredients, track how they’re manipulated, and 
        calculate calorie changes over time.`,

        `Currently, I am training the YOLO ingredient detection model 
        using data extracted from the HD-EPIC dataset and developing the 
        hand-ingredient interaction module. The next phase will focus on 
        integrating these components into a unified pipeline that links
        detected food items to calorie data from the Food and Nutrient
        Database for Dietary Studies (FNDDS).`,

        `Once the core system is complete, we plan to extend the project to reconstruct recipes, 
        identify cooking methods, and develop a front-end interface for real-time nutritional 
        tracking and visualization.`
      ],
      images: [project1Img1],
      attachments: [
        { name: 'Dataset', url: 'https://hd-epic.github.io/'},
      ],
      skills: [
        'Python', 'Image Processing', 'Computer Vision',
        'Convolutional Neural Networks', 'YOLO', 'MediaPipe'
      ],
    },
    {
      title: 'Pedestrian Detection for Crash Avoidance',
      role: 'Purdue Vertically Integrated Projects - Image Processing Team',
      location: 'Purdue University',
      duration: 'Aug 2024 – Dec 2024',
      description: [
        `Contributed to the development of a pedestrian detection algorithm as part of the 
        Vertically Integrated Projects (VIP) Image Processing and Analysis (IPA) team. 
        We utilized object detection and classification techniques such as Histograms of 
        Oriented Gradients (HOG) and Support Vector Machines (SVM). To filter results, we 
        employed post-processing techniques like hard-negative mining, non-maximum suppression, 
        and thresholding.`,

        `We paired the pedestrian detector with an algorithm to find the optimal path
         for an autonomous vehicle in near-collision scenarios and presented our results 
         at the Fall 2024 Purdue Undergraduate Research Expo.`
      ],
      images: [pedestrian2, pedestrian1],
      attachments: [
        { name: 'Project Poster', url: poster },
        { name: 'Project Paper', url: final_report },
        { name: 'Project Final Presentation', url: final_presentation },
        { name: 'Research Conference Certificate', url: certificate },
      ],
      skills: ['Python', 'Image Processing', 'Histogram of Oriented Gradients', 'Support Vector Machines'],
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`project-box slide-box ${i % 2 === 0 ? '' : 'slide-right'}`}
          >
            <h2 className="project-title">{proj.title}</h2>
            <h3 className="work-role">{proj.role}</h3>
            <p className="project-location">📍 {proj.location}</p>
            <p className="project-duration">📅 {proj.duration}</p>

            <div className="project-desc">
              {proj.description.map((paragraph, idx) => (
                <>
                  <br></br>
                  <p key={idx}>{paragraph}</p>
                </>
              ))}
            </div>

            <div className="skills-container">
              {proj.skills.map((skill, l) => (
                <span key={l} className="skill-pill">{skill}</span>
              ))}
            </div>

            <div className="project-images">
              {proj.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project ${i} Image ${idx}`}
                  className="clickable-image"
                  onClick={() => {
                    setSelectedImage(img);
                    setIsLightboxOpen(true);
                  }}
                />
              ))}
            </div>

            <div className="project-links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer">GitHub Repo</a>
              )}

              {proj.attachments && proj.attachments.map((att, idx) => (
                <a
                  key={idx}
                  href={att.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {att.name}
                </a>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged project" />
            <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
