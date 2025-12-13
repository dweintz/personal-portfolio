import { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./AboutMe.css";

const AboutMe = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="content-page">
        <div className={`about-box2 slide-box`}>
          <div className="images">
            <img
              className="images"
              src="web_collage.png"
              onClick={() => openModal("web_collage.png")}
            />
          </div>
        </div>
        <div className={`about-box2 slide-box slide-right`}>
          <h2>About Me</h2>
          <p>
            Hi, I’m Donny, a Computer Engineering student at Purdue University
            with a passion for software engineering and using technology to
            solve meaningful problems. Much of my work centers on computer
            vision and artificial intelligence, where I focus on building
            systems that help perceive the world around us.
          </p>
          <br></br>
          <p>
            Outside the classroom, I enjoy spending time outdoors. Many of the
            photos above capture some of my favorite trips to destinations
            across the Midwest and beyond. Spending time in nature helps
            balance my passion for technology, as it’s my way of disconnecting,
            recharging, and finding new inspiration.
          </p>
          <br></br>
          <p>
            On campus, I stay active through running, cooking, and
            experimenting with new projects. I’m also a member of Purdue’s
            Electrical and Computer Engineering Student Society, where I am
            part of the External Media Committee. When I’m home, I like to
            unwind by building Legos, a childhood hobby that sparked my early
            interest in engineering and continues to fuel my creativity today.
          </p>
        </div>

        <div className="contact-box slide-box">
          <h1>Contact Information</h1>
          <div className="contact-items">
            <div className="contact-item">
              <FaPhone size={24} />
              <span>(513) 815-2765</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={24} />
              <span>donnyweintz@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaLinkedin size={24} />
              <a
                href="https://linkedin.com/in/donnyweintz"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/donnyweintz
              </a>
            </div>
            <div className="contact-item">
              <FaGithub size={24} />
              <a
                href="https://github.com/dweintz"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/dweintz
              </a>
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <span className="image-modal-close" onClick={closeModal}>
            ×
          </span>
          <img
            src={modalImage}
            onClick={(e) => e.stopPropagation()}
            alt="Enlarged view"
          />
        </div>
      )}
    </>
  );
};

export default AboutMe;
