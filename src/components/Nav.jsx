import { Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/">
            <h1>Jaime Alcaraz</h1>
          </Link>

          <ul className="links">
            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/jaime-alcaraz-castillo/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>

            <li>
              <Button />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
