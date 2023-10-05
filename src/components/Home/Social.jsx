import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Social = () => {
  return (
    <>
      <div className="app__home-social">
        <a
          href="https://github.com/Alcarja"
          className="app__home-social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaime-alcaraz-castillo/"
          className="app__home-social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
};

export default Social;
