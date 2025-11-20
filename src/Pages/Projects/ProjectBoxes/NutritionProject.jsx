import project1Img1 from "../../../assets/nutrition/YOLO.png";
import handObject from "../../../assets/nutrition/hand_object.png";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import research_talk from "../../../assets/nutrition/talk.pdf"
import { useState } from "react";

const NutritionProject = () => {
  const [modalImage, setModalImage] = useState(null);

  const skills = [
    "Python",
    "Image Processing",
    "PyTorch",
    "Ultralytics",
    "Hugging Face",
    "OpenCV",
    "Linux Servers",
    "CUDA / GPUs",
    "Computer Vision",
    "Convolutional Neural Networks",
    "YOLO",
    "MediaPipe",
    "Oral Presentation",
    "Teamwork",
    "Verbal Communication"
  ];

  const attachments = [
    { name: "Research Talk", url: research_talk },
    { name: "Cookware/Testing Dataset", url: "https://hd-epic.github.io/" }, 
    { name: "Ingredient Dataset", url: "https://lorenz.ecn.purdue.edu/~vfn/" } 
  ];

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
    <div className={"project-box slide-box slide-left"}>
      <div className="project-header">
      <h2 className="project-title">Nutrition Change Estimation From Video</h2>
    </div>
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
        Aug 2025 – Present
      </p>
      <br></br>
      <div className="project-desc">
        <p>
          As part of my senior design project on the Image Processing and
          Analysis with Applications (IPAA) team, we are working to design a
          system to estimate nutritional changes during the cooking process
          through video data. The system combines several components:
        </p>
        <p>
          <br></br>
          <ul>
            <li>
              Hand detection using MediaPipe hands and cookware detection using 
              YOLO (You only look once) to identify candidate regions for food 
              ingredients.
            </li>
            <li>
              Ingredient detection using a YOLO model trained on ingredient images 
              of various categories.
            </li>
            <li>
              Filtering ingredient detections using thresholding techniques based 
              on confidence and detection frequency.
            </li>
            <li>
              Database mapping between detected object classes and the Food and 
              Nutrient Database for Dietary Studies (FNDDS).
            </li>
            <li>
              Recipe reconstruction based on ingredient addition sequence and 
              extracted nutrition information.
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          We have successfully implemented all components listed above and are working
          to improve performance in ingredient detection and calorie estimation. Currently, 
          we are working on ways to better estimate the quantity of food present in each 
          detection. At the present, we can only identify food ingredients and map them to 
          a unit quantity in the FNDDS database.
        </p>
        <br></br>
        <p>
          Once the core system is complete, we plan to extend the project to identify 
          cooking methods and develop a front-end interface for real-time nutrition tracking 
          and visualization.
        </p>
        <br></br>
        <p>
          Recently, we presented our project at the Fall 2025 Purdue Undergraduate Research 
          Expo via a research talk. Check out our PowerPoint slides from the talk in the 
          resources below.
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
          <p className="project-desc">System Diagram:</p>
          <img src={project1Img1} onClick={() => openModal(project1Img1)} alt="YOLO Detection" />
          <p className="project-desc">
            System Results on test video:
          </p>
          <img src={handObject} onClick={() => openModal(handObject)} alt="Hand Object Detection" />
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <span className="image-modal-close" onClick={closeModal}>×</span>
          <img src={modalImage} onClick={(e) => e.stopPropagation()} alt="Enlarged view" />
        </div>
      )}
    </>
  );
};

export default NutritionProject;
