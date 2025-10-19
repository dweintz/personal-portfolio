import '../WorkExperience.css';
import geLogo from '../../../assets/ge_logo.png';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const GEManufacturing = () => {
  const skills = ['Python', 'Excel', 'Lean Manufacturing', 
    'Inventory Analysis', 'CAD', 'Continous Improvement', 
    'Supply Chain', 'CAS Inventory Software']
  
  return (
        <div className= "work-box slide-box">
        <div className="work-header">
            <h2 className="work-company">
            GE Aerospace
            </h2>
            <img src={geLogo} alt="GE" className="work-logo" />
        </div>
        <h3 className="work-role">
            Supply Chain and Manufacturing Intern - Assembly and Test
        </h3>
        <br></br>
        <p className="project-location">
            <FaMapMarkerAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            Evendale, OH
        </p>
        <p className="project-duration">
            <FaCalendarAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            May 2025 – Aug 2025
        </p>
        <p className="work-desc">
            <p>
                In the summer of 2025, I worked as a Supply Chain and 
                Manufacturing Intern at GE Aerospace in the Marine and 
                Industrial division. During my rotation, I contributed 
                to several projects that improved assembly operations 
                for the LM2500 and LM6000 engines.
            </p>
            <br></br>
            <p>
                Key projects and accomplishments:
                <ul>
                    <li>
                        Designed an ergonomic kit cart system for engine 
                        mechanics as part of a new kitting initiative. 
                        Collaborated directly with mechanics to prototype 
                        and standardize the cart design to improve workflow 
                        and accessibility.
                    </li>
                    <li>
                        Developed and implemented a labeling system for a 
                        2Bin hardware project. Created a color-coded and 
                        barcode scanning label design for over 4,000 bins 
                        to streamline part identification and organization 
                        at the plant and distribution center.
                    </li>
                    <li>
                        Built a Python module to analyze an excess 
                        hardware inventory of more than 30,000 parts. 
                        Designed a command-line interface for querying 
                        by engine subassembly, identifying high-frequency 
                        part numbers, and exporting cost and usage data.
                    </li>
                    <li>
                        Worked with a team to facilitate the return of 
                        hundreds of excess and non-conforming parts to 
                        suppliers. Communicated with vendors to resolve 
                        issues and ensure efficient processing.
                    </li>
                </ul>
            </p>
            <br></br>
            <p>
                Learn more about <a href="https://www.geaerospace.com/military-defense/marine" target="_blank" rel="noopener noreferrer">
                    GE Aerospace Marine & Industrial
                </a>
            </p>
        </p>
        <div className="skills-container">
            {skills.map((skill, i) => (
            <span key={i} className="skill-pill">{skill}</span>
            ))}
        </div>
        </div>
  );
};

export default GEManufacturing;
