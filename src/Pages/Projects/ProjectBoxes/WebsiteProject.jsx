import "../Projects.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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
      name: "Website Source Code (GitHub)",
      url: "https://github.com/dweintz/personal-portfolio",
    },
  ];

  return (
    <div className={"project-box slide-box"}>
      <h2 className="project-title">Portfolio Website</h2>
      <h3 className="project-role">Personal Project</h3>
      <br></br>
      <p className="project-location">
        <FaMapMarkerAlt className="icon-location" />
        Purdue University
      </p>
      <p className="project-duration">
        <FaCalendarAlt className="icon-calendar" />
        Sep 2025 – Oct 2025
      </p>
      <div className="project-desc">
        <p>
          Developed and deployed the portfolio website you’re viewing now, built
          entirely from scratch using React, HTML, and CSS.
        </p>
        <br></br>
        <p>
          Focused on clean, minimalist design principles, usability, and
          accessibility to ensure seamless viewing across desktop, tablet, and
          mobile devices. Integrated modular React components for efficient
          maintainability and scalability. Click the link below to view the
          source code for the site on GitHub.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill, l) => (
          <span key={l} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>

      <div className="project-links">
        {attachments &&
          attachments.map((att, idx) => (
            <a key={idx} href={att.url} target="_blank" rel="noreferrer">
              {att.name}
            </a>
          ))}
      </div>
    </div>
  );
};

export default WebsiteProject;
