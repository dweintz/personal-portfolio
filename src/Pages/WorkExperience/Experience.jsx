import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { parseMarkdown } from "../../utils/markdownParser.jsx";
import { workHistory } from "../../data/work";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page-wrapper">
      <div className="experience-container">
        {workHistory.map((job) => (
          <div key={job.id} className="experience-entry-grid">
            <div className="layout-mobile-only">
              <header className="mobile-header">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="mobile-logo"
                />
                <p className="mobile-company">
                  <strong>{job.company}</strong>
                </p>
              </header>

              <div className="mobile-meta">
                <div className="mobile-meta-item">
                  <FaMapMarkerAlt /> {job.location}
                </div>
                <div className="mobile-meta-item">
                  <FaCalendarAlt /> {job.duration}
                </div>
              </div>

              <h2 className="mobile-role">{job.role}</h2>

              <div className="mobile-body">
                {parseMarkdown(job.description)}
              </div>

              <h4>Skills</h4>
              <div className="mobile-skills">
                {job.skills.map((skill) => (
                  <span key={skill} className="detail-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="layout-desktop-only">
              <main className="experience-main-content">
                <h2 className="experience-role-title">{job.role}</h2>
                <div className="case-study-body">
                  {parseMarkdown(job.description)}
                </div>
              </main>

              <aside className="experience-sidebar-info">
                <div className="sidebar-group">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="experience-company-logo"
                  />
                  <h4 className="company-label">Company</h4>
                  <p className="meta-item">{job.company}</p>
                  <div className="meta">
                    <p className="date-location">
                      <FaMapMarkerAlt /> {job.location}
                    </p>
                    <p className="date-location">
                      <FaCalendarAlt /> {job.duration}
                    </p>
                  </div>
                </div>

                <div className="sidebar-group">
                  <h4>Skills</h4>
                  <div className="sidebar-skills">
                    {job.skills.map((skill) => (
                      <span key={skill} className="detail-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
