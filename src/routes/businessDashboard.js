import React from 'react'
import SideBar from '../component/sidebar'
import LogoutButton from '../component/logoutButton'
import '../css/businessDashboard.css'
const BusinessDashboard = () => {
  return (
    <>
    <div className="sidebar">
    <SideBar/>
    </div>
    <div className="content">
    <h1>Business Dashboard</h1>
    <LogoutButton></LogoutButton>
    </div>
    
    </>
   
  )
}

export default BusinessDashboard