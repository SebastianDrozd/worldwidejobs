import React from 'react'

const CBStep2 = ({formData,setFormData}) => {
    return (
        <div>
            <h4>Contact Information</h4>
            <input onChange={(e) => {setFormData({...formData,businessAddress: e.target.value})}} type="text" name="businessAdress" placeholder="Business Address" />
            <input onChange={(e) => {setFormData({...formData,businessCity: e.target.value})}} type="text" name="businessEmail" placeholder="Business City" />
            <input onChange={(e) => {setFormData({...formData,businessStateProvince: e.target.value})}} type="text" name="businessStateProvince" placeholder="State/Province" />
            <input  onChange={(e) => {setFormData({...formData,businessCountry: e.target.value})}} type="text" name="businessPhone" placeholder="Business Country" />
            <input  onChange={(e) => {setFormData({...formData,businessPostalCode: e.target.value})}} type="text" name="businessPhone" placeholder="Postal Code" />
            <input  onChange={(e) => {setFormData({...formData,businessEmail: e.target.value})}} type="text" name="businessPhone" placeholder="Business Email" />
            <input  onChange={(e) => {setFormData({...formData,businessPhone: e.target.value})}} type="text" name="businessPhone" placeholder="Business Phone Number" />
        </div>
    )
}

export default CBStep2