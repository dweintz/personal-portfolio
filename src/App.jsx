import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Experience from "./Pages/WorkExperience/Experience";
import ProjectsGrid from "./Pages/Projects/ProjectGrid";
import ProjectDetail from "./Pages/Projects/ProjectDetail";
import Contact from "./Pages/Contact/Contact";

import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Experience />} />
          <Route path="/projects" element={<ProjectsGrid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
