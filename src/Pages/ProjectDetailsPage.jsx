import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>
        OneProject: <h2>{project.title}</h2>{" "}
      </h1>
      <img src={project.image} className="image" />
      <h2>{project.description}</h2>
      <h2>{project.technologies}</h2>
    </>
  );
};

export default ProjectDetailsPage;
