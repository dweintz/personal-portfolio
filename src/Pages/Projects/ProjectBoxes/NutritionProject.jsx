import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import project1Img1 from "../../../assets/nutrition/YOLO.png";
import handObject from "../../../assets/nutrition/hand_object.png";
import research_talk from "../../../assets/nutrition/talk.pdf";
import demogif from "../../../assets/nutrition/demogif.GIF";
import paper from "../../../assets/nutrition/paper.pdf";

const NutritionProject = () => {
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
    "Verbal Communication",
  ];

  const attachments = [
    { name: "Research Talk", url: research_talk },
    { name: "Semester 1 Paper", url: paper },
    { name: "Cookware/Testing Dataset", url: "https://hd-epic.github.io/" },
    { name: "Ingredient Dataset", url: "https://lorenz.ecn.purdue.edu/~vfn/" },
  ];

  const images = [
    {
      src: project1Img1,
      caption: "System Diagram:",
      alt: "YOLO Detection",
    },
    {
      src: demogif,
      caption: "System Results on test video:",
      alt: "Hand Object Detection",
    },
  ];

  const description = md`
    As part of my senior design project on the Image Processing and Analysis
    with Applications (IPAA) team, we designed a system to estimate nutritional
    changes during the cooking process through video data. The system combines
    several components:

    - Hand detection using MediaPipe hands and preparation tool detection using
      YOLO (You only look once) to identify candidate regions for food
      ingredients.
    - Ingredient detection using a YOLO model trained on ingredient images of
      various categories.
    - Filtering ingredient detections using thresholding techniques based on
      confidence and detection frequency.
    - Database mapping between detected object classes and the Food and
      Nutrient Database for Dietary Studies (FNDDS).
    - Recipe reconstruction based on ingredient addition sequence and extracted
      nutrition information.

    We have successfully implemented all components listed above and are
    working to improve performance in ingredient detection and calorie
    estimation. Currently, we are working on ways to better estimate the
    quantity of food present in each detection.

    During the second semester, we plan to extend the project to identify
    cooking methods and develop a front-end interface for real-time nutrition
    tracking and visualization.

    We presented our project at the Fall 2025 Purdue Undergraduate Research
    Expo via a research talk. Check out our PowerPoint slides from the talk in
    the resources below.
  `;

  return (
    <ProjectBox
      title="Nutrition Change Estimation From Video"
      role="Purdue Vertically Integrated Projects - Image Processing Team"
      logo=""
      location="Purdue University"
      duration="Aug 2025 – Dec 2025"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="right"
    />
  );
};

export default NutritionProject;
