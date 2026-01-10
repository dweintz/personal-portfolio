import md from "dedent";

// Nutrition Estimation project resources
import NutritionEstimationDemo from "../assets/NutritionEstimation/NutritionEstimationDemo.gif"
import NutritionEstimationDiagram from "../assets/NutritionEstimation/NutritionEstimationDiagram.png"
import NutritionEstimationPaper from "../assets/NutritionEstimation/NutritionEstimationPaper.pdf"
import NutritionEstimationTalk from "../assets/NutritionEstimation/NutritionEstimationTalk.pdf"

// Model Registry project resources
import ModelRegistryDashboard from "../assets/ModelRegistry/ModelRegistryDashboard.png"
import ModelRegistryArtifactDetails from "../assets/ModelRegistry/ModelRegistryArtifactDetails.png"

// 3D Fruit Ninja project resources
import FruitNinjaGameplay from "../assets/FruitNinja/FruitNinjaGameplay.gif"
import FruitNinjaPresentation from "../assets/FruitNinja/FruitNinjaPresentation.pdf"

// Website project resources
import PersonalPortfolioHomepage from "../assets/PersonalPortfolio/PersonalPortfolioHomepage.png"

// Pedestrian Detection project resources
import PedestrianDetectionCertificate from "../assets/PedestrianDetection/PedestrianDetectionCertificate.pdf"
import PedestrianDetectionImage from "../assets/PedestrianDetection/PedestrianDetectionImage.png"
import PedestrianDetectionPaper from "../assets/PedestrianDetection/PedestrianDetectionPaper.pdf"
import PedestrianDetectionPoster from "../assets/PedestrianDetection/PedestrianDetectionPoster.pdf"
import PedestrianDetectionPresentation from "../assets/PedestrianDetection/PedestrianDetectionPresentation.pdf"

export const projectData = {
  nutrition: {
    title: "Nutrition Estimation From Video",
    role: "Purdue Vertically Integrated Projects — Image Processing Team",
    location: "Purdue University",
    duration: "Aug 2025 – Dec 2025",
    skills: [
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
    ],
    attachments: [
      { name: "Research Talk", url: NutritionEstimationTalk },
      { name: "Semester 1 Paper", url: NutritionEstimationPaper },
      { name: "Cookware/Testing Dataset", url: "https://hd-epic.github.io/" },
      {
        name: "Ingredient Dataset",
        url: "https://lorenz.ecn.purdue.edu/~vfn/",
      },
    ],
    thumbnail: NutritionEstimationDemo,
    shortDesc:
      "A computer vision system for estimating recipe nutrition from egocentric cooking videos",
    images: [
      { src: NutritionEstimationDiagram, caption: "System Diagram", alt: "YOLO Detection" },
      {
        src: NutritionEstimationDemo,
        caption: "System Results on test video",
        alt: "Hand Object Detection",
      },
    ],
    description: md`
      As part of my senior design project on the Image Processing and Analysis
      with Applications (IPAA) team, we designed a system to estimate
      nutritional changes during the cooking process through video data. The
      system combines several components:

      - Hand detection using MediaPipe hands and preparation tool detection
        using YOLO to identify candidate regions for food ingredients.
        
      - Ingredient detection using a YOLO model trained on ingredient images of
        various categories.

      - Filtering ingredient detections using thresholding techniques based on
        confidence and detection frequency.

      - Database mapping between detected object classes and the Food and
        Nutrient Database for Dietary Studies (FNDDS).

      - Recipe reconstruction based on ingredient addition sequence and
        extracted nutrition information.

      We have successfully implemented all components listed above and are
      working to improve performance in ingredient detection and calorie
      estimation. Currently, we are working on ways to better estimate the
      quantity of food present in each detection.
    `,
  },

  registry: {
    title: "Model Registry Platform",
    role: "ECE 46100 Team Project",
    location: "Purdue University",
    duration: "Aug 2025 - Dec 2025",
    skills: [
      "Python",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "AWS EC2",
      "AWS IAM",
      "Linux Servers",
      "Flask",
      "RESTful API Design",
      "Gunicorn / WGSI",
      "Hugging Face API",
      "JSON",
      "YAML",
      "CI/CD Piplines",
      "GitHub Actions",
      "Cloud Deployment",
      "GitHub Project Boards",
      "Team Collaboration",
      "Code Reviews",
    ],
    attachments: [
      {
        name: "Source Code (GitHub)",
        url: "https://github.com/william-taoo/ECE461-Project-Phase2",
      },
    ],
    thumbnail: ModelRegistryDashboard,
    shortDesc:
      "Full-stack platform for tracking and evaluating machine learning models",
    images: [
      {
        src: ModelRegistryDashboard,
        caption: "Registry dashboard",
        alt: "Registry dashboard",
      },
      {
        src: ModelRegistryArtifactDetails,
        caption: "Sample uploaded artifact",
        alt: "Sample uploaded artifact",
      },
    ],
    description: md`
      As part of a team project, I developed a full-stack Model Registry
      Platform designed to store, track, and evaluate machine learning models,
      particularly Hugging Face models. The system enables users to upload
      files or link existing Hugging Face repositories, automatically extract
      metadata, and evaluate models based on standardized criteria.

      The backend service is built using Python, Flask, and AWS EC2, providing
      RESTful API endpoints for model registration, rating workflows, and audit
      logging. Uploaded models are stored on AWS S3. The platform securely
      manages model metadata, artifacts, and user submissions, while generating
      insights about model quality.

      On the frontend, we implemented an interactive dashboard using React,
      offering real-time model browsing, filtering, and rating.

      This project strengthened my experience with cloud deployment and
      full-stack development, including containerization, API design, and
      automated workflows.
    `,
  },

  fruitninja: {
    title: "3D Fruit Ninja",
    role: "ECE 49595CV Team Project",
    location: "Purdue University",
    duration: "Sep 2025 - Dec 2025",
    skills: [
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
    ],
    attachments: [
      {
        name: "Source Code (GitHub)",
        url: "https://github.com/dweintz/49595CV-term-project",
      },
      {
        name: "Presentation",
        url: FruitNinjaPresentation,
      },
    ],
    thumbnail: FruitNinjaGameplay,
    shortDesc:
      "A 3D interactive game environment utilizing gesture recognition and computer vision",
    images: [
      {
        src: FruitNinjaGameplay,
        caption: "Gameplay demo",
        alt: "Gameplay demo",
      },
    ],
    description: md`
      As part of a team, I developed an interactive Fruit Ninja game that uses
      real-time computer vision and machine learning to enable gesture-based
      gameplay through a live camera feed. The system tracks user hand
      movements, recognizes gestures, and maps them to game controls, allowing
      players to interact with virtual objects using natural hand motions. The
      project emphasizes low latency performance, accurate gesture recognition,
      and responsive visual feedback.

      Key components and contributions:

      - Hand Detection and Tracking: Used MediaPipe Hands to detect and track
        21-point hand landmarks in real time from webcam input.

      - Gesture Recognition: Collected and labeled a custom 1000 image gesture
        dataset and trained a multilayer perceptron to classify hand gestures
        based on landmark features.

      - Game Controls: Mapped recognized gestures to game actions such as
        pause, restart, and quit.

      - Collision Detection: Implemented real-time collision detection between
        hand trajectories and virtual fruit objects to determine successful
        slices.

      - Game Logic and Feedback: Designed state-based game logic with scoring,
        timing, and visual feedback to create an engaging and responsive user
        experience.
    `,
  },

  website: {
    title: "Personal Portfolio",
    role: "Personal Project",
    location: "Purdue University",
    duration: "Sep 2025 - Jan 2026",
    skills: [
      "React",
      "CSS",
      "HTML",
      "GitHub Pages",
      "Front-end Development",
      "UI/UX Principles",
      "Animations",
      "npm / Node.js",
      "Responsive Web Design",
    ],
    attachments: [
      {
        name: "Source Code (GitHub)",
        url: "https://github.com/dweintz/personal-portfolio",
      },
    ],
    thumbnail: PersonalPortfolioHomepage,
    shortDesc:
      "A responsive portfolio built with React to showcase software engineering projects",
    images: [
      {
        src: PersonalPortfolioHomepage,
        caption: "Portfolio Homepage",
        alt: "Portfolio Homepage",
      },
    ],
    description: md`
      Developed and deployed the portfolio website you’re viewing now, built
      entirely from scratch using React, HTML, and CSS.

      Focused on clean, minimalist design principles, usability, and
      accessibility to ensure seamless viewing across desktop, tablet, and
      mobile devices. Integrated modular React components for efficient
      maintainability and scalability. Click the link below to view the source
      code for the site on GitHub.
    `,
  },

  pedestrian: {
    title: "Pedestrian Detection for Crash Avoidance",
    role: "Purdue Vertically Integrated Projects — Image Processing Team",
    location: "Purdue University",
    duration: "Aug 2024 – Dec 2024",
    skills: [
      "Python",
      "Image Processing",
      "Histogram of Oriented Gradients",
      "Support Vector Machines",
    ],
    attachments: [
      { name: "Project Poster", url: PedestrianDetectionPoster },
      { name: "Project Paper", url: PedestrianDetectionPaper },
      { name: "Project Final Presentation", url: PedestrianDetectionPresentation },
      { name: "Conference Certificate", url: PedestrianDetectionCertificate },
    ],
    thumbnail: PedestrianDetectionImage,
    shortDesc:
      "Pedestrian detection system designed to enhance vehicle safety and pedestrian awareness",
    images: [
      {
        src: PedestrianDetectionImage,
        caption:
          "Results of pedestrian detection and crash avoidance algorithm",
        alt: "Results of pedestrian detection and crash avoidance algorithm",
      },
    ],
    description: md`
      As part of the Image Processing and Analysis with Applications (IPAA)
      team, I worked with a team to develop a pedestrian detector model for
      crash avoidance. We utilized object detection and classification
      techniques such as Histograms of Oriented Gradients (HOG) and Support
      Vector Machines (SVM). To filter results, we employed post-processing
      techniques like hard-negative mining, non-maximum suppression, and
      thresholding.

      We paired the pedestrian detector with an algorithm to find the optimal
      path for an autonomous vehicle in near-collision scenarios and presented
      our results at the Fall 2024 Purdue Undergraduate Research Expo.

      Browse the links and images below to learn more about the project.
    `,
  },
};
