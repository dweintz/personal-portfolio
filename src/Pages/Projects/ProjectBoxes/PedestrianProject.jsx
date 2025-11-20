import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import certificate from "../../../assets/pedestrian/OUR_Certificates.pdf";
import final_presentation from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Presentation.pdf";
import final_report from "../../../assets/pedestrian/Pedestrian_Detection_Accident_Avoidance_F24_Final_Report-compressed.pdf";
import poster from "../../../assets/pedestrian/Research_Poster.pdf";
import pedestrian1 from "../../../assets/pedestrian/pedestrian1.png";

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

  const images = [
    {
      src: pedestrian1,
      caption:
        "Results of pedestrian detection and crash avoidance algorithm:",
      alt: "Results of pedestrian detection and crash avoidance algorithm",
    },
  ];

  const description = md`
    As part of the Image Processing and Analysis with Applications (IPAA) team,
    I worked with a team to develop a pedestrian detector model for crash
    avoidance. We utilized object detection and classification techniques such
    as Histograms of Oriented Gradients (HOG) and Support Vector Machines
    (SVM). To filter results, we employed post-processing techniques like
    hard-negative mining, non-maximum suppression, and thresholding.

    We paired the pedestrian detector with an algorithm to find the optimal
    path for an autonomous vehicle in near-collision scenarios and presented
    our results at the Fall 2024 Purdue Undergraduate Research Expo.

    Browse the links and images below to learn more about the project.
  `;

  return (
    <ProjectBox
      title="Pedestrian Detection for Crash Avoidance"
      role="Purdue Vertically Integrated Projects - Image Processing Team"
      logo=""
      location="Purdue University"
      duration="Aug 2024 – Dec 2024"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="left"
    />
  );
};

export default PedestrianProject;
