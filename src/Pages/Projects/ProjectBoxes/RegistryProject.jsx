import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import site from "../../../assets/registry/site.png";
import site2 from "../../../assets/registry/site2.png";

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
      caption: "Registry dashboard:",
      alt: "Registry dashboard",
    },
    {
      src: site2,
      caption: "Sample uploaded artifact:",
      alt: "Sample uploaded artifact",
    },
  ];

  const description = md`
    As part of a team project, I developed a full-stack Model Registry Platform
    designed to store, track, and evaluate machine learning models,
    particularly Hugging Face models. The system enables users to upload files
    or link existing Hugging Face repositories, automatically extract metadata,
    and evaluate models based on standardized criteria.

    The backend service is built using Python, Flask, and AWS EC2, providing
    RESTful API endpoints for model registration, rating workflows, and audit
    logging. Uploaded models are stored on AWS S3. The platform securely
    manages model metadata, artifacts, and user submissions, while generating
    insights about model quality.

    On the frontend, we implemented an interactive dashboard using React,
    offering real-time model browsing, filtering, and rating.

    This project strengthened my experience with cloud deployment and
    full-stack development, including containerization, API design, and
    automated workflows.
  `;

  return (
    <ProjectBox
      title="Model Registry Platform"
      role="Team Project"
      logo=""
      location="Purdue University"
      duration="Aug 2025 – Dec 2025"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="left"
    />
  );
};

export default RegistryProject;
