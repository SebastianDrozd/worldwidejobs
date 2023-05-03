import React from "react";
import "../css/CompleteUserAccount.css";
const CompleteUserAccount = () => {
  return (
    <>
      <div className="complete-user-account-container">
        <div className="header-complete-account">
          <h1>Complete your profile</h1>
          <p>Get Started in a few easy steps!</p>
        </div>
        <div className="complete-account-form">
          <div>
            
            <input
             
              type="text"
              name="jobTitle"
              placeholder="Phone Number"
            />
             
             <input
             
             type="text"
             name="jobTitle"
             placeholder="Job Title"
           />
            
            <input
             
              type="text"
              name="jobTitle"
              placeholder="Job Title"
            /> 
          </div>
        </div>
        <button>Submit</button>
      </div>
    </>
  );
};

export default CompleteUserAccount;
