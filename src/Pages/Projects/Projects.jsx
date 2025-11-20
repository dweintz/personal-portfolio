import "./Projects.css";
import WebsiteProject from "./ProjectBoxes/WebsiteProject";
import NutritionProject from "./ProjectBoxes/NutritionProject";
import PedestrianProject from "./ProjectBoxes/PedestrianProject";
import RegistryProject from "./ProjectBoxes/RegistryProject";

const Projects = () => {
  return (
    <div className="content-page">
      <div className="content-container">
        <NutritionProject />
        <RegistryProject />
        <WebsiteProject />
        <PedestrianProject />
      </div>
    </div>
  );
};

export default Projects;
