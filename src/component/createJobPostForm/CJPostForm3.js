import React, { useRef } from 'react'

const CJPostForm3 = ({ formData, setFormData }) => {
  const jobExperience = useRef();
  const jobEducation = useRef();
  const handleJobExperience = (e) => {
    setFormData({ ...formData, jobExperience: e.target.value })
  }
  const handleJobEducation = (e) => {
    setFormData({ ...formData, jobEducation: e.target.value })
  }
  return (
    <div>
      <h4>Job Experience</h4>
      <label for="cars">Job experience needed:</label>
      <select onChange={handleJobExperience} ref={jobExperience} name="cars" id="cars">
        <option value="0 years">0 years</option>
        <option value="1-2 years">1-2 years</option>
        <option value="2-5 years">2-5 years</option>
        <option value="5+ years">5+ years</option>
      </select>
      <br />
      <br />
      <h4>Job Education</h4>
      <label for="cars">Job education needed:</label>
      <select onChange={handleJobEducation} ref={jobEducation} name="cars" id="cars">
        <option value="No education necessary">No education necessary</option>
        <option value="High School / Secondary School">High School / Secondary School</option>
        <option value="Technical College">Technical College</option>
        <option value="College Degree">College Degree</option>
      </select>
    </div>
  )
}

export default CJPostForm3