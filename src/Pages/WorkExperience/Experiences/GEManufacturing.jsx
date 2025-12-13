import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import geLogo from "../../../assets/logos/ge_logo.png";

const GEManufacturing = () => {
  const skills = [
    "Python",
    "Excel",
    "Lean Manufacturing",
    "Inventory Analysis",
    "CAD",
    "Continous Improvement",
    "Supply Chain",
    "CAS Inventory Software",
  ];

  const attachments = [];

  const images = [];

  const description = md`
    In the summer of 2025, I worked as a Supply Chain and Manufacturing Intern
    at GE Aerospace in the Marine and Industrial division. During my rotation,
    I contributed to several projects that improved assembly operations for the
    LM2500 and LM6000 engines.

    Key projects and accomplishments:

    - Designed an ergonomic kit cart system for engine mechanics as part of a
      new kitting initiative. Collaborated directly with mechanics to prototype
      and standardize the cart design to improve workflow and accessibility.
    - Developed and implemented a labeling system for a 2Bin hardware project.
      Created a color-coded and barcode scanning label design for over 4,000
      bins to streamline part identification and organization at the plant and
      distribution center.
    - Built a Python module to analyze an excess hardware inventory of more
      than 30,000 parts. Designed a command-line interface for querying by
      engine subassembly, identifying high-frequency part numbers, and
      exporting cost and usage data.
    - Worked with a team to facilitate the return of hundreds of excess and
      non-conforming parts to suppliers. Communicated with vendors to resolve
      issues and ensure efficient processing.
  `;

  return (
    <ProjectBox
      title="GE Aerospace"
      role="Supply Chain and Manufacturing Intern - Assembly and Test"
      logo={geLogo}
      location="Evendale, OH"
      duration="May 2025 – Aug 2025"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="right"
    />
  );
};

export default GEManufacturing;
