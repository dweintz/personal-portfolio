import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Donny Weintz. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:donnyweintz@gmail.com">Email</a>
        <a href="https://github.com/dweintz" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/donnyweintz"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
