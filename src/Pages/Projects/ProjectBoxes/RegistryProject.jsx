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
import site from "../../../assets/registry/site.png";
import site2 from "../../../assets/registry/site2.png";

const RegistryProject = () => {
  const skills = [
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "AWS EC2",
    "AWS IAM",
    "Linux Servers",
    "Flask",
    "RESTful API Design",
    "Gunicorn / WGSI",
    "Hugging Face API",
    "JSON",
    "YAML",
    "CI/CD Piplines",
    "GitHub Actions",
    "Cloud Deployment",
    "GitHub Project Boards",
    "Team Collaboration",
    "Code Reviews",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/william-taoo/ECE461-Project-Phase2",
    },
  ];

  const images = [
    {
      src: site,
      caption: "Registry dashboard",
      alt: "Registry dashboard",
    },
    {
      src: site2,
      caption: "Sample uploaded artifact",
      alt: "Sample uploaded artifact",
    },
  ];

  const description = md`
    As part of a team project, I developed a full-stack Model Registry Platform
    designed to store, track, and evaluate machine learning models,
    particularly Hugging Face models. The system enables users to upload files
    or link existing Hugging Face repositories, automatically extract metadata,
    and evaluate models based on standardized criteria.

    The backend service is built using Python, Flask, and AWS EC2, providing
    RESTful API endpoints for model registration, rating workflows, and audit
    logging. Uploaded models are stored on AWS S3. The platform securely
    manages model metadata, artifacts, and user submissions, while generating
    insights about model quality.

    On the frontend, we implemented an interactive dashboard using React,
    offering real-time model browsing, filtering, and rating.

    This project strengthened my experience with cloud deployment and
    full-stack development, including containerization, API design, and
    automated workflows.
  `;

  const metadata = {
    title: "Model Registry Platform",
    role: "ECE 46100 Team Project",
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

export default RegistryProject;
