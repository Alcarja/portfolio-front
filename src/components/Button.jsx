import { Link } from "react-router-dom";

const Button = () => {
  const recipientEmail = "jaime.alcarazc@gmail.com";
  return (
    <>
      <button className="button">
        <Link to={`mailto:${recipientEmail}`}>Contact Me</Link>
      </button>
    </>
  );
};

export default Button;
