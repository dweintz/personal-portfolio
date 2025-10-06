import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
