import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ConfirmPage from './routes/confirmPage';
import RegisterUser from './routes/registerUser';
import Login from './routes/login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './utils/requests';
import { setLoggedIn } from './redux/slices/userSlice';
import { useEffect, useState } from 'react';
import LandingPage from './routes/landingPage';
import BusinessAuthGuard from './utils/businessAuthGuard';
import BusinessDashboard from './routes/businessDashboard';
import UserDashboard from './routes/userDashboard';
import UserAuthGuard from './utils/userAuthGuard';
import UserProtectedRoute from './utils/userProtectedRoute';
import BusinessProtectedRoute from './utils/businessProtectedRoute';
import Navbar from './component/navbar';
import RequireAuth from './utils/protectedRoutes/requireAuth';
import CreateBusinessPage from './routes/createBusinessPage';
import CreateJobPostingPage from './routes/createJobPostingPage';
import JobsPage from './routes/jobsPage';
import LandingPageNavBar from './component/LandingPageNavBar';


function App() {
  return (
    <>
    <LandingPageNavBar/>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/jobs/:query" element={<JobsPage/>}/>
          <Route path='/uDashboard' element={
            <RequireAuth allowedRoles={"user"}>
              <UserDashboard />
            </RequireAuth>
          } />
          <Route element={<RequireAuth allowedRoles={"business"} />}>
            <Route path="/bDashboard" element={<BusinessDashboard />} />
            <Route path = "bcreateBusiness" element={<CreateBusinessPage/>}/>
            <Route path = "createNewJob" element={<CreateJobPostingPage/>}/>
          </Route>
          <Route path="/confirm/:token" element={<ConfirmPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
