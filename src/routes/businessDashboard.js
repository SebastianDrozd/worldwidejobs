import React from 'react'
import SideBar from '../component/sidebar'
import LogoutButton from '../component/logoutButton'
import '../css/businessDashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInformationQuery } from '../redux/user/userApiSlice'
import { useNavigate } from 'react-router-dom'
import { setUserState } from '../redux/slices/userSlice'
import { setBusinessState } from '../redux/slices/businessSlice'

import BusinessMyJobs from '../component/businessMyJobs'
import BusinessMyCards from '../component/businessMyCards'
import BusinessRecentApplied from '../component/BusinessRecentApplied'

const BusinessDashboard = () => {
  const dispatch = useDispatch()
  const email = useSelector (state => state.auth.user)
  const {data,error,isLoading} = useGetUserInformationQuery(email);
  const navigate = useNavigate()

  if(isLoading){
    return <div>Loading...</div>
  }
  dispatch(setUserState({id: data[0]?.user_id}))
  if(error){
    return <div>Something went wrong</div>
  }
  if(data[0].accountsetup == "false"){
    navigate('/bcreateBusiness')
  }

 if (!isLoading){
    let bus = data[0];
    dispatch(setBusinessState({street:bus.street,city:bus.city,state_province:bus.state_province,country:bus.country,postal_code:bus.postal_code,id:bus.business_id}))
  }
  return (
    <>
    <div className="sidebar">
    <SideBar/>
    </div>
    <div className="content">
     <div className="business-right-container">
    <h1>Business Dashboard</h1>
    <BusinessMyCards/>
    <br />
    <br />
    <BusinessMyJobs/>
    <br />
   <BusinessRecentApplied/>
    <p>Logged in as {email}</p>
    <LogoutButton></LogoutButton>
    <br />
    <br />
    <button onClick = { () => navigate("/createNewJob")}>Create new Job Posting</button>
    </div>
    </div>
    <div className='right-side-bar'>

    </div>
    
    </>
   
  )
}

export default BusinessDashboard