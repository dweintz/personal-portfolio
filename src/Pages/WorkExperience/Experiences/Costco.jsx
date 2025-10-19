import '../WorkExperience.css';
import costcoLogo from '../../../assets/logos/costco_logo.png';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Costco = () => {
  const skills = [
    'Customer Satisfaction',
    'Communication', 
    'Retail']
  
  return (
    <div className= 'project-box slide-box'>
        <div className="project-header">
            <h2 className="project-company">
            Costco Wholesale
            </h2>
            <img src={costcoLogo} alt="GE" className="project-logo" />
        </div>
        <h3 className="project-role">
            Front End Assistant
        </h3>
        <br></br>
        <p className="project-location">
            <FaMapMarkerAlt className="icon-location"/>
            Cincinnati, OH
        </p>
        <p className="project-duration">
            <FaCalendarAlt className="icon-calendar"/>
            May 2023 – Jan 2025
        </p>
        <div className="project-desc">
            <p>
                Worked in a seasonal front-end support role, assisting cashiers, 
                maintaining the availability of shopping carts for members, 
                and organizing merchandise in the warehouse.
            </p>
        </div>

        <div className="skills-container">
            {skills.map((skill, i) => (
            <span key={i} className="skill-pill">{skill}</span>
            ))}
        </div>

    </div>
  );
};

export default Costco;
