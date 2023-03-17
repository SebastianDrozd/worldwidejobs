import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CBStep1 from '../component/createbusinessform/CBStep1';
import CBStep2 from '../component/createbusinessform/CBStep2';
import CBStep3 from '../component/createbusinessform/CBStep3';
import "../css/createBusinessPage.css"
import { useCreateBusinessMutation } from '../redux/business';
const CreateBusinessPage = () => {
  const navigate = useNavigate()
  const id = useSelector(state => state.user.id)
  const [page, setPage] = useState(0);
  const [createBusiness, { isLoading, error, data }] = useCreateBusinessMutation();
  const [createdBusiness, setCreatedBusiness] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessDescription: "",
    businessWebsite: "",
    businessLogo : "",
    businessSize: "",
    businessIndustry: "",
    business_user_id: id, 


    businessAddress: "",
    businessCity: "",
    businessStateProvince: "",
    businessCountry: "",
    businessPostalCode : "",
  });
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <CBStep1 formData = {formData} setFormData={setFormData} />;
      case 1:
        return <CBStep2 formData = {formData} setFormData={setFormData} />;
      case 2:
        return <CBStep3 formData = {formData} setFormData={setFormData} />

    }
  }
  const handleSubmit = async () => {
    if(page === 2){
      console.log("submitting")
      let business= {
        id : null ,
        name : formData.businessName,
        description : formData.businessDescription,
        email : formData.businessEmail,
        phone : formData.businessPhone,
        logo : formData.businessLogo,
        size : formData.businessSize,
        industry : formData.businessIndustry,
        website : formData.businessWebsite,
        business_user_id : formData.business_user_id,
      }
      let address = {
        id : null,
        address: formData.businessAddress,
        city: formData.businessCity,
        state_province: formData.businessStateProvince,
        country: formData.businessCountry,
        postal_code: formData.businessPostalCode,
        latitude : null,
        longitude : null,
        business_id : null,
      }
      try{
        const userData = await createBusiness({business: business, address: address}).unwrap();
        console.log("This is userdata",userData)
        setCreatedBusiness(true);
        setTimeout(() => {
          setCreatedBusiness(false);
          navigate('/bDashboard')
        }, 3000);
        
      }
      catch(err){
        console.log(err)
      }
      return;
    }
    console.log(formData)
    setPage(page + 1);
  }

  return (
    <>
      <div className="createbusinesspage-container">
        <h1>Welcome to worldwide jobs!</h1>
        <p>It looks like this is your first time loggin in. Create a business profile to get started!</p>
        {createdBusiness && <p>Business created successfully!</p>}
        <div className='create-business-form'>
          {conditionalComponent()}
          <div>
            {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
            <button onClick={handleSubmit}>
              {page === 0 || page === 1 ? "Next" : "Submit"}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default CreateBusinessPage