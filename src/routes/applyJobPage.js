import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/applyJobPage.css";
import { useSubmitJobApplicationMutation } from "../redux/jobApplication";
import { useGetUserResumesQuery, useUploadUserResumeMutation } from "../redux/resumes";
import { useRef } from "react";
const ApplyJobPage = () => {
  const location = useLocation();
  const file = useRef();
  const textArrea = useRef();
  const [submitJobApplication] = useSubmitJobApplicationMutation();
  const [uploadUserResume] = useUploadUserResumeMutation();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.user.id);
  const user = useSelector((state) => state.user);
  const [showToast, setShowToast] = useState(false);
  const { data, isLoading } = useGetUserResumesQuery(userId);
  const [activeResume, setActiveResume] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleApply = () => {
    let job = location.state.job;
    const application = {
      job_post_id: job.job_id,
      user_id: userId,
      business_id: job.job_business_id,
      job_application_resume_id: activeResume.resume_id,
      job_application_message : textArrea.current.value
    };

    try {
      const response = submitJobApplication(application);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/uDashboard")
      }, 3000);
    } catch (err) {}
  };

  const handleUploadResume = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("avatar", file.current.files[0]);
    form.append("user_id", userId);
    try {
      const response = await uploadUserResume(form).unwrap();
     
    } catch (error) {
  
    }
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
              value={user.firstName + " " + user.lastName}
              disabled
            />
          </div>
          <div class="form-row">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
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
          <h2>Choose your resume</h2>
          <p>
            Or upload a resume which will be saved to your resume collection.
          </p>

          <form action="" enctype="multipart/form-data">
            <input ref={file} type="file" id="myFile" name="avatar" />
            <input onClick={handleUploadResume} type="submit" />
          </form>

          <br />

          {data &&
            data.map((resume) => (
              <>
                <div
                  onClick={() => {
                    setActiveResume(resume);
                    console.log(resume);
                  }}
                  className="confirm-resume-div"
                >
                  {resume.resume_original_name}
                </div>
              </>
            ))}
          <br/>
            <h2>Write a message to stand out!</h2>
            <br/>
            <div className="text-area-message-div">
              <textarea ref={textArrea} col={30} className="text-area-message" placeholder="Message to employer"></textarea>
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
