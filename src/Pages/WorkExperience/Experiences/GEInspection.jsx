import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import geLogo from "../../../assets/logos/ge_logo.png";

const GEInspection = () => {
  const skills = [
    "Python",
    "Image Processing",
    "CT Imagining",
    "Testing",
    "Inspection",
    "Data Analytics",
    "Avizo for Industrial Inspection",
  ];

  const attachments = [];

  const images = [];

  const description = md`
    In the summer of 2024, I worked as an Inspection Engineering Intern at GE
    Aerospace. During my rotation, I developed a software tool to automatically
    evaluate resolution and contrast discrimination in CT images, following the
    standard CT testing procedure outlined in ASTM E1695.

    Key project accomplishments:

    - Successfully measured critical metrics, including the modulation transfer
      function (MTF) and contrast discrimination function (CDF), achieving
      results within 5% of known values.
    - Integrated the software with Avizo for Manufacturing Defect Analysis,
      performing advanced image processing operations on CT scans.
    - Prototyped code to analyze CT images without requiring a standardized
      test volume, increasing flexibility and efficiency.
  `;

  return (
    <ProjectBox
      title="GE Aerospace"
      role="Inspection Engineering Intern - CT Imaging"
      logo={geLogo}
      location="Evendale, OH"
      duration="May 2024 – Aug 2024"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="left"
    />
  );
};

export default GEInspection;
