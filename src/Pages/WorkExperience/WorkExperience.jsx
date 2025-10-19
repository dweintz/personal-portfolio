import GEManufacturing from "./Experiences/GEManufacturing";
import GEInspection from "./Experiences/GEInspection";
import Costco from "./Experiences/Costco";
import Chipotle from "./Experiences/Chipotle";

const WorkExperience = () => {
  return (
    <div className="content-page">
      <div className="content-container">
        <GEManufacturing />
        <GEInspection />
        <Costco />
        <Chipotle />
      </div>
    </div>
  );
};

export default WorkExperience;
