import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import WorkExperience from "./Pages/WorkExperience/WorkExperience";
import Projects from "./Pages/Projects/Projects";

import NutritionProject from "./Pages/Projects/ProjectBoxes/NutritionProject";
import RegistryProject from "./Pages/Projects/ProjectBoxes/RegistryProject";
import FruitNinjaProject from "./Pages/Projects/ProjectBoxes/FruitNinjaProject";
import WebsiteProject from "./Pages/Projects/ProjectBoxes/WebsiteProject";
import PedestrianProject from "./Pages/Projects/ProjectBoxes/PedestrianProject";

import ProjectsGrid from "./Pages/Projects/ProjectGrid";
import Experience from "./Pages/WorkExperience/Experience";
import AboutMe from "./Pages/AboutMe/AboutMe";
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
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/nutrition" element={<NutritionProject />} />
          <Route path="/projects/registry" element={<RegistryProject />} />
          <Route path="/projects/fruitninja" element={<FruitNinjaProject />} />
          <Route path="/projects/website" element={<WebsiteProject />} />
          <Route path="/projects/pedestrian" element={<PedestrianProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
