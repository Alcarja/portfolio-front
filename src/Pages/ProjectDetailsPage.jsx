import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { API_URL } from "../config/config.index";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  const fetchOneProject = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/projects/${projectId}`
        // `http://localhost:5005/api/projects/${projectId}`
      );
      if (response.status === 200) {
        const parsedProject = await response.data;
        setProject(parsedProject);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneProject();
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="project-title-container">
        <h2>{project.title}</h2>
        <div className="flex-container-title">
          <HiMiniCodeBracket size={37} color={"black"} />
          <p>{project.type}</p>
        </div>
      </div>

      <Link to={project.link} target="blank">
        <div className="project-container">
          <div className="project-info">
            <div className="project-info-left">
              <p>{project.description}</p>
              {/* <h5>Link to the app: {project.link}</h5> */}
              <div className="project-stack">
                {project.technologies.map((technology, index) => (
                  <img key={index} src={technology} alt={`Tech ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="project-info-right">
              <img src={project.image} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectDetailsPage;
