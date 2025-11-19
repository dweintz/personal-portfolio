import certificate from "../../../assets/pedestrian/OUR_Certificates.pdf";
import final_presentation from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Presentation.pdf";
import final_report from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Report-compressed.pdf";
import poster from "../../../assets/pedestrian/Research_Poster.pdf";
import pedestrian1 from "../../../assets/pedestrian/pedestrian1.png";
import pedestrian2 from "../../../assets/pedestrian/pedestrian2.png";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const PedestrianProject = () => {
  const skills = [
    "Python",
    "Image Processing",
    "Histogram of Oriented Gradients",
    "Support Vector Machines",
  ];

  const attachments = [
    { name: "Project Poster", url: poster },
    { name: "Project Paper", url: final_report },
    { name: "Project Final Presentation", url: final_presentation },
    { name: "Research Conference Certificate", url: certificate },
  ];

  return (
    <div className={"project-box slide-box"}>
      <h2 className="project-title">
        Pedestrian Detection for Crash Avoidance
      </h2>
      <h3 className="project-role">
        Purdue Vertically Integrated Projects - Image Processing Team
      </h3>
      <br></br>
      <p className="project-location">
        <FaMapMarkerAlt className="icon-location" />
        Purdue University
      </p>
      <p className="project-duration">
        <FaCalendarAlt className="icon-calendar" />
        Aug 2024 – Dec 2024
      </p>
      <div className="project-desc">
        <p>
          As part of the Image Processing and Analysis with Applications (IPAA)
          team, I worked with a team to develop a pedestrian detector model for
          crash avoidance. We utilized object detection and classification
          techniques such as Histograms of Oriented Gradients (HOG) and Support
          Vector Machines (SVM). To filter results, we employed post-processing
          techniques like hard-negative mining, non-maximum suppression, and
          thresholding.
        </p>
        <br></br>
        <p>
          We paired the pedestrian detector with an algorithm to find the
          optimal path for an autonomous vehicle in near-collision scenarios and
          presented our results at the Fall 2024 Purdue Undergraduate Research
          Expo.
        </p>
        <br></br>
        <p>
          Browse the links and images below to learn more about the project.
        </p>
        <br />
        <p>Key Skills:</p>
        <hr className="section-divider" />
      </div>

      <div className="skills-container">
        {skills.map((skill, l) => (
          <span key={l} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>

      <div className="project-desc">
      <br />
        <p>Project Resources:</p>
        <hr className="section-divider" />
      </div>

      <div className="project-links">
        {attachments &&
          attachments.map((att, idx) => (
            <a key={idx} href={att.url} target="_blank" rel="noreferrer">
              {att.name}
            </a>
          ))}
      </div>

      <div className="project-images">
        <p className="project-desc">
          Results of pedestrian detection and crash avoidance algorithm:
        </p>
        <img src={pedestrian1}></img>
      </div>
    </div>
  );
};

export default PedestrianProject;
