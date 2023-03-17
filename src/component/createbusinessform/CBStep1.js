import React, { useRef } from 'react'

const CBStep1 = ({formData,setFormData}) => {
    const businessName = useRef()
    

    const handleImage = (e) => {
        const file = e.target.files[0];
        //convert the image to base64 so we can store it in the database
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFormData({...formData, businessLogo: reader.result})
        }
    }
  return (
    <div>
            <h4>Business Information</h4>
            <input onChange={(e) => {setFormData({...formData,businessName: e.target.value})}} type="text" name="businessName" placeholder="Business Name" />
            <textarea onChange={(e) => {setFormData({...formData,businessDescription: e.target.value})}} name="businessDescription" placeholder="Enter a short summary of your business"/>
            <input onChange={handleImage} type= "file" name="businessLogo" placeholder="Business Logo" />
    </div>
  )
}

export default CBStep1