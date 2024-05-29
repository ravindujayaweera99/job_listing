import "./LoginSection.css";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <div className="logins">
      <div className="button-container">
        <div className="dev">
          <h1>For Developers</h1>
          <p>Start Searching your Job</p>
          <Link to="/jobs">
            <button>Browse Jobs</button>
          </Link>
        </div>
        <div className="employee">
          <h1>For Employers</h1>
          <p>Hire Perfect Candidate for your Company</p>
          <Link to="/add-job">
            <button>Add Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
