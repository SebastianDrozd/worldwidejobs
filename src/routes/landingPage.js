import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/landingPage.css'
import axios from "axios"
import { useGetLocationMutation} from '../redux/locationFinder'

const LandingPage = () => {
  const navigate = useNavigate()
  const [getLocation, { isLoading }] = useGetLocationMutation()
  const [locations,setLocations] = useState([])
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

  const handleLocation = async () => {
    if(location.current.value.length > 3) {
    const response = await  getLocation({location: location.current.value}).unwrap()
    setLocations(response)
    
    }
  }

  const handleItemClick = (location2) => {
    console.log("this is location", location2)
    location.current.value = location2.city + ',' + location2.state + ',' + location2.country
    setLocations([])
  }

  return (
    <>
    <div className='landing-page-container'>
    <h1 className='title'>World Wide Jobs</h1>
    <p className='title-sub'>Your premier destination for jobs worldwide!</p>
    <div className="input-group">
     <input ref={keyword} placeholder='Search by job type,tags, or description' className='job-type search' type="text" />
     <div className='location-div'>
     <input onChange={handleLocation} ref={location} placeholder='Search by location or remote' className='place search' type="text" />
   
      {
        isLoading && <div class="lds-dual-ring"></div>
      }
      
      {
        locations.length > 0 && 
        <div className='location-dropdown-list'>
       { locations.map(location => (<>
          <p onClick={() => handleItemClick(location)} className='dropdown-item'>{location.city && location.city},{location.state && location.state},{location.country && location.country}</p>
          </>))}
          </div>
      }
     
   
     </div>
     <button className='landing-page-search-button' onClick={handleSearch}>Search</button>
    </div>
    </div>
   </>
   
  )
}

export default LandingPage