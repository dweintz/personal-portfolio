import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { parseMarkdown } from "../../utils/markdownParser.jsx";
import md from "dedent";
import "./Experience.css";

import GEAerospaceLogo from "../../assets/CompanyLogos/GEAerospaceLogo.png";
import CostcoLogo from "../../assets/CompanyLogos/CostcoLogo.png";
import chipotleLogo from "../../assets/CompanyLogos/ChipotleLogo.png";

const workHistory = [
  {
    id: 1,
    company: "GE Aerospace",
    logo: GEAerospaceLogo,
    role: "Supply Chain and Manufacturing Intern",
    location: "Evendale, OH",
    duration: "May 2025 – Aug 2025",
    description: md`
      In the summer of 2025, I worked as a Supply Chain and Manufacturing
      Intern at GE Aerospace in the Marine and Industrial division. During my
      rotation, I contributed to several projects that improved assembly
      operations for the LM2500 and LM6000 engines.

      Key projects and accomplishments:

      - Designed an ergonomic kit cart system for engine mechanics as part of a
        new kitting initiative. Collaborated directly with mechanics to
        prototype and standardize the cart design to improve workflow and
        accessibility.
      - Developed and implemented a labeling system for a 2Bin hardware
        project. Created a color-coded and barcode scanning label design for
        over 4,000 bins to streamline part identification and organization.
      - Built a Python module to analyze an excess hardware inventory of more
        than 30,000 parts. Designed a command-line interface for querying by
        engine subassembly, identifying high-frequency part numbers, and
        exporting cost and usage data.
      - Worked with a team to facilitate the return of hundreds of excess and
        non-conforming parts to suppliers. Communicated with vendors to resolve
        issues and ensure efficient processing.
    `,
    skills: [
      "Python",
      "Excel",
      "Lean Manufacturing",
      "Inventory Analysis",
      "CAD",
      "Continous Improvement",
      "Supply Chain",
      "CAS Inventory Software",
    ],
  },
  {
    id: 2,
    company: "GE Aerospace",
    logo: GEAerospaceLogo,
    role: "Inspection Engineering Intern",
    location: "Evendale, OH",
    duration: "May 2024 – Aug 2024",
    description: md`
      In the summer of 2024, I worked as an Inspection Engineering Intern at GE
      Aerospace. During my rotation, I developed a software tool to
      automatically evaluate resolution and contrast discrimination in CT
      images, following standard testing procedures.

      Key project accomplishments:

      - Successfully measured critical metrics, including the modulation
        transfer function (MTF) and contrast discrimination function (CDF),
        achieving results within 5% of known values.
      - Integrated the software with Avizo for Manufacturing Defect Analysis,
        performing advanced image processing operations on CT scans.
      - Prototyped code to analyze CT images without requiring a standardized
        test volume, increasing flexibility and efficiency.
    `,
    skills: [
      "Python",
      "Image Processing",
      "CT Imagining",
      "Testing",
      "Inspection",
      "Data Analytics",
      "Avizo",
    ],
  },
  {
    id: 3,
    company: "Costco Wholesale",
    logo: CostcoLogo,
    role: "Front End Assistant",
    location: "Cincinnati, OH",
    duration: "May 2023 – Jan 2025",
    description: md`
      Worked in a seasonal front-end support role, assisting cashiers,
      maintaining the availability of shopping carts for members, and
      organizing merchandise in the warehouse.
    `,
    skills: ["Customer Satisfaction", "Communication", "Retail"],
  },
  {
    id: 4,
    company: "Chipotle Mexican Grill",
    logo: chipotleLogo,
    role: "Crew Member",
    location: "Cincinnati, OH",
    duration: "May 2022 – Aug 2022",
    description: md`
      In the summer of 2022, I worked as a crew Member at Chipotle. I worked on
      morning food prep and serving customers on the serving line.
    `,
    skills: ["Food Service", "Team Work", "Retail"],
  },
];

const Experience = () => {
  return (
    <div className="experience-page-wrapper">
      <div className="experience-container">
        {workHistory.map((job) => (
          <div key={job.id} className="experience-entry-grid">
            <main className="experience-main-content">
              <h2 className="experience-role-title">{job.role}</h2>
              <div className="case-study-body">
                {parseMarkdown(job.description)}
              </div>
            </main>

            <aside className="experience-sidebar-info">
              <div className="experience-logo-container">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="experience-company-logo"
                />
              </div>

              <div className="sidebar-group company-meta-block">
                <h4 className="company-label">Company</h4>
                <p className="meta-item">
                  <strong>{job.company}</strong>
                </p>
                <div className="meta">
                  <p className="date-location">
                    <FaMapMarkerAlt /> {job.location}
                  </p>
                  <p className="date-location">
                    <FaCalendarAlt /> {job.duration}
                  </p>
                </div>
              </div>

              <div className="sidebar-group experience-skills-block">
                <h4 className="sidebar-skills-label">Skills Applied</h4>
                <div className="sidebar-skills">
                  {job.skills.map((skill) => (
                    <span key={skill} className="detail-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
