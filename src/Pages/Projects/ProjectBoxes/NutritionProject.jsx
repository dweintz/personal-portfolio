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

// Assets
import project1Img1 from "../../../assets/nutrition/YOLO.png";
import demogif from "../../../assets/nutrition/demogif.GIF";
import research_talk from "../../../assets/nutrition/talk.pdf";
import paper from "../../../assets/nutrition/paper.pdf";

const NutritionProject = () => {
  const skills = [
    "Python",
    "Image Processing",
    "PyTorch",
    "Ultralytics",
    "Hugging Face",
    "OpenCV",
    "Linux Servers",
    "CUDA / GPUs",
    "Computer Vision",
    "Convolutional Neural Networks",
    "YOLO",
    "MediaPipe",
    "Oral Presentation",
    "Teamwork",
    "Verbal Communication",
  ];

  const attachments = [
    { name: "Research Talk", url: research_talk },
    { name: "Semester 1 Paper", url: paper },
    { name: "Cookware/Testing Dataset", url: "https://hd-epic.github.io/" },
    { name: "Ingredient Dataset", url: "https://lorenz.ecn.purdue.edu/~vfn/" },
  ];

  const images = [
    { src: project1Img1, caption: "System Diagram", alt: "YOLO Detection" },
    {
      src: demogif,
      caption: "System Results on test video",
      alt: "Hand Object Detection",
    },
  ];

  const description = md`
    As part of my senior design project on the Image Processing and Analysis
    with Applications (IPAA) team, we designed a system to estimate nutritional
    changes during the cooking process through video data. The system combines
    several components:

    - Hand detection using MediaPipe hands and preparation tool detection using
      YOLO to identify candidate regions for food ingredients.
    - Ingredient detection using a YOLO model trained on ingredient images of
      various categories.
    - Filtering ingredient detections using thresholding techniques based on
      confidence and detection frequency.
    - Database mapping between detected object classes and the Food and
      Nutrient Database for Dietary Studies (FNDDS).
    - Recipe reconstruction based on ingredient addition sequence and extracted
      nutrition information.

    We have successfully implemented all components listed above and are
    working to improve performance in ingredient detection and calorie
    estimation. Currently, we are working on ways to better estimate the
    quantity of food present in each detection.
  `;

  const metadata = {
    title: "Nutrition Change Estimation From Video",
    role: "Purdue Vertically Integrated Projects — Image Processing Team",
    location: "Purdue University",
    duration: "Aug 2025 – Dec 2025",
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

export default NutritionProject;
