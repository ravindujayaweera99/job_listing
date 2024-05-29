import "./ViewAllJobs.css";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <div className="viewall">
      <Link to="/jobs">
        <button>View All Jobs</button>
      </Link>
    </div>
  );
};

export default ViewAllJobs;
