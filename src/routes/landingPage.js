import React from 'react'
import { Link } from 'react-router-dom'
import '../css/landingPage.css'
const LandingPage = () => {
  return (
    <>
    <div className='landing-page-container'>
    <h3>World Wide Jobs</h3>
    <p className='title-sub'>Your premier destination for jobs worldwide!</p>
    <div className="input-group">
     <input placeholder='Search by job type,tags, or description' className='job-type' type="text" />
     <input placeholder='Search by location or remote' className='place' type="text" />
     <button>Search</button>
    </div>
    </div>
   </>
   
  )
}

export default LandingPage