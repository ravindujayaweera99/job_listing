import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobPage.css";
import {} from "react-icons";
import Spinner from "../components/Spinner";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are You Sure you want to delete this Listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success("Job Deleted Successfully 🤟🏻");

    navigate("/jobs");
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error Fetching Data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="job-content">
      <Link to="/jobs" id="back">
        <FaArrowLeft /> Back to All Jobs
      </Link>
      <div className="top">
        <h1>{job.title}</h1>
        <p id="job-type">{job.type}</p>
        <p id="job-location">
          <FaLocationArrow className="location-arrow" />
          {job.location}
        </p>
      </div>
      <div className="bottom">
        <div className="left">
          <h4>Job Description</h4>
          <p>{job.description}</p>
        </div>
        <div className="right">
          <h4>Company Description</h4>
          <p>
            <strong id="company-name">{job.company.name}</strong>
          </p>
          <p>{job.company.description}</p>
          <h6 id="company-email">
            Email: <p>{job.company.contactEmail}</p>
          </h6>
          <h6 id="company-phone">
            Phone: <p>{job.company.contactPhone}</p>
          </h6>
        </div>
        <div className="buttons">
          <Link to={`/edit-job/${job.id}`} id="edit">
            Edit Job
          </Link>
          <button
            id="delete"
            onClick={() => {
              onDeleteClick(job.id);
            }}
          >
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
