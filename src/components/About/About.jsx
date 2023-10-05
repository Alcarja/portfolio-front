import "./About.scss";
import { motion } from "framer-motion";

const abouts = [
  {
    title: "Frontend Development",
    description: "Frontend development using React and SCSS",
    imgUrl: "images/About-FronEnd.jpeg",
  },
  {
    title: "Backend Development",
    description: "Backend development using Express, Node, MongoDB and Sanity",
    imgUrl: "images/about02.png",
  },
  {
    title: "UX / UI",
    description: "Responsive and entracing designs",
    imgUrl: "images/About-UX:UI.jpg",
  },
  {
    title: "Rest API",
    description: "Use of Rest APIs to develop (Axios and Fetch)",
    imgUrl: "images/About-Rest-API.jpg",
  },
];

const About = () => {
  //   const [abouts, setAbouts] = useState([]);

  return (
    <>
      <div className="app__about">
        <h2 className="head-text">
          Making <span>Good Apps</span> <br /> with the
          <span> Best Technology</span>
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
