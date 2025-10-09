import '../WorkExperience.css';
import './Chipotle.css';
import chipotleLogo from '../../../assets/chipotle_logo.png';


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
        <p className="work-date">
            May 2022 – Aug 2022
        </p>
        <p className="work-location">
            Cincinnati, Ohio
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
