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

const WebsiteProject = () => {
  const skills = [
    "React",
    "CSS",
    "HTML",
    "GitHub Pages",
    "Front-end Development",
    "UI/UX Principles",
    "Animations",
    "npm / Node.js",
    "Responsive Web Design",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/dweintz/personal-portfolio",
    },
  ];

  const images = [];

  const description = md`
    Developed and deployed the portfolio website you’re viewing now, built
    entirely from scratch using React, HTML, and CSS.

    Focused on clean, minimalist design principles, usability, and
    accessibility to ensure seamless viewing across desktop, tablet, and mobile
    devices. Integrated modular React components for efficient maintainability
    and scalability. Click the link below to view the source code for the site
    on GitHub.
  `;

  const metadata = {
    title: "Personal Portfolio",
    role: "Personal Project",
    location: "Purdue University",
    duration: "Sep 2025 – Jan 2026",
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

export default WebsiteProject;
