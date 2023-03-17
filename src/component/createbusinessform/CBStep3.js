import React from 'react'

const CBStep3 = ({setFormData,formData}) => {
  return (
    <div>
    <h4>Additional Information</h4>
    <input onChange={(e) => {setFormData({...formData,businessSize: e.target.value})}} type="text" name="businessName" placeholder="Business Size" />
    <input onChange={(e) => {setFormData({...formData,businessIndustry: e.target.value})}} type="text" name="businessEmail" placeholder="Business Industry" />
    <input onChange={(e) => {setFormData({...formData,businessWebsite: e.target.value})}} type="text" name="businessWebsite" placeholder="Business website" />
</div>
  )
}

export default CBStep3