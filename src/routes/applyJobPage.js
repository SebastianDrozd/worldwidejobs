import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "../css/applyJobPage.css";
import { useSubmitJobApplicationMutation } from "../redux/jobApplication";
const ApplyJobPage = () => {
  const location = useLocation();
  const [submitJobApplication, { isLoading, error }] =
    useSubmitJobApplicationMutation();
  console.log("this is the location", location.state);
  const userId = useSelector((state) => state.auth.user);
  const [showToast, setShowToast] = useState(false);

  const handleApply = () => {
    let job = location.state.job;
    const application = {
      job_post_id: job.job_id,
      user_id: userId,
      business_id: job.job_business_id,
    };

    try {
      const response = submitJobApplication(application);
      setShowToast(true);
    } catch (err) {}
  };

  return (
    <>
      {showToast && (
        <div class="toast-content">
          <div class="toast-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="toast-message">Job application created!</div>
          <div class="toast-line"></div>
        </div>
      )}
      <div class="apply-page">
        <div class="apply-form">
          <h2>Confirm your information</h2>
          <div class="form-row">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value="John Doe"
              disabled
            />
          </div>
          <div class="form-row">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value="john.doe@example.com"
              disabled
            />
          </div>
          <div class="form-row">
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value="(123) 456-7890"
              disabled
            />
          </div>
          <hr />
          <h2>Upload your resume</h2>
          <div class="form-row">
            <input type="file" id="resume" name="resume" />
            <label for="resume" class="upload-label">
              Choose file
            </label>
          </div>
          <button onClick={handleApply} class="submit-btn">
            Submit application
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyJobPage;
