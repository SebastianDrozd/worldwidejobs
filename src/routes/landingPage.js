import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/landingPage.css'
import axios from "axios"
const LandingPage = () => {
  const navigate = useNavigate()

  const handleSearch = () => {
    if(keyword.current.value === '' && location.current.value === '') return
    const keywordValue = `jobType=${keyword.current.value}`
    const locationValue = `location=${location.current.value}`
    const searchQuery = keywordValue + '&' + locationValue
    navigate(`/jobs/search?${searchQuery}`)
    navigate(`/jobs/search?jobType=${keyword.current.value}&location=${location.current.value}`)
  }
  const keyword = useRef()
  const location = useRef()

  const handleLocation = () => {
    if(location.current.value === '') return
    console.log(location.current.value)
    axios.post('https://countriesnow.space/api/v0.1/countries/population/cities', {location: location.current.value}).then(res => {
      console.log(res)
    })
  }

  return (
    <>
    <div className='landing-page-container'>
    <h1 className='title'>World Wide Jobs</h1>
    <p className='title-sub'>Your premier destination for jobs worldwide!</p>
    <div className="input-group">
     <input ref={keyword} placeholder='Search by job type,tags, or description' className='job-type search' type="text" />
     <input onChange={handleLocation} ref={location} placeholder='Search by location or remote' className='place search' type="text" />
     <button onClick={handleSearch}>Search</button>
    </div>
    </div>
   </>
   
  )
}

export default LandingPage