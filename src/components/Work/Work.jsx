import { useEffect, useState } from "react";
import { AiFillEye, AiFillSnippets } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Work.scss";
import { API_URL } from "../../config/config.index";
import axios from "axios";
import { Link } from "react-router-dom";

//JavaScript, UI/UX, Web App, ReactJS, MongoDB, Express, All

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/projects`);
      // const response = await axios.get(`http://localhost:5005/api/projects`);
      console.log(response.data);
      const parsedProjects = await response.data;
      setWorks(parsedProjects);
      setFilterWork(parsedProjects);
    } catch (err) {
      console.log(err);
    }
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="app__work">
      <h2 className="app__work-title">
        Previous <span>Projects</span>
      </h2>
      <div className="app__work-filter">
        {[
          "JavaScript",
          "UX/UI",
          "Web App",
          "ReactJS",
          "MongoDB",
          "Express",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img">
              <img src={work.image} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover"
              >
                <a href={work.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <Link to={`projects/${work._id}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillSnippets />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <div className="app__work-content ">
              <h4 className="bold-text">{work.title} </h4>
              <div className="app__work-tag ">
                <p className="p-text">{work.tags[0]}</p>
              </div>
              <ul>
                <div className="app__work-stack">
                  {work.technologies.map((technology, index) => (
                    <li key={index}>
                      <img src={technology} alt={`Tech ${index + 1}`} />
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
