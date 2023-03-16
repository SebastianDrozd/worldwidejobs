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

function App() {
  

  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
          {/*  <Route element={<BusinessAuthGuard />}>   
            <Route path='/bDashboard' element={<BusinessDashboard />} />
          </Route> */}
          {/* <Route element={<UserAuthGuard />}>
            <Route path='/uDashboard' element={<UserDashboard/>} />
          </Route> */}
          <Route path='/uDashboard' element={
            <RequireAuth allowedRoles={"user"}>
              <UserDashboard />
            </RequireAuth>
          } />
          <Route path='/bDashboard' element={
          <RequireAuth allowedRoles={"business"}>
          <BusinessDashboard />
        </RequireAuth>} />
          <Route path="/confirm/:token" element={<ConfirmPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
