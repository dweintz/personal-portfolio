import React from "react";
import { Link } from "react-router-dom";
import "./ProjectGrid.css";
import { FaArrowRight } from "react-icons/fa";
import site2 from "../../assets/registry/site2.png";
import demogif from "../../assets/nutrition/demogif.GIF";
import gameplay from "../../assets/fruit_ninja/gameplay.gif";
import portfolio from "../../assets/portfolio/homepage.png";
import pedestrian1 from "../../assets/pedestrian/pedestrian1.png";

const projectList = [
  {
    id: 1,
    title: "Nutrition Change Estimation From Video",
    image: demogif,
    description:
      "A computer vision system for estimating recipe nutrition from egocentric cooking videos",
    link: "/projects/nutrition",
  },
  {
    id: 2,
    title: "Model Registry Platform",
    image: site2,
    description:
      "Full-stack platform for tracking and evaluating machine learning models",
    link: "/projects/registry",
  },
  {
    id: 3,
    title: "3D Fruit Ninja",
    image: gameplay,
    description:
      "A 3D interactive game environment utilizing gesture recognition and computer vision",
    link: "/projects/fruitninja",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A responsive portfolio built with React to showcase software engineering projects",
    link: "/projects/website",
  },
  {
    id: 5,
    title: "Pedestrian Detection for Crash Avoidance",
    image: pedestrian1,
    description:
      "Real-time object detection system designed to enhance vehicle safety and pedestrian awareness",
    link: "/projects/pedestrian",
  },
];

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projectList.map((project) => (
        <Link to={project.link} key={project.id} className="project-card-link">
          <div className="card-image-container">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="card-text-content">
            <h3 className="card-project-title">{project.title}</h3>

            <p className="card-project-desc">{project.description}</p>

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
