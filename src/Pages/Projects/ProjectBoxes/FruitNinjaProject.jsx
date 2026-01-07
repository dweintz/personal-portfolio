import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { parseMarkdown } from "../../../utils/markdownParser";
import md from "dedent";
import "../Projects.css";

import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import ECE49595CV_Term_Project_Presentation from "../../../assets/fruit_ninja/ECE49595CV_Term_Project_Presentation.pdf";
import gameplay from "../../../assets/fruit_ninja/gameplay.gif";

const FruitNinjaProject = () => {
  const skills = [
    "Computer Vision",
    "Python",
    "Multilayer Perceptron",
    "PyTorch",
    "Gesture Recognition",
    "PyGame",
    "MediaPipe",
    "Game logic",
    "Dataset Creation",
    "Event Handling",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/dweintz/49595CV-term-project",
    },
    {
      name: "Presentation",
      url: ECE49595CV_Term_Project_Presentation,
    },
  ];

  const images = [
    {
      src: gameplay,
      caption: "Gameplay demo",
      alt: "Gameplay demo",
    },
  ];

  const description = md`
    As part of a team, I developed an interactive Fruit Ninja game that uses
    real-time computer vision and machine learning to enable gesture-based
    gameplay through a live camera feed. The system tracks user hand movements,
    recognizes gestures, and maps them to game controls, allowing players to
    interact with virtual objects using natural hand motions. The project
    emphasizes low latency performance, accurate gesture recognition, and
    responsive visual feedback.

    Key components and contributions:

    - Hand Detection and Tracking: Used MediaPipe Hands to detect and track
      21-point hand landmarks in real time from webcam input.
    - Gesture Recognition: Collected and labeled a custom 1000 image gesture
      dataset and trained a multilayer perceptron to classify hand gestures
      based on landmark features.
    - Game Controls: Mapped recognized gestures to game actions such as pause,
      restart, and quit.
    - Collision Detection: Implemented real-time collision detection between
      hand trajectories and virtual fruit objects to determine successful
      slices.
    - Game Logic and Feedback: Designed state-based game logic with scoring,
      timing, and visual feedback to create an engaging and responsive user
      experience.
  `;

  const metadata = {
    title: "3D Fruit Ninja",
    role: "Team Project",
    location: "Purdue University",
    duration: "Sep 2025 – Dec 2025",
  };

  return (
    <div className="case-study-wrapper">
      <div className="back-nav">
        <Link to="/projects" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>

      <div className="case-study-grid">
        <main className="case-study-main">
          <header className="case-study-header">
            <h1 className="case-study-title">{metadata.title}</h1>
            <p className="case-study-role">{metadata.role}</p>
          </header>

          <div className="case-study-body">{parseMarkdown(description)}</div>

          <div className="project-images-gallery">
            {images.map((img, i) => (
              <figure key={i} className="gallery-item">
                <img src={img.src} alt={img.alt} />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </main>

        <aside className="case-study-sidebar">
          <section className="sidebar-section">
            <h4>Location & Date</h4>
            <div className="meta-row">
              <FaMapMarkerAlt /> <span>{metadata.location}</span>
            </div>
            <div className="meta-row">
              <FaCalendarAlt /> <span>{metadata.duration}</span>
            </div>
          </section>

          <section className="sidebar-section">
            <h4>Resources</h4>
            <div className="detail-links-list">
              {attachments.map((att, i) => (
                <a
                  key={i}
                  href={att.url}
                  target="_blank"
                  rel="noreferrer"
                  className="detail-resource-link"
                >
                  <FaFileAlt /> {att.name}{" "}
                  <FaExternalLinkAlt className="ext-icon" />
                </a>
              ))}
            </div>
          </section>

          <section className="sidebar-section">
            <h4>Technical Skills</h4>
            <div className="detail-skills-list">
              {skills.map((skill) => (
                <span key={skill} className="detail-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default FruitNinjaProject;
