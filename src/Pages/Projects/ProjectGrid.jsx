import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projectData } from "../../data/projects";
import "./ProjectGrid.css";

const ProjectGrid = () => {
  if (!projectData) return null;

  return (
    <div className="project-grid">
      {Object.entries(projectData).map(([slug, project]) => (
        <Link
          to={`/projects/${slug}`}
          key={slug}
          className="project-card-link"
        >
          <div className="card-image-container">
            <img src={project.thumbnail} alt={project.title} />
          </div>

          <div className="card-text-content">
            <h3 className="card-project-title">{project.title}</h3>
            <p className="card-project-desc">{project.shortDesc}</p>
            <div className="card-footer-link">
              Learn More <FaArrowRight size={14} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
