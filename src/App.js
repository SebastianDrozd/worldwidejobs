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

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [finishedLoading, setFinishedLoading] = useState(false)
  const [userAccountType, setUserAccountType] = useState(null)

  useEffect(() => {
    console.log("App useEffect ran")
    if (localStorage.getItem('token')) {
      const decode = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
      console.log("decoded token", decode)
      if (new Date() < new Date(decode.exp * 1000)) {
        dispatch(setLoggedIn({ token: localStorage.getItem('token') }))
        setFinishedLoading(true)
        if (decode.aud == "user") {
          console.log("this is a user account")
          setUserAccountType("user")
        }
        else if (decode.aud == "business") {
          console.log("this is a business account")
          setUserAccountType("business")
        }
      }
      else {
        console.log("token is exprired and needs to be refreshed")
        refreshToken().then(res => {
          console.log(res.data.accessToken)
          dispatch(setLoggedIn({ token: res.data.accessToken }))
          localStorage.setItem('token', res.data.accessToken)
          setFinishedLoading(true)
        })
      }
    }
    /*  else if (!user.token) {
       console.log("user is not logged in")
       refreshToken().then(res => {
         console.log("successfully refreshed token", res.data.accessToken)
         dispatch(setLoggedIn({ token: res.data.accessToken }))
       })
     } */
  }, [])




  return (
    <>
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
          <Route path='/uDashboard' element={<UserProtectedRoute account={userAccountType}>
            <UserDashboard />
          </UserProtectedRoute>} />
          <Route path='/bDashboard' element={<BusinessProtectedRoute account={userAccountType}>
            <BusinessDashboard />
          </BusinessProtectedRoute>} />
          <Route path="/confirm/:token" element={<ConfirmPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
