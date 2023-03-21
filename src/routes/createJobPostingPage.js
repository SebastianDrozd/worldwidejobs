import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CJPostForm1 from '../component/createJobPostForm/CJPostForm1'
import CJPostForm2 from '../component/createJobPostForm/CJPostForm2'
import CJPostForm3 from '../component/createJobPostForm/CJPostForm3'
import CJPostForm4 from '../component/createJobPostForm/CJPostForm4'
import "../css/createJobPostingPage.css"
import { useCreateJobPostMutation } from '../redux/jobPost'
const CreateJobPostingPage = () => {
  const [createJobPost, { isLoading, error, data }] = useCreateJobPostMutation();
  const navigate = useNavigate()
  const id = useSelector(state => state.user.id)
  const [page, setPage] = useState(0);
  const businessAddress = useSelector(state => state.business.address)
  const businessId = useSelector(state => state.business.businessId)
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
    address: {
      businessStreet: businessAddress.businessStreet,
      businessCity: businessAddress.businessCity,
      businessStateProvince: businessAddress.businessStateProvince,
      businessCountry: businessAddress.businessCountry,
      businessPostalCode: businessAddress.businessPostalCode,
    }
  });


  const conditionalComponent = () => {
    switch (page) {
      case 0:

        return <CJPostForm1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <CJPostForm2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <CJPostForm3 formData={formData} setFormData={setFormData} />
      case 3:
        return <CJPostForm4 formData={formData} setFormData={setFormData} />

    }
  }
  const handleSubmit = async () => {
    if (page === 3) {
      console.log("submit")
      console.log("this will be object that will be sent")
      let jobPosting = {
        jobPost: {
          job_title: formData.jobTitle,
          job_description: formData.jobDescription,
          job_business_id: businessId,

        },
        address: {
          job_street: formData.address.businessStreet,
          job_city: formData.address.businessCity,
          job_state_province: formData.address.businessStateProvince,
          job_country: formData.address.businessCountry,
          job_postal_code: formData.address.businessPostalCode,
        },
      }
      console.log(jobPosting)
      const response = await createJobPost(jobPosting).unwrap();
      console.log(response)
    }

    if (page == 1) {

    }
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