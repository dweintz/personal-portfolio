import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <ul>
        <li><Link to="/personal-portfolio/">Home</Link></li>
        <li><Link to="/personal-portfolio/work">Work Experience</Link></li>
        <li><Link to="/personal-portfolio/projects">Projects</Link></li>
        <li><Link to="/personal-portfolio/about">About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
