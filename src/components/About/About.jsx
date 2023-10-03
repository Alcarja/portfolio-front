import "./About.scss";
import { motion } from "framer-motion";

const abouts = [
  {
    title: "Frontend Development",
    description: "Frontend development using React and SCSS",
    imgUrl: "/public/images/about01.png",
  },
  {
    title: "Backend Development",
    description: "Backend development using Express, Node and MongoDB",
    imgUrl: "/public/images/about02.png",
  },
  {
    title: "UX / UI",
    description: "Responsive and entracing designs",
    imgUrl: "/public/images/about03.png",
  },
  {
    title: "Rest API",
    description: "Use of Rest APIs to develop (Axios and Fetch)",
    imgUrl: "/public/images/about04.png",
  },
];

const About = () => {
  //   const [abouts, setAbouts] = useState([]);

  return (
    <>
      <div className="app__about">
        <h2 className="head-text">
          I know that <span>Good Dev</span> <br /> means{" "}
          <span>Good Business</span>
        </h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt="about-title" />
              <h3 style={{ marginTop: 20 }}>{about.title}</h3>
              <p style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
