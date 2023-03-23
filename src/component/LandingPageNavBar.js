import React from "react";
import "../css/landingPageNavBar.css";
const LandingPageNavBar = () => {
  return (
    <>
      <div className="land-nav-container">
        <div className="land-nav-logo">
          <h2>World Wide Jobs</h2>
        </div>
        <div className='login-buttons'>
        <button className='login-btn'>Login</button>
        <button className='signup-btn'>Sign Up</button>
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
