import { useParams, Navigate } from "react-router-dom";
import { projectData } from "../../data/projects";
import ProjectLayout from "./ProjectLayout";

const ProjectDetail = () => {
  const params = useParams();
  const projectId = params.projectId;

  const project = projectData[projectId];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectLayout project={project} />;
};

export default ProjectDetail;
