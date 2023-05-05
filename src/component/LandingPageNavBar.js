import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/landingPageNavBar.css";
import UserNotificationButton from "./UserNotificationButton";
import { useSelector } from "react-redux";
const LandingPageNavBar = () => {
  const user = useSelector((state) => state.user);
  const handleLogin = () => {
    //use the window because we are outside of the router component
    window.location.href = "/login";
  }
  const handleHome = () => {
    //use the window because we are outside of the router component
    window.location.href = "/";
  }
  return (
    <>
      <div className="land-nav-container">
        <div className="land-nav-logo">
          <h2 onClick={handleHome}>World Wide Jobs</h2>
        </div>
       
        <div className='login-buttons'>
        
         {user.id == null && <> <button onClick={handleLogin} className='login-btn'>Login</button>
        
        <button className='signup-btn'>Sign Up</button></>}
       
    </div>
   
      </div>
      <div className='land-nav-menu'>
        <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Companies</li>
            <li>About Us</li>
            <li>Employer Information</li>
        </ul>
        </div>
    </>
  );
};

export default LandingPageNavBar;
