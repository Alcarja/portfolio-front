import "./Nav.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/">
            <h1>J.A.</h1>
          </Link>
        </div>

        {/* MENU FOR DESKTOP */}
        <ul className="app__navbar-links">
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

        {/* MENU FOR MOBILE */}
        <div className="app__navbar-mobile">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
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
            </motion.div>
          )}
        </div>
      </nav>

      {/* <nav>
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
      </nav> */}
    </>
  );
};

export default Nav;
