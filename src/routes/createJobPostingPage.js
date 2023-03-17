import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CJPostForm1 from '../component/createJobPostForm/CJPostForm1'
import CJPostForm2 from '../component/createJobPostForm/CJPostForm2'
import CJPostForm3 from '../component/createJobPostForm/CJPostForm3'
import CJPostForm4 from '../component/createJobPostForm/CJPostForm4'
import "../css/createJobPostingPage.css"
const CreateJobPostingPage = () => {
    const navigate = useNavigate()
    const id = useSelector(state => state.user.id)
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        jobTitle: "",
        jobDescription: "",
        jobLocation: "",
        jobType: "",
        jobSalary: "",
        jobSkills: "",
        jobEducation: "",
        jobExperience: "",
        job_user_id: id,
      });

      const conditionalComponent = () => {
        switch (page) {
          case 0:
            
            return <CJPostForm1 formData = {formData} setFormData={setFormData} />;
          case 1:
            return <CJPostForm2 formData = {formData} setFormData={setFormData} />;
          case 2:
            return <CJPostForm3 formData = {formData} setFormData={setFormData} />
            case 3:
            return <CJPostForm4 formData = {formData} setFormData={setFormData} />
    
        }
      }
      const handleSubmit = async () => {
        console.log(formData)
        setPage(page + 1);
      }
    return (
        <>
      <div className="createbusinesspage-container">
        <h1>Create a new Job</h1>
        <p>Post your job in a few easy steps!</p>
        <div className='create-business-form'>
          {conditionalComponent()}
          <div>
            {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
            <button onClick={handleSubmit}>
              {page === 0 || page === 1 || page == 2 ? "Next" : "Submit"}
            </button>
          </div>

        </div>
      </div>
    </>
    )
}

export default CreateJobPostingPage