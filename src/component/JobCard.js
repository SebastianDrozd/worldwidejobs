import React from "react";
import "../css/JobCard.css";
const JobCard = ({job,handleCurrentJob}) => {
  return (
    <div onClick={() => handleCurrentJob(job.job_id)} class="job-card">
      <div class="job-card-header">
        <h2 class="job-card-title">{job.job_title}</h2>
        
        <p class="job-card-company">{job.name}</p>
      </div>
      <p class="job-card-date">Posted 2 days ago</p>
      <div class="job-card-body">
        <p class="job-card-location">
          <i class="fas fa-map-marker-alt"></i> New York, NY
        </p>
        <ul class="job-card-details">
          <li>5+ years of experience in front-end development</li>
          <li>Proficient in React and Redux</li>
          <li>
            Experience with CSS frameworks such as Bootstrap or Materialize
          </li>
          <li>Excellent communication and problem-solving skills</li>
        </ul>
      </div>
      <div class="job-card-footer">
        
       
      </div>
    </div>
  );
};

export default JobCard;
