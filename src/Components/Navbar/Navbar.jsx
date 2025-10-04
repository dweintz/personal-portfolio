import React from 'react'
import './Navbar.css'
import logo from '../../assets/me.jpg'

const Navbar = () => {
  return (
    <nav className = 'container'>
        <img src={logo} alt="Profile Picture" className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Work Experience</li>
            <li>Projects</li>
            <li>About Me</li>
            <li><button className='btn'>Contact Me</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
