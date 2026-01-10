import "./Home.css";
import mePic from "../../assets/me_no_background.png";

const Home = () => {
  return (
    <main className="home-box">
      <div className="home-box-left">
        <img src={mePic} alt="My Professional Headshot" />
      </div>

      <article className="home-box-right">
        <h2>Hello!</h2>
        <p>
          I’m Donny, a Computer Engineering senior at Purdue University
          specializing in artificial intelligence and machine learning. I'll be
          graduating in May 2026 and I’m actively seeking software engineering
          roles. My primary focus is in computer vision, but I'm open to a
          variety of software engineering opportunities across systems and
          applications.
        </p>
        <p>
          I built this website using React as a way to explore front-end
          development. It’s still a work in progress, and I plan on adding more
          content and features soon. In the meantime, feel free to browse
          through the site to learn more about my experience, projects, and
          interests.
        </p>
      </article>
    </main>
  );
};

export default Home;
