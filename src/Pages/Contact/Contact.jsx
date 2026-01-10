import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Main Info Section */}
          <section className="contact-info-main">
            <header className="contact-header">
              <h1 className="contact-title">Get in Touch</h1>
              <div className="contact-underline"></div>
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

          {/* Contact Details & Links */}
          <aside className="contact-details-box">
            <div className="contact-group">
              <h3 className="group-label">Contact Info</h3>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <a href="mailto:donnyweintz@gmail.com">
                  donnyweintz@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>+1 (513)-815-2765</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Cincinnati, OH</span>
              </div>
            </div>

            <div className="contact-group">
              <h3 className="group-label">Socials</h3>
              <div className="contact-item">
                <FaLinkedin className="icon" />
                <a
                  href="https://linkedin.com/in/donnyweintz"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <FaGithub className="icon" />
                <a
                  href="https://github.com/dweintz"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
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
