import "./Projects.css";
import WebsiteProject from "./ProjectBoxes/WebsiteProject";
import NutritionProject from "./ProjectBoxes/NutritionProject";
import PedestrianProject from "./ProjectBoxes/PedestrianProject";
import RegistryProject from "./ProjectBoxes/RegistryProject";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Projects = () => {
  return (
    <div className="content-page">
      <div className="content-container">
        <div className="projects-page">
          <aside className="projects-toc slide-box">
            <h3>Contents</h3>
            <ul>
              <li><button onClick={() => scrollTo("nutrition")}>Nutrition Estimation</button></li>
              <li><button onClick={() => scrollTo("registry")}>Model Registry</button></li>
              <li><button onClick={() => scrollTo("website")}>Personal Website</button></li>
              <li><button onClick={() => scrollTo("pedestrian")}>Pedestrian Detection</button></li>
            </ul>
          </aside>

          <div className="projects-content">
            <section id="nutrition">
              <NutritionProject />
            </section>

            <section id="registry">
              <RegistryProject />
            </section>

            <section id="website">
              <WebsiteProject />
            </section>

            <section id="pedestrian">
              <PedestrianProject />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects