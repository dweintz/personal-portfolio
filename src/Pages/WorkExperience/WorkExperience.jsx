import GEManufacturing from "./Experiences/GEManufacturing";
import GEInspection from "./Experiences/GEInspection";
import Costco from "./Experiences/Costco";
import Chipotle from "./Experiences/Chipotle";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const WorkExperience = () => {
  return (
    <div className="content-page">
      <div className="content-container">
        <div className="projects-page">
          <aside className="projects-toc">
            <h3>Contents</h3>
            <ul>
              <li>
                <button onClick={() => scrollTo("ge_manufacturing")}>
                  GE Manufacturing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("ge_inspection")}>
                  GE Inspection
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("costco")}>Costco</button>
              </li>
              <li>
                <button onClick={() => scrollTo("chipotle")}>Chipotle</button>
              </li>
            </ul>
          </aside>

          <div className="projects-content">
            <section id="ge_manufacturing">
              <GEManufacturing />
            </section>

            <section id="ge_inspection">
              <GEInspection />
            </section>

            <section id="costco">
              <Costco />
            </section>

            <section id="chipotle">
              <Chipotle />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
