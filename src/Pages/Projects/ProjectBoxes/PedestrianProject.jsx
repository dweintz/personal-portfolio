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
import certificate from "../../../assets/pedestrian/OUR_Certificates.pdf";
import final_presentation from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Presentation.pdf";
import final_report from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Report-compressed.pdf";
import poster from "../../../assets/pedestrian/Research_Poster.pdf";
import pedestrian1 from "../../../assets/pedestrian/pedestrian1.png";

const PedestrianProject = () => {
  const skills = [
    "Python",
    "Image Processing",
    "Histogram of Oriented Gradients",
    "Support Vector Machines",
  ];

  const attachments = [
    { name: "Project Poster", url: poster },
    { name: "Project Paper", url: final_report },
    { name: "Project Final Presentation", url: final_presentation },
    { name: "Conference Certificate", url: certificate },
  ];

  const images = [
    {
      src: pedestrian1,
      caption: "Results of pedestrian detection and crash avoidance algorithm",
      alt: "Results of pedestrian detection and crash avoidance algorithm",
    },
  ];

  const description = md`
    As part of the Image Processing and Analysis with Applications (IPAA) team,
    I worked with a team to develop a pedestrian detector model for crash
    avoidance. We utilized object detection and classification techniques such
    as Histograms of Oriented Gradients (HOG) and Support Vector Machines
    (SVM). To filter results, we employed post-processing techniques like
    hard-negative mining, non-maximum suppression, and thresholding.

    We paired the pedestrian detector with an algorithm to find the optimal
    path for an autonomous vehicle in near-collision scenarios and presented
    our results at the Fall 2024 Purdue Undergraduate Research Expo.

    Browse the links and images below to learn more about the project.
  `;

  const metadata = {
    title: "Pedestrian Detection for Crash Avoidance",
    role: "Purdue Vertically Integrated Projects — Image Processing Team",
    location: "Purdue University",
    duration: "Aug 2024 – Dec 2024",
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

export default PedestrianProject;
