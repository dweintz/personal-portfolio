import geLogo from "../../../assets/logos/ge_logo.png";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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

  return (
    <div className="project-box slide-box slide-right">
      <div className="project-header">
        <h2 className="project-title">GE Aerospace</h2>
        <img src={geLogo} alt="GE" className="project-logo" />
      </div>
      <h3 className="project-role">
        Inspection Engineering Intern - CT Imaging
      </h3>
      <br></br>
      <p className="project-location">
        <FaMapMarkerAlt className="icon-location" />
        Evendale, OH
      </p>
      <p className="project-duration">
        <FaCalendarAlt className="icon-calendar" />
        May 2024 – Aug 2024
      </p>
      <br></br>
      <div className="project-desc">
        <p>
          In the summer of 2024, I worked as an Inspection Engineering Intern at
          GE Aerospace. During my rotation, I developed a software tool to
          automatically evaluate resolution and contrast discrimination in CT
          images, following the standard CT testing procedure outlined in ASTM
          E1695.
        </p>
        <br></br>
        <p>
          Key project accomplishments:
          <ul>
            <li>
              Successfully measured critical metrics, including the modulation
              transfer function (MTF) and contrast discrimination function
              (CDF), achieving results within 5% of known values.
            </li>
            <li>
              Integrated the software with Avizo for Manufacturing Defect
              Analysis, performing advanced image processing operations on CT
              scans.
            </li>
            <li>
              Prototyped code to analyze CT images without requiring a
              standardized test volume, increasing flexibility and efficiency.
            </li>
          </ul>
        </p>
        <br></br>

        <div className="work-links">
          Learn more about{" "}
          <a
            href="https://www.geaerospace.com/news/articles/ge-aerospace-inspection-solutions-team-making-waves-enhanced-safety-and-quality"
            target="_blank"
            rel="noopener noreferrer"
          >
            GE Aerospace Inspection Solutions
          </a>
        </div>
        <br />
        <p>Key Skills:</p>
        <hr className="section-divider" />
      </div>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <span key={i} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GEInspection;
