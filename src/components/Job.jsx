import "./Job.css";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job, isHome }) => {

  const jobLink = isHome ? `/jobs/${job.id}` : `/jobs/${job.id}`;

  return (
    <div className="job">
      <h1 id="job-title">{job.title}</h1>
      <div className="location-type">
        <p id="job-location">
          <FaMapMarker className="map-icon" />
          {job.location}
        </p>
        <p id="job-type">{job.type}</p>
      </div>
      <p id="job-description">{job.description}</p>
      <h2 id="job-salary">{job.salary}</h2>
      <Link to={jobLink}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default Job;
