import md from "dedent";
import ProjectBox from "../../../Components/ProjectBox/ProjectBox";
import ECE49595CV_Term_Project_Presentation from "../../../assets/fruit_ninja/ECE49595CV_Term_Project_Presentation.pdf";
import gameplay from "../../../assets/fruit_ninja/gameplay.gif";

const FruitNinjaProject = () => {
  const skills = [
    "Computer Vision",
    "Python",
    "Multilayer Perceptron",
    "PyTorch",
    "Gesture Recognition",
    "PyGame",
    "MediaPipe",
    "Game logic",
    "Dataset Creation",
    "Event Handling",
  ];

  const attachments = [
    {
      name: "Source Code (GitHub)",
      url: "https://github.com/dweintz/49595CV-term-project",
    },
    {
      name: "Presentation",
      url: ECE49595CV_Term_Project_Presentation,
    },
  ];

  const images = [
    {
      src: gameplay,
      caption: "Gameplay demo:",
      alt: "Gameplay demo",
    },
  ];

  const description = md`
    As part of a team, I developed an interactive Fruit Ninja game that uses
    real-time computer vision and machine learning to enable gesture-based
    gameplay through a live camera feed. The system tracks user hand movements,
    recognizes gestures, and maps them to game controls, allowing players to
    interact with virtual objects using natural hand motions. The project
    emphasizes low latency performance, accurate gesture recognition, and
    responsive visual feedback.

    Key components and contributions:

    - Hand Detection and Tracking: Used MediaPipe Hands to detect and track
      21-point hand landmarks in real time from webcam input.
    - Gesture Recognition: Collected and labeled a custom 1000 image gesture
      dataset and trained a multilayer perceptron to classify hand gestures
      based on landmark features.
    - Game Controls: Mapped recognized gestures to game actions such as pause,
      restart, and quit.
    - Collision Detection: Implemented real-time collision detection between
      hand trajectories and virtual fruit objects to determine successful
      slices.
    - Game Logic and Feedback: Designed state-based game logic with scoring,
      timing, and visual feedback to create an engaging and responsive user
      experience.
  `;

  return (
    <ProjectBox
      title="3D Fruit Ninja"
      role="ECE 49595CV Term Project"
      logo=""
      location="Purdue University"
      duration="Sep 2025 – Dec 2025"
      description={description}
      skills={skills}
      attachments={attachments}
      images={images}
      slideDirection="right"
    />
  );
};

export default FruitNinjaProject;
