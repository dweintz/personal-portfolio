import '../WorkExperience.css';
import costcoLogo from '../../../assets/costco_logo.png';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Costco = () => {
  const skills = ['Customer Satisfaction', 'Communication', 'Retail']
  
  return (
        <div className= 'work-box slide-box'>
        <div className="work-header">
            <h2 className="work-company">
            Costco Wholesale
            </h2>
            <img src={costcoLogo} alt="GE" className="work-logo" />
        </div>
        <h3 className="work-role">
            Front End Assistant
        </h3>
        <br></br>
        <p className="project-location">
            <FaMapMarkerAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            Cincinnati, OH
        </p>
        <p className="project-duration">
            <FaCalendarAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            May 2023 – Jan 2025
        </p>
        <p className="work-desc">
            <p>
                Worked in a seasonal front-end support role, assisting cashiers, 
                maintaining the availability of shopping carts for members, 
                and organizing merchandise in the warehouse.
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

export default Costco;
