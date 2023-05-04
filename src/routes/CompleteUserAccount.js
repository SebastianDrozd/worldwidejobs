import React, { useRef } from "react";
import "../css/CompleteUserAccount.css";
import { useSelector } from "react-redux";
import { useCompleteUserProfileMutation } from "../redux/regUsers";
import { useNavigate } from "react-router-dom";
const CompleteUserAccount = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const street = React.useRef(null);
  const city = React.useRef(null);
  const stateProvince = React.useRef(null);
  const country = React.useRef(null);
  const postalCode = React.useRef(null);
  const [formData, setFormData] = React.useState({});
  const phoneNumber = React.useRef(null);
  const [completeUserProfile] = useCompleteUserProfileMutation();

  const handleCompleteProfile = async () => {
    const obj = {
      phoneNumber: phoneNumber.current.value,
      userId: user.id,
      address: {
        street: street.current.value,
        city: city.current.value,
        stateProvince: stateProvince.current.value,
        country: country.current.value,
        postalCode: postalCode.current.value,
      },
    };
    console.log("object to be sent to backend", obj);
    try {
      const response = await completeUserProfile(obj).unwrap();
      console.log("response from backend", response);
      navigate("/uDashboard")
    } catch (error) {}
  };
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
              ref={phoneNumber}
              type="text"
              name="jobTitle"
              placeholder="Phone Number"
            />

            <p style={{ color: "white" }}>Address</p>
            <input
              ref={street}
              onChange={(e) => {
                setFormData({ ...formData, businessAddress: e.target.value });
              }}
              type="text"
              name="businessAdress"
              placeholder="Street Address"
            />
            <input
              ref={city}
              onChange={(e) => {
                setFormData({ ...formData, businessCity: e.target.value });
              }}
              type="text"
              name="businessEmail"
              placeholder="City"
            />
            <input
              ref={stateProvince}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  businessStateProvince: e.target.value,
                });
              }}
              type="text"
              name="businessStateProvince"
              placeholder="State/Province"
            />
            <input
              ref={postalCode}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  businessPostalCode: e.target.value,
                });
              }}
              type="text"
              name="businessPhone"
              placeholder="Postal Code"
            />
            <input
              ref={country}
              onChange={(e) => {
                setFormData({ ...formData, businessCountry: e.target.value });
              }}
              type="text"
              name="businessPhone"
              placeholder=" Country"
            />
          </div>
        </div>
        <button onClick={handleCompleteProfile}>Submit</button>
      </div>
    </>
  );
};

export default CompleteUserAccount;
