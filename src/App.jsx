import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './index.css';

// Pages
import Home from './Pages/Home/Home';
import WorkExperience from './Pages/WorkExperience/WorkExperience';
import Projects from './Pages/Projects/Projects';
import AboutMe from './Pages/AboutMe/AboutMe';

const App = () => {
  return (
    <div className="app">
      <div className="background-image"></div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/personal-portfolio/" element={<Home />} />
          <Route path="/personal-portfolio/work" element={<WorkExperience />} />
          <Route path="/personal-portfolio/projects" element={<Projects />} />
          <Route path="/personal-portfolio/about" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;