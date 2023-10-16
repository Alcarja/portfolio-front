import { CiMail } from "react-icons/ci";

const Data = () => {
  return (
    <>
      <div className="app__home-data">
        <h1 className="app__home-title">Jaime Alcaraz</h1>
        <h3 className="app__home-subtitle">Web Developer</h3>
        <p className="app__home-description">
          I`m a creative designer based in Madrid, very dedicated and passionate
          about my work
        </p>

        <button className="app__home-button">
          <a href="mailto:jaime.alcarazc@gmail.com">Say Hello</a>
          <CiMail />
        </button>
      </div>
    </>
  );
};

export default Data;
