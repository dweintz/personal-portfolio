import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Contact.css";

import ContactResourcesResume from "../../assets/ContactResources/ContactResourcesResume.pdf";
import ContactResourcesTranscript from "../../assets/ContactResources/ContactResourcesTranscript.pdf";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-grid">
          <section className="contact-info-main">
            <header className="contact-header">
              <h1 className="contact-title">Get in Touch</h1>
            </header>
            <p className="contact-description">
              If you have any questions about my experience or projects, please
              reach out.
            </p>
            <p className="contact-description">
              I'm currently seeking full-time opportunities in software
              engineering with start dates in May 2026. I'm a U.S. citizen and
              am willing to relocate.
            </p>
          </section>

          <aside className="contact-details-box">
            <div className="contact-group">
              <h3 className="group-label">Contact Info</h3>
              <div className="detail-links-list">
                <a href="mailto:donnyweintz@gmail.com" className="global-link">
                  <FaEnvelope className="left-icon" /> donnyweintz@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="left-icon" />
                <span>+1 (513)-815-2765</span>
              </div>
            </div>

            <div className="contact-group">
              <h3 className="group-label">Location</h3>
              <div className="contact-item">
                <FaMapMarkerAlt className="left-icon" />
                <span>Cincinnati, OH</span>
              </div>
            </div>

            <div className="contact-group">
              <h3 className="group-label">Socials</h3>
              <div className="detail-links-list">
                <a
                  href="https://linkedin.com/in/donnyweintz"
                  target="_blank"
                  rel="noreferrer"
                  className="global-link"
                >
                  <FaLinkedin className="left-icon" /> LinkedIn{" "}
                  <FaExternalLinkAlt className="right-icon" />
                </a>
              </div>
              <div className="detail-links-list">
                <a
                  href="https://github.com/dweintz"
                  target="_blank"
                  rel="noreferrer"
                  className="global-link"
                >
                  <FaGithub className="left-icon" /> GitHub{" "}
                  <FaExternalLinkAlt className="right-icon" />
                </a>
              </div>
            </div>

            <div className="contact-group">
              <h3 className="group-label">Documents</h3>
              <div className="detail-links-list">
                <a
                  href={ContactResourcesResume}
                  target="_blank"
                  rel="noreferrer"
                  className="global-link"
                >
                  <FaFileAlt className="left-icon" /> Resume{" "}
                  <FaExternalLinkAlt className="right-icon" />
                </a>
              </div>
              <div className="detail-links-list">
                <a
                  href={ContactResourcesTranscript}
                  target="_blank"
                  rel="noreferrer"
                  className="global-link"
                >
                  <FaFileAlt className="left-icon" /> Purdue Transcript{" "}
                  <FaExternalLinkAlt className="right-icon" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
