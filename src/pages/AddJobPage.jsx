import "./AddJobPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success("Job Added Successfully 😍");

    return navigate("/jobs");
  };

  return (
    <div>
      <section>
        <div>
          <div>
            <form onSubmit={submitForm}>
              <h2>Add Your Job</h2>

              <div className="form-inputs">
                <div className="form-right">
                  <h3>Job Details</h3>
                  <div className="form-item">
                    <label for="type">Job Type</label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div className="form-item">
                    <label>Job Listing Name</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="eg. Beautiful Apartment In Miami"
                      required
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-item">
                    <label
                      for="description"
                      class="block text-gray-700 font-bold mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      placeholder="Add any job duties, expectations, requirements, etc"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="form-item">
                    <label for="type">Salary</label>
                    <select
                      id="salary"
                      name="salary"
                      required
                      value={salary}
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                    >
                      <option value="Under $50K">Under $50K</option>
                      <option value="$50K - 60K">$50K - $60K</option>
                      <option value="$60K - 70K">$60K - $70K</option>
                      <option value="$70K - 80K">$70K - $80K</option>
                      <option value="$80K - 90K">$80K - $90K</option>
                      <option value="$90K - 100K">$90K - $100K</option>
                      <option value="$100K - 125K">$100K - $125K</option>
                      <option value="$125K - 150K">$125K - $150K</option>
                      <option value="$150K - 175K">$150K - $175K</option>
                      <option value="$175K - 200K">$175K - $200K</option>
                      <option value="Over $200K">Over $200K</option>
                    </select>
                  </div>

                  <div className="form-item">
                    <label>Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Company Location"
                      required
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-left">
                  <h3>Company Info</h3>

                  <div className="form-item">
                    <label for="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-item">
                    <label for="company_description">Company Description</label>
                    <textarea
                      id="company_description"
                      name="company_description"
                      rows="4"
                      placeholder="What does your company do?"
                      value={companyDescription}
                      onChange={(e) => {
                        setCompanyDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <div className="form-item">
                    <label for="contact_email">Contact Email</label>
                    <input
                      type="email"
                      id="contact_email"
                      name="contact_email"
                      placeholder="Email address for applicants"
                      required
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-item">
                    <label for="contact_phone">Contact Phone</label>
                    <input
                      type="tel"
                      id="contact_phone"
                      name="contact_phone"
                      placeholder="Optional phone for applicants"
                      value={contactPhone}
                      onChange={(e) => {
                        setContactPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-item">
                <button type="submit">Add Job</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddJobPage;
