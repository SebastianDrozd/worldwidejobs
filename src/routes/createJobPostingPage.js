import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CJPostForm1 from '../component/createJobPostForm/CJPostForm1'
import CJPostForm2 from '../component/createJobPostForm/CJPostForm2'
import CJPostForm3 from '../component/createJobPostForm/CJPostForm3'
import CJPostForm4 from '../component/createJobPostForm/CJPostForm4'
import CJPostForm5 from '../component/createJobPostForm/CJPostForm5'
import "../css/createJobPostingPage.css"
import { useCreateJobPostMutation } from '../redux/jobPost'
const CreateJobPostingPage = () => {
  const [createJobPost, { isLoading, error, data }] = useCreateJobPostMutation();
  const navigate = useNavigate()
  const id = useSelector(state => state.user.id)
  const [page, setPage] = useState(0);
  const businessAddress = useSelector(state => state.business.address)
  const businessId = useSelector(state => state.business.businessId)
  const requirements = useSelector(state => state.createJobPost.requirements)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    jobType: "",
    jobSalary: "",
    jobSkills: "",
    jobEducation: "",
    jobExperience: "",
    jobEmploymentType: "",
    job_user_id: id,
    jobCurrency: "",
    jobPayType: "",
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
        
        return <CJPostForm5 formData={formData} setFormData={setFormData} />
      case 3:
        return <CJPostForm3 formData={formData} setFormData={setFormData} />
        case 4:
          return <CJPostForm4 formData={formData} setFormData={setFormData} />

    }
  }
  const handleSubmit = async () => {
    if (page === 4) {
      let jobPosting = {
        jobPost: {
          job_title: formData.jobTitle,
          job_description: formData.jobDescription,
          job_business_id: businessId,
          job_employment_type : formData.jobEmploymentType,
          job_experience: formData.jobExperience,
          job_education: formData.jobEducation,
          job_pay_frequency: formData.jobPayFrequency,
          job_salary: formData.jobSalary,
          job_currency: formData.jobCurrency,
          job_pay_type: formData.jobPayType,

        },
        address: {
          job_street: formData.address.businessStreet,
          job_city: formData.address.businessCity,
          job_state_province: formData.address.businessStateProvince,
          job_country: formData.address.businessCountry,
          job_postal_code: formData.address.businessPostalCode,
        },
        requirements: requirements
      }
    
      try{
        const response = await createJobPost(jobPosting).unwrap();
      
        setShowToast(true)
       return setTimeout(() => {
          setShowToast(false)
          navigate('/bDashboard')
        }, 5000)
      }catch(error){

      }
      
    }

    if (page == 1) {

    }
   
    setPage(page + 1);
  }
  return (
    <>
    {
      showToast && <div class="toast">
      <div class="toast-content">
        <div class="toast-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast-message">
          Job post created successfully!
        </div>
        <div class="toast-line"></div>
      </div>
    </div>
    }
      <div className="createjobpage-container">
        <div className='header-create-job'>
        <h1>Create a new Job</h1>
        <p>Post your job in a few easy steps!</p>
        </div>
        <div className='create-job-form'>
          {conditionalComponent()}
          <div>
            {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
            <button onClick={handleSubmit}>
              {page === 0 || page === 1 || page == 2  || page == 3? "Next" : "Submit"}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default CreateJobPostingPage