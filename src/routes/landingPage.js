import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/landingPage.css'
const LandingPage = () => {
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/jobs/search?jobType=${keyword.current.value}&location=${location.current.value}`)
  }
  const keyword = useRef()
  const location = useRef()

  return (
    <>
    <div className='landing-page-container'>
    <h1 className='title'>World Wide Jobs</h1>
    <p className='title-sub'>Your premier destination for jobs worldwide!</p>
    <div className="input-group">
     <input ref={keyword} placeholder='Search by job type,tags, or description' className='job-type search' type="text" />
     <input ref={location} placeholder='Search by location or remote' className='place search' type="text" />
     <button onClick={handleSearch}>Search</button>
    </div>
    </div>
   </>
   
  )
}

export default LandingPage