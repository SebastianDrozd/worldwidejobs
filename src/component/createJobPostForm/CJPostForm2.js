import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import "../../css/createJobPostForm/createJobPostingPage2.css"
const CJPostForm2 = ({ setFormData, formData }) => {
  const select = useRef()
  const [wantsCustom,setWantsCustom] = useState(false);
  const [wantsDefault,setWantsDefault] = useState(false);
  const businessAddress = useSelector(state => state.business.address)
  const street = useRef()
  const city = useRef()
  const stateProvince = useRef()
  const country = useRef()
  const postalCode = useRef()
  const jobEmploymentType = useRef()
  const handleSelectButton = (e) => {
   setWantsCustom(false)
   
    if(e.target.value === "custom"){
      setWantsCustom(true)
      setWantsDefault(false)
  }
    if(e.target.value === "default"){
      setWantsDefault(true)
    }
}

const handleSaveAddress = (e) => {
  e.preventDefault()
  setFormData({
    ...formData,
    address: {
      businessStreet: street.current.value,
      businessCity: city.current.value,
      businessStateProvince: stateProvince.current.value,
      businessCountry: country.current.value,
      businessPostalCode: postalCode.current.value,
    }
  })
  console.log(formData)
}
const handleEmploymentType = (e) => {
  setFormData({
    ...formData,
    jobEmploymentType: jobEmploymentType.current.value
  })
}
  return (
    <div>
       <div className="cjpf1-header">
        <h4>Job Location</h4>
      </div>
      <div className='wrapper-container'>
      <div className='job-location-container'>
        <label className='label-2' for="cars">Choose location</label>
        <select onChange={handleSelectButton} name="cars" id="cars">
          <option >Choose my job location</option>
          <option value="default">Use My business Location</option>
          <option value="custom">Use Custom Location</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <label className='label-2' for="cars">Job employment type:</label>
      <select onChange={handleEmploymentType} ref={jobEmploymentType} name="cars" id="cars">
        <option value="Part Time">Part time</option>
        <option value="Full Time">Full time</option>
        <option value="Seasonal">Seasonal</option>
      </select>
      {wantsDefault && <div className='job-location-business-container'>
        <p>This will be the information that is used</p>
        <p>street : {businessAddress.businessStreet}</p>
        <p>city : {businessAddress.businessCity}</p>
        <p>state/province : {businessAddress.businessStateProvince}</p>
        <p>country : {businessAddress.businessCountry}</p>
        <p>postal code : {businessAddress.businessPostalCode}</p>
        <p>Would you like to use exact or approximate location?</p>
        <input type="radio" id="exact" name="location" value="exact" />
        <label for="exact">Exact</label><br />
        <input type="radio" id="approximate" name="location" value="approximate" />
        <label for="approximate">Approximate</label><br />

        </div>}      
      {wantsCustom && <div className='job-location-container'>

      <input ref = {street} onChange={(e) => { setFormData({ ...formData, businessAddress: e.target.value }) }} type="text" name="businessAdress" placeholder="Business Address" />
      <input ref={city} onChange={(e) => { setFormData({ ...formData, businessCity: e.target.value }) }} type="text" name="businessEmail" placeholder="Business City" />
      <input ref = {stateProvince} onChange={(e) => { setFormData({ ...formData, businessStateProvince: e.target.value }) }} type="text" name="businessStateProvince" placeholder="State/Province" />
      <input ref={postalCode} onChange={(e) => { setFormData({ ...formData, businessPostalCode: e.target.value }) }} type="text" name="businessPhone" placeholder="Postal Code" />
      <input ref={country} onChange={(e) => { setFormData({ ...formData, businessCountry: e.target.value }) }} type="text" name="businessPhone" placeholder="Business Country" />

      <button onClick = {handleSaveAddress}>Save</button>
        </div>}
        </div>
    </div>
  )
}

export default CJPostForm2