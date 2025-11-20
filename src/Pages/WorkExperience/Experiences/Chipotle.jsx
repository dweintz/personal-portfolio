import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import chipotleLogo from "../../../assets/logos/chipotle_logo.png";

const Chipotle = () => {
  const skills = ["Food Service", "Team Work", "Retail"];

  const attachments = [];

  const images = [];

  const description = md`
    In the summer of 2022, I worked as a crew Member at Chipotle. I worked on
    morning food prep and serving customers on the serving line.
  `;

  return (
    <ProjectBox
      title="Chipotle Mexican Grill"
      role="Crew Member"
      logo={chipotleLogo}
      location="Cincinnati, OH"
      duration="May 2022 – Aug 2022"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="right"
    />
  );
};

export default Chipotle;
