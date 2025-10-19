import '../Projects.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const WebsiteProject = () => {
  const skills = [
        'React', 'CSS', 'HTML', 'GitHub Pages', 'Front-end Development',
        'UI/UX Principles', 'Animations', 'npm / Node.js', 
        'Responsive Web Design']

  const images = []
  const attachments = [
        { name: 'Website Source Code (GitHub)', url: 'https://github.com/dweintz/personal-portfolio'},
      ]

  return (
        <div className={"project-box slide-box"}>
            <h2 className="project-title">
                Portfolio Website
            </h2>
            <h3 className="work-role">
                Personal Project
            </h3>
            <br></br>
            <p className="project-location">
                <FaMapMarkerAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
                Purdue University
            </p>
            <p className="project-duration">
                <FaCalendarAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
                Sep 2025 – Oct 2025
            </p>
            <div className="work-desc">
                <p><br></br>
                    Developed and deployed the portfolio website you’re 
                    viewing now, built entirely from scratch using React, 
                    HTML, and CSS. 
                </p><br></br>
                <p>
                    Focused on clean, minimalist design principles, usability, 
                    and accessibility to ensure seamless viewing across desktop, 
                    tablet, and mobile devices. Integrated modular React 
                    components for efficient maintainability and scalability.
                    Click the link below to view the source code for the site
                    on GitHub.
                </p>
            </div>

            <div className="skills-container">
                {skills.map((skill, l) => (
                <span key={l} className="skill-pill">{skill}</span>
                ))}
            </div>

            <div className="project-images">
                {images.map((img, idx) => (
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
                {attachments && attachments.map((att, idx) => (
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
    );
};

export default WebsiteProject;
