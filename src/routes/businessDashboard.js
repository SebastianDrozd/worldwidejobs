import React from 'react'
import SideBar from '../component/sidebar'
import LogoutButton from '../component/logoutButton'
import '../css/businessDashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInformationQuery } from '../redux/user/userApiSlice'
import { useNavigate } from 'react-router-dom'
import { setUserState } from '../redux/slices/userSlice'
const BusinessDashboard = () => {
  const dispatch = useDispatch()
  const email = useSelector (state => state.auth.user)
  const {data,error,isLoading} = useGetUserInformationQuery(email);
  const navigate = useNavigate()
  if(isLoading){
    return <div>Loading...</div>
  }
  dispatch(setUserState({id: data[0]?.id}))
  if(error){
    return <div>Something went wrong</div>
  }
  if(data[0].accountsetup == "false"){
    navigate('/bcreateBusiness')
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