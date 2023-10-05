import Data from "./Data";
import "./Home.scss";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <section className="app__home-section">
        <div className="app__home-content">
          <Social />

          <div className="app__home-img"></div>

          <Data />
        </div>
      </section>
    </>
  );
};

export default Home;
