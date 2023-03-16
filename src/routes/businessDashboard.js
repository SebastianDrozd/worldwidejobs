import React from 'react'
import SideBar from '../component/sidebar'
import LogoutButton from '../component/logoutButton'
import '../css/businessDashboard.css'
import { useSelector } from 'react-redux'
import { useGetUserInformationQuery } from '../redux/user/userApiSlice'
const BusinessDashboard = () => {
  const email = useSelector (state => state.auth.user)
  const {data,error,isLoading} = useGetUserInformationQuery(email);
  if(isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Something went wrong</div>
  }
  console.log(data)
  
  return (
    <>
    <div className="sidebar">
    <SideBar/>
    </div>
    <div className="content">
    <h1>Business Dashboard</h1>
    <p>This is the business dashboard page</p>
    <p>Logged in as {email}</p>
    <LogoutButton></LogoutButton>
    </div>
    
    </>
   
  )
}

export default BusinessDashboard