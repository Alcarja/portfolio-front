import { Link } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";

const HomeContainer4 = ({ projects }) => {
  return (
    <>
      <div className="home-container-4">
        <section className="home-container-4-title">
          <h2 className="">Previous</h2>
          <h2 className="h2-projects">Projects</h2>
        </section>

        <div className="project-cards">
          {projects.map((oneProject) => {
            return (
              <Link to={`projects/${oneProject._id}`} key={oneProject._id}>
                <div className="project-card">
                  <img src={oneProject.image} />
                  <h2>{oneProject.title}</h2>
                  <div className="flex-container-2">
                    <HiMiniCodeBracket size={20} color={"black"} />
                    <h3>{oneProject.type}</h3>
                  </div>
                  <ul>
                    <div className="stack">
                      {oneProject.technologies.map((technology, index) => (
                        <li key={index}>
                          <img src={technology} alt={`Tech ${index + 1}`} />
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeContainer4;
