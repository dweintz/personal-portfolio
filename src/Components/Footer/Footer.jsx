import "./Footer.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">© 2026 Donny Weintz. All rights reserved.</p>
        
        <div className="footer-links">
          <a href="mailto:donnyweintz@gmail.com" className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>Email</span>
          </a>
          
          <a href="https://github.com/dweintz" target="_blank" rel="noreferrer" className="footer-item">
            <FaGithub className="footer-icon" />
            <span>GitHub</span>
          </a>

          <a href="https://linkedin.com/in/donnyweintz" target="_blank" rel="noreferrer" className="footer-item">
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;