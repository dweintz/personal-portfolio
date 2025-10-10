import '../WorkExperience.css';
import geLogo from '../../../assets/ge_logo.png';


const GEInspection = () => {
  const skills = ['Python', 'Image Processing', 'CT Imagining', 
    'Testing', 'Inspection', 'Data Analytics', 
    'Avizo for Industrial Inspection']
  
  return (
        <div className= 'work-box slide-box slide-right'>
        <div className="work-header">
            <h2 className="work-company">
            GE Aerospace
            </h2>
            <img src={geLogo} alt="GE" className="work-logo" />
        </div>
        <h3 className="work-role">
            Inspection Engineering Intern - CT Imaging
        </h3>
        <p className="work-date">
            May 2024 – Aug 2024
        </p>
        <p className="work-location">
            Evendale, Ohio
        </p>
        <p className="work-desc">
            <p>
                In the summer of 2024, I worked as an Inspection 
                Engineering Intern at GE Aerospace. During my rotation, 
                I developed a software tool to automatically evaluate 
                resolution and contrast discrimination in CT images, 
                following the standard CT testing procedure outlined 
                in ASTM E1695.
            </p>
            <br></br>
            <p>
                Key project accomplishments:
                <ul>
                    <li>
                        Successfully measured critical metrics, including 
                        the modulation transfer function (MTF) and contrast 
                        discrimination function (CDF), achieving results 
                        within 5% of known values.
                    </li>
                    <li>
                        Integrated the software with Avizo for Manufacturing 
                        Defect Analysis, performing advanced image processing 
                        operations on CT scans.
                    </li>
                    <li>
                        Prototyped code to analyze CT images without requiring
                        a standardized test volume, increasing flexibility
                        and efficiency.
                    </li>
                </ul>
            </p>
            <br></br>
            <p>
                Learn more about <a href="https://www.geaerospace.com/news/articles/ge-aerospace-inspection-solutions-team-making-waves-enhanced-safety-and-quality" target="_blank" rel="noopener noreferrer">
                    GE Aerospace Inspection Solutions
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

export default GEInspection;
