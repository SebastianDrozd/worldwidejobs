import React from 'react'

const CJPostForm3 = ({formData,setFormData}) => {
  return (
    <div>
      <h4>Job Experience</h4>
      <input onChange={(e) => { setFormData({ ...formData, jobTitle: e.target.value }) }} type="text" name="businessName" placeholder="Job skills needed" />
      <input onChange={(e) => { setFormData({ ...formData, businessAddress: e.target.value }) }} type="text" name="businessAdress" placeholder="Job Education" />
      <input onChange={(e) => { setFormData({ ...formData, businessCity: e.target.value }) }} type="text" name="businessEmail" placeholder="Job experience" />


    </div>
  )
}

export default CJPostForm3