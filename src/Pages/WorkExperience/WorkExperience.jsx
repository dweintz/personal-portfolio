import './WorkExperience.css';
import GEManufacturing from './GEManufacturing/GEManufacturing';
import GEInspection from './GEInspection/GEInspection';
import Costco from './Costco/Costco'
import Chipotle from './Chipotle/Chipotle'


const WorkExperience = () => {
  return (
    <div className="work-page">
      <div className="work-container">
        <GEManufacturing/>
        <GEInspection/>
        <Costco/>
        <Chipotle/>
      </div>
    </div>
  );
};

export default WorkExperience;
