import React from "react";
import "../../css/createJobPostForm/createJobPostingPage1.css";
const CJPostForm1 = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="cjpf1-header">
        <h4>Job Details</h4>
      </div>
      <input
        onChange={(e) => {
          setFormData({ ...formData, jobTitle: e.target.value });
        }}
        type="text"
        name="jobTitle"
        placeholder="Job Title"
      />
      <textarea rows={100}
        onChange={(e) => {
          setFormData({ ...formData, jobDescription: e.target.value });
        }}
        name="jobDescription"
        placeholder="Enter a short summary of your job"
      />
    </div>
  );
};

export default CJPostForm1;
