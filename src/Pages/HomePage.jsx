import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import HomeContainer1 from "../components/HomeContainer1";
import HomeContainer2 from "../components/HomeContainer2";
import HomeContainer3 from "../components/HomeContainer3";
import HomeContainer4 from "../components/HomeContainer4";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/projects`);
      console.log(response.data);
      const parsedProjects = await response.data;
      setProjects(parsedProjects);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <HomeContainer1 />

      <HomeContainer2 />

      <HomeContainer3 />

      <HomeContainer4 projects={projects} />
    </>
  );
};

export default HomePage;
