import React from "react";
import jobsData from '../index.js'



const JobCards = () => {

  return (
    <section className="jobs-section">
      <div className="job-heading">
        <h2>Featured Jobs</h2>
        <p>Find opportunities tailored to your skills and career goals.</p>
      </div>

      <div className="jobs-grid">
        {jobsData.map((job) => (
          <div className="job-card" key={job.id}>
            <span className="job-type">{job.type}</span>

            <h3>{job.title}</h3>
            <h4>{job.company}</h4>

            <div className="job-info">
              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>
            </div>

            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCards;

