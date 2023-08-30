import { Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
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
    </>
  );
};

export default Nav;
