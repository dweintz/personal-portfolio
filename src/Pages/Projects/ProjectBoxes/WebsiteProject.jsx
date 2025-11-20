import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";

const WebsiteProject = () => {
  const skills = [
    "React",
    "CSS",
    "HTML",
    "GitHub Pages",
    "Front-end Development",
    "UI/UX Principles",
    "Animations",
    "npm / Node.js",
    "Responsive Web Design",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/dweintz/personal-portfolio",
    },
  ];

  const images = [];

  const description = md`
    Developed and deployed the portfolio website you’re viewing now, built
    entirely from scratch using React, HTML, and CSS.

    Focused on clean, minimalist design principles, usability, and
    accessibility to ensure seamless viewing across desktop, tablet, and mobile
    devices. Integrated modular React components for efficient maintainability
    and scalability. Click the link below to view the source code for the site
    on GitHub.
  `;

  return (
    <ProjectBox
      title="Portfolio Website"
      role="Personal Project"
      logo=""
      location="Purdue University"
      duration="Sep 2025 – Present"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="left"
    />
  );
};

export default WebsiteProject;
