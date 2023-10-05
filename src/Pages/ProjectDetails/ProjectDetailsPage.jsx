import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { API_URL } from "../../config/config.index";
import "./ProjectDetailsPage.scss";

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
      <div className="app__projectDetails-container">
        <h2>{project.title}</h2>
        <p>{project.type}</p>
        <div className="app__projectDetails-stack">
          {project.technologies.map((technology, index) => (
            <img
              className="app__projectDetails-stack-img"
              key={index}
              src={technology}
              alt={`Tech ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Link to={project.link} target="blank">
        <div className="app__projectDetails-project-container">
          <div className="app__projectDetails-project-info">
            <div className="app_projectDetails-project-info-left">
              <p>{project.description}</p>
              {/* <h5>Link to the app: {project.link}</h5> */}
            </div>
            <div className="app__projectDetails-project-info-right">
              <img src={project.image} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectDetailsPage;
