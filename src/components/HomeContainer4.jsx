import { Link } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";

const HomeContainer4 = ({ projects }) => {
  return (
    <>
      <div className="home-container-4">
        <section>
          <h2 className="home-h2-1">Previous</h2>
          <h2 className="home-h2-2">Projects</h2>
        </section>

        <div className="project-cards">
          {projects.map((oneProject) => {
            return (
              <Link to={`projects/${oneProject._id}`} key={oneProject._id}>
                <div className="individual-project">
                  <div className="left">
                    <h2>{oneProject.title}</h2>
                    <div className="flex-container-2">
                      <HiMiniCodeBracket size={35} color={"black"} />
                      <h3>{oneProject.type}</h3>
                    </div>
                    <p>{oneProject.description}</p>
                    <ul>
                      <div className="technologies">
                        {oneProject.technologies.map((technology, index) => (
                          <li key={index}>
                            <p>{technology}</p>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                  <div className="right">
                    <img src={oneProject.image} />
                  </div>
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
