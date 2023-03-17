import React from 'react'

const CJPostForm4 = ({formData,setFormData}) => {
  return (
    <div>
    <h4>Job Compensation</h4>
    <input onChange={(e) => { setFormData({ ...formData, jobTitle: e.target.value }) }} type="text" name="businessName" placeholder="Job salary" />
    <input onChange={(e) => { setFormData({ ...formData, businessAddress: e.target.value }) }} type="text" name="businessAdress" placeholder="Job Pay period" />



  </div>
  )
}

export default CJPostForm4