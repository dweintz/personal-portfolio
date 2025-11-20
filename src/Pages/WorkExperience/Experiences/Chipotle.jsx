import chipotleLogo from "../../../assets/logos/chipotle_logo.png";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Chipotle = () => {
  const skills = ["Food service", "Retail", "Team work"];

  return (
    <div className="project-box slide-box slide-right">
      <div className="project-header">
        <h2 className="project-title">Chipotle Mexican Grill</h2>
        <img src={chipotleLogo} alt="GE" className="project-logo" />
      </div>
      <h3 className="project-role">Crew Member</h3>
      <br></br>
      <p className="project-location">
        <FaMapMarkerAlt className="icon-location" />
        Cincinnati, OH
      </p>
      <p className="project-duration">
        <FaCalendarAlt className="icon-calendar" />
        May 2022 – Aug 2022
      </p>
      <br></br>
      <div className="project-desc">
        <p>
          In the summer of 2022, I worked as a crew Member at Chipotle. I worked
          on morning food prep and serving customers on the serving line.
        </p>
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

export default Chipotle;
