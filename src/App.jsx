import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import WorkExperience from './Pages/WorkExperience/WorkExperience';
import Projects from './Pages/Projects/Projects';
import AboutMe from './Pages/AboutMe/AboutMe';
import './index.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const boxes = document.querySelectorAll('.slide-box');
    boxes.forEach((box) => {
      box.classList.remove('show'); 
    });

    const timeout = setTimeout(() => {
      boxes.forEach((box) => box.classList.add('show'));
    }, 50);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
