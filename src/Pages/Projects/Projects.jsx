import "./Projects.css";
import WebsiteProject from "./ProjectBoxes/WebsiteProject";
import NutritionProject from "./ProjectBoxes/NutritionProject";
import PedestrianProject from "./ProjectBoxes/PedestrianProject";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <WebsiteProject />
        <NutritionProject />
        <PedestrianProject />
      </div>
    </div>
  );
};

export default Projects;
