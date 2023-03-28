import React from 'react'
import LogoutButton from '../component/logoutButton'
import { ResponsiveContainer,BarChart,XAxis,YAxis,Bar,LineChart,Tooltip,Legend,Line } from 'recharts'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInformationQuery } from '../redux/user/userApiSlice'
import { useGetUserProfileInfoQuery } from '../redux/regUsers'
import { setUserState } from '../redux/slices/userSlice'
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
   <div class="dashboard">
  <div class="dashboard-header">
    <button onClick = {navigateHome}></button>
    <h1>Welcome, John Doe!</h1>
    <p>Last login: 2022-04-01 12:34 PM</p>
  </div>
  <div class="dashboard-body">
    <div class="dashboard-section">
      <div class="dashboard-section-header">
        <h2>Applications</h2>
        <a href="#">View All</a>
      </div>
      <div class="dashboard-section-body">
        <div class="dashboard-section-item">
          <h3>Software Engineer</h3>
          <p>Applied on: 2022-04-01</p>
          <p>Status: In progress</p>
        </div>
        <div class="dashboard-section-item">
          <h3>Product Manager</h3>
          <p>Applied on: 2022-03-28</p>
          <p>Status: Rejected</p>
        </div>
      </div>
    </div>
    <div class="dashboard-section">
      <div class="dashboard-section-header">
        <h2>Job Listings</h2>
        <a href="#">View All</a>
      </div>
      <div class="dashboard-section-body">
        <div class="dashboard-section-item">
          <h3>Software Engineer</h3>
          <p>Location: New York, NY</p>
          <p>Posted: 2022-03-31</p>
          <p>Expires: 2022-04-30</p>
        </div>
        <div class="dashboard-section-item">
          <h3>Product Manager</h3>
          <p>Location: San Francisco, CA</p>
          <p>Posted: 2022-03-28</p>
          <p>Expires: 2022-04-27</p>
        </div>
      </div>
    </div>
    <div class="dashboard-section">
      <div class="dashboard-section-header">
        <h2>Statistics</h2>
      </div>
      <div class="dashboard-section-body dashboard-chart">
        <h3>Applications by Month</h3>
        <div class="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart  >
              <Line type="monotone" dataKey="applications" stroke="#8884d8" strokeWidth={2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default UserDashboard