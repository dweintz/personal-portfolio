import "./AboutBox.css";
import mePic from "../../../assets/me_no_background.png";

const AboutBox = () => {
  return (
    <div className={`about-box`}>
      <div className="about-left">
        <img src={mePic} alt="Me" />
      </div>
      <div className="about-right">
        <h2>Hello!</h2>
        <p>
          I’m Donny, a Computer Engineering Student at Purdue University,
          concentrating in AI and machine learning. I’ll be graduating in May
          2026 and am actively seeking opportunities in software and computer
          engineering. My primary focus is computer vision, though I’m also
          passionate about software systems and application development.
        </p>
        <p>
          <br></br>I built this website using React as a way to explore
          front-end development and UI/UX design. It’s still a work in
          progress, and I plan on adding more content and features soon. In the
          meantime, feel free to browse through the site to learn more about my
          experience, projects, and interests.
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
