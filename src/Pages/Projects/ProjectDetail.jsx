import { useParams, Navigate } from "react-router-dom";
import { projectData } from "../../data/projects";
import ProjectLayout from "./ProjectLayout";

const ProjectDetail = () => {
  const { projectId } = useParams(); // Grabs "personal-portfolio" from URL
  const project = projectData[projectId];

  // Safety check: if the project doesn't exist, send back to the list
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectLayout project={project} />;
};

export default ProjectDetail;
