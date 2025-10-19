import '../Projects.css';
import project1Img1 from '../../../assets/YOLO.png';
import handObject from '../../../assets/hand_object.png';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const NutritionProject = () => {
  const skills = [
        'Python', 'Image Processing', 'Computer Vision',
        'Convolutional Neural Networks', 'YOLO', 'MediaPipe']

  const images = []
  const attachments = [
        { name: 'Dataset', url: 'https://hd-epic.github.io/'},
      ]

  return (
        <div className={"project-box slide-box slide-right"}>
            <h2 className="project-title">
                Nutrition Change Estimation From Video
            </h2>
            <h3 className="work-role">
                Purdue Vertically Integrated Projects - Image Processing Team
            </h3>
            <br></br>
            <p className="project-location">
                <FaMapMarkerAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
                Purdue University
            </p>
            <p className="project-duration">
                <FaCalendarAlt style={{ marginRight: '8px', color: '#a3c9ff' }} />
                Aug 2025 – Present
            </p>
            <div className="work-desc">
                <p><br></br>
                    As part of my senior design project on the Image Processing 
                    and Analysis with Applications (IPAA) team, we are working 
                    to design a system to estimate nutritional changes during 
                    the cooking process through video data. The system combines 
                    several components:
                </p>
                <p><br></br>
                    <ul>
                        <li>
                            Hand-object interaction detection for detecting 
                            which ingredients a person interacts with.
                        </li>
                        <li>
                            An ingredient detection model based on the 
                            YOLO (You only look once) framework to identify 
                            ingredients a person interacts with.
                        </li>
                        <li>
                            Database mapping between detected object 
                            classes and the Food and Nutrient Database for 
                            Dietary Studies (FNDDS).
                        </li>
                    </ul>
                </p>
                <br></br>
                <p>
                    We have successfully implemented hand-object interaction 
                    detection with ~75% accuracy and are working to improve 
                    results. We are also in the process of training and 
                    testing a YOLO based model for ingredient detection.
                </p>
                <br></br>
                <p>
                    Once the core system is complete, we plan to extend
                    the project to reconstruct recipe sequences, identify
                    cooking methods, and develop a front-end interface for 
                    real-time nutrition tracking and visualization.
                </p>
            </div>
            <div className="skills-container">
                {skills.map((skill, l) => (
                <span key={l} className="skill-pill">{skill}</span>
                ))}
            </div>

            <div className="project-images">
                {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Project ${i} Image ${idx}`}
                    className="clickable-image"
                    onClick={() => {
                    setSelectedImage(img);
                    setIsLightboxOpen(true);
                    }}
                />
                ))}
            </div>
            <div className="project-links">
                {attachments && attachments.map((att, idx) => (
                <a
                    key={idx}
                    href={att.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {att.name}
                </a>
                ))}
            </div>
            <div className="full-images">
                <p className='work-desc'>
                    Results of YOLO Object Detection:
                </p>
                <img src={project1Img1}></img>
                <p className='work-desc'>
                    Results of hand-object interaction Detection:
                </p>
                <img src={handObject}></img>
            </div>

        </div>
    );
};

export default NutritionProject;
