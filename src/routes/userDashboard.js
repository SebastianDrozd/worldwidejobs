import React from 'react'
import LogoutButton from '../component/logoutButton'
import { ResponsiveContainer,BarChart,XAxis,YAxis,Bar,LineChart,Tooltip,Legend,Line } from 'recharts'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInformationQuery } from '../redux/user/userApiSlice'
import { useGetUserProfileInfoQuery } from '../redux/regUsers'
import { setUserState } from '../redux/slices/userSlice'
import RecentUserJobAppliedTable from '../component/RecentUserJobAppliedTable'
import "../css/userDashboard.css"
const UserDashboard = () => {
  const email = useSelector (state => state.auth.user);
  const {data,error,isLoading} = useGetUserProfileInfoQuery(email);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  if(isLoading){
    return <div>Loading...</div>
  }
  console.log(data)  
  dispatch(setUserState({id: data[0]?.user_id}))
  const navigateHome = () => {
    navigate('/')
  }
  return (
    <>
    <div className='user-dashboard-layout-wrapper'>
      <RecentUserJobAppliedTable/>
    </div>
  
    </>
  )
}

export default UserDashboard