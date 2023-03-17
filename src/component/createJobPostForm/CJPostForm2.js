import React from 'react'

const CJPostForm2 = ({ setFormData, formData }) => {
  return (
    <div>
      <h4>Job Location</h4>
      <input onChange={(e) => { setFormData({ ...formData, jobTitle: e.target.value }) }} type="text" name="businessName" placeholder="Job Location" />
      <input onChange={(e) => { setFormData({ ...formData, businessAddress: e.target.value }) }} type="text" name="businessAdress" placeholder="Business Address" />
      <input onChange={(e) => { setFormData({ ...formData, businessCity: e.target.value }) }} type="text" name="businessEmail" placeholder="Business City" />
      <input onChange={(e) => { setFormData({ ...formData, businessStateProvince: e.target.value }) }} type="text" name="businessStateProvince" placeholder="State/Province" />
      <input onChange={(e) => { setFormData({ ...formData, businessCountry: e.target.value }) }} type="text" name="businessPhone" placeholder="Business Country" />
      <input onChange={(e) => { setFormData({ ...formData, businessPostalCode: e.target.value }) }} type="text" name="businessPhone" placeholder="Postal Code" />
    </div>
  )
}

export default CJPostForm2