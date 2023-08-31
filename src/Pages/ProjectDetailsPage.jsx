import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);

  const fetchOneProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/projects/${projectId}`
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

  return (
    <>
      <div className="project-title">
        <h2>{project.title}</h2>
        <div className="flex-container-3">
          <HiMiniCodeBracket size={43} color={"black"} />
          <p>{project.type}</p>
        </div>
      </div>

      <div className="project-description">
        <div className="project-description-left">
          <p>{project.description}</p>
          <h5>Link to the app: {project.link}</h5>
          <h5>Technologies used:</h5>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>
                <p>{technology}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="project-description-right">
          <img src={project.image} className="image" />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
