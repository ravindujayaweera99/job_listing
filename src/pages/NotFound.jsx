import { Link } from "react-router-dom";
import "./NotFound.css";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <FaExclamationTriangle className="exclamationIcon" />
      <h1>This page Does not Exist 🫤</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
