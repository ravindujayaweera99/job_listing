import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import LoginSection from "../components/LoginSection";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <div>
      <Hero subtitle="Find Your Dream Job and Live Your Dream Life" />
      <LoginSection />
      <JobListings />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage