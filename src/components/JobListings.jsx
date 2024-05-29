import "./JobListings.css";
import { useEffect, useState } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobListings = ({ isHome=true, title = "Popular Jobs" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching Data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <div className="job-listings">
      <h1 id="listing-title">{title}</h1>
      <div className="jobs-container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {jobs.map((job) => {
              return <Job key={job.id} job={job} isHome={isHome} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default JobListings;
