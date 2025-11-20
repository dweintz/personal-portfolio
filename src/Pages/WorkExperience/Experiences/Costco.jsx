import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import costcoLogo from "../../../assets/logos/costco_logo.png";

const Costco = () => {
  const skills = ["Customer Satisfaction", "Communication", "Retail"];

  const attachments = [];

  const images = [];

  const description = md`
    Worked in a seasonal front-end support role, assisting cashiers,
    maintaining the availability of shopping carts for members, and organizing
    merchandise in the warehouse.
  `;

  return (
    <ProjectBox
      title="Costco Wholesale"
      role="Front End Assistant"
      logo={costcoLogo}
      location="Cincinnati, OH"
      duration="May 2023 – Jan 2025"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="left"
    />
  );
};

export default Costco;
