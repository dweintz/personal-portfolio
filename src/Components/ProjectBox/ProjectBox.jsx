import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Simple markdown parser
const parseMarkdown = (markdown) => {
  if (!markdown || typeof markdown !== "string") return null;

  const lines = markdown.trim().split("\n");
  const elements = [];
  let currentParagraph = [];
  let listItems = [];
  let inList = false;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(<p key={elements.length}>{currentParagraph.join(" ")}</p>);
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length}>
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // Empty line
    if (trimmedLine === "") {
      flushParagraph();
      flushList();
      if (elements.length > 0) {
        elements.push(<br key={`br-${elements.length}`} />);
      }
      return;
    }

    // List item
    if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmedLine.substring(2));
      return;
    }

    // Continuation of a wrapped list item (e.g., lines starting with two spaces)
    if (inList && line.startsWith("  ")) {
      listItems[listItems.length - 1] += " " + trimmedLine;
      return;
    }

    // Regular text
    if (inList) {
      flushList();
    }
    currentParagraph.push(trimmedLine);
  });

  // Flush any remaining content
  flushParagraph();
  flushList();

  return <>{elements}</>;
};

const ProjectBox = ({
  title,
  role,
  logo,
  location,
  duration,
  description,
  skills,
  attachments,
  images,
  slideDirection = "left",
}) => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className={`project-box`}>
        <div className="project-header">
          <h2 className="project-title">{title}</h2>
          {logo && <img src={logo} alt="Logo" className="project-logo" />}
        </div>
        <h3 className="project-role">{role}</h3>
        <br />

        <p className="project-location">
          <FaMapMarkerAlt className="icon-location" />
          {location}
        </p>
        <p className="project-duration">
          <FaCalendarAlt className="icon-calendar" />
          {duration}
        </p>
        <br />

        <div className="project-desc">
          {typeof description === "string" ? (
            parseMarkdown(description)
          ) : typeof description === "object" && !description.type ? (
            <>
              {description.intro && <p>{description.intro}</p>}
              {description.components && (
                <ul>
                  {description.components.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {description.progress && (
                <>
                  <br />
                  <p>{description.progress}</p>
                </>
              )}
              {description.future && (
                <>
                  <br />
                  <p>{description.future}</p>
                </>
              )}
              {description.recent && (
                <>
                  <br />
                  <p>{description.recent}</p>
                </>
              )}
            </>
          ) : (
            description
          )}
          <br />
          <p>Key Skills:</p>
          <hr className="section-divider" />
        </div>

        <div className="skills-container">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>

        {attachments && attachments.length > 0 && (
          <>
            <div className="project-desc">
              <br />
              <p>Project Resources:</p>
              <hr className="section-divider" />
            </div>

            <div className="project-links">
              {attachments.map((att, idx) => (
                <a key={idx} href={att.url} target="_blank" rel="noreferrer">
                  {/* Add the icon here */}
                  <span>{att.name}</span>
                  <FaExternalLinkAlt
                    style={{ marginLeft: "8px", fontSize: "0.85em" }}
                  />
                </a>
              ))}
            </div>
          </>
        )}
        <br />
        {images && images.length > 0 && (
          <div className="project-images">
            {images.map((image, idx) => (
              <div key={idx}>
                <p className="project-desc">{image.caption}</p>
                <hr className="section-divider" />
                <img
                  src={image.src}
                  onClick={() => openModal(image.src)}
                  alt={image.alt || image.caption}
                />
              </div>
            ))}
          </div>
        )}
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

export default ProjectBox;
