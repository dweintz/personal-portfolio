import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import site from "../../../assets/registry/site.png";

const RegistryProject = () => {
  const skills = [
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "AWS EC2",
    "AWS IAM",
    "Linux Servers",
    "Flask",
    "RESTful API Design",
    "Gunicorn / WGSI",
    "Hugging Face API",
    "JSON",
    "YAML",
    "CI/CD Piplines",
    "GitHub Actions",
    "Cloud Deployment",
    "GitHub Project Boards",
    "Team Collaboration",
    "Code Reviews",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/william-taoo/ECE461-Project-Phase2",
    },
  ];

  const images = [
    {
      src: site,
      caption: "Current view of site homepage:",
      alt: "Current view of site homepage",
    },
  ];

  const description = md`
    As part of a team project, I am developing a full-stack Model Registry
    Platform designed to store, track, and evaluate machine learning models,
    particularly Hugging Face models. The system enables users to upload files
    or link existing Hugging Face repositories, automatically extract metadata,
    and evaluate models based on standardized criteria.

    The backend service is built using Python, Flask, and AWS EC2, providing
    RESTful API endpoints for model registration, rating workflows, and audit
    logging. The platform securely manages model metadata, artifacts, and user
    submissions, while generating insights about model quality.

    On the frontend, we have implemented an interactive dashboard using React,
    offering real-time model browsing, filtering, and rating.

    This project has strengthened my experience with cloud deployment, server
    architecture, and full-stack application development, including
    containerization, API design, cloud security, and automated workflows. We
    are continuing to improve the system to provide a more polished user
    interface and handle more advanced model scoring.
  `;

  return (
    <ProjectBox
      title="Model Registry Platform"
      role="Team Project"
      logo=""
      location="Purdue University"
      duration="Aug 2025 – Present"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="right"
    />
  );
};

export default RegistryProject;
