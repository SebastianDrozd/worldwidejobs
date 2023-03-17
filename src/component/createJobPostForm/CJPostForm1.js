import React from 'react'

const CJPostForm1 = ({formData,setFormData}) => {
  return (
    <div>
    <h4>Job Details</h4>
    <input onChange={(e) => {setFormData({...formData,jobTitle: e.target.value})}} type="text" name="businessName" placeholder="Job Title" />
    <textarea onChange={(e) => {setFormData({...formData,jobDescription: e.target.value})}} name="businessDescription" placeholder="Enter a short summary of your job"/>
</div>
  )
}

export default CJPostForm1