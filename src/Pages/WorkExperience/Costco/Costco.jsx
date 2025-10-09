import '../WorkExperience.css';
import './Costco.css';
import costcoLogo from '../../../assets/costco_logo.png';


const Costco = () => {
  const skills = ['Customer Satisfaction', 'Communication', 'Retail']
  
  return (
        <div className= 'work-box slide-box slide-right'>
        <div className="work-header">
            <h2 className="work-company">
            Costco Wholesale
            </h2>
            <img src={costcoLogo} alt="GE" className="work-logo" />
        </div>
        <h3 className="work-role">
            Front End Assistant
        </h3>
        <p className="work-date">
            May 2023 – Jan 2025
        </p>
        <p className="work-location">
            Cincinnati, Ohio
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
