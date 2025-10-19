import '../WorkExperience.css';
import chipotleLogo from '../../../assets/chipotle_logo.png';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Chipotle = () => {
  const skills = ['Food service', 'Retail', 'Team work']
  
  return (
        <div className= 'work-box slide-box slide-right'>
        <div className="work-header">
            <h2 className="work-company">
            Chipotle Mexican Grill
            </h2>
            <img src={chipotleLogo} alt="GE" className="work-logo" />
        </div>
        <h3 className="work-role">
            Crew Member
        </h3>
        <br></br>
        <p className="project-location">
            <FaMapMarkerAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            Cincinnati, OH
        </p>
        <p className="project-duration">
            <FaCalendarAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
            May 2022 – Aug 2022
        </p>
        <p className="work-desc">
            <p>
                In the summer of 2022, I worked as a crew Member at 
                Chipotle. I worked on morning food prep and serving 
                customers on the serving line.
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

export default Chipotle;
