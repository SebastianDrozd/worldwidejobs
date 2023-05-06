import React from "react";
import "../css/UserProfileInformation.css";
import { useSelector } from "react-redux";
import { useEditUserProfileMutation } from "../redux/regUsers";
const UserProfileInformation = () => {
  const user = useSelector((state) => state.user);
  const [editUserProfile] = useEditUserProfileMutation();
  const [wantsEdit, setWantsEdit] = React.useState(false);
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = React.useState(user.lastName);
  const [email, setEmail] = React.useState(user.email);
  const [phoneNumber, setPhoneNumber] = React.useState(user.phoneNumber);
  const [address, setAddress] = React.useState(user.address);
  const [street, setStreet] = React.useState(user.address.street);
  const [city, setCity] = React.useState(user.address.city);
  const [stateProvince, setStateProvince] = React.useState(
    user.address.stateProvince
  );
  const [country, setCountry] = React.useState(user.address.country);
  const [postalCode, setPostalCode] = React.useState(user.address.postalCode);
  const handleProfileButton = async () => {
    if (wantsEdit) {
      const obj = {
        userId: user.id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address : {
          street: street,
          city: city,
          stateProvince: stateProvince,
          country: country,
          postalCode: postalCode,
        }
      };
      
      try {
        const response = await editUserProfile(obj).unwrap();
        console.log("this is response", response);
        setWantsEdit(!wantsEdit);
        
      } catch (err) {
        console.log("this is error", err);
      }
    } 
    else {
      setWantsEdit(true);
    }
  };
  return (
    <>
      <div class="profile-container">
        <h2>User Profile Information</h2>
        <hr/>
        <div class="profile-info">
          <div class="info-item">
            <label for="first-name">First Name:</label>
            {wantsEdit ? (
              <input
                type="email"
                id="email"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            ) : (
              <span className="profile-tags" id="first-name">{user.firstName}</span>
            )}
          </div>
          <div class="info-item">
            <label for="last-name">Last Name:</label>
            {wantsEdit ? (
              <input
                type="email"
                id="email"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            ) : (
              <span id="last-name">{user.lastName}</span>
            )}
          </div>
          <div class="info-item">
            <label for="email">Email:</label>
            {wantsEdit ? (
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span id="email">{user.email}</span>
            )}
          </div>
          <div class="info-item">
            <label for="phone">Phone Number:</label>
            {wantsEdit ? (
              <input
                type="email"
                id="email"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            ) : (
              <span id="phone">{user.phoneNumber}</span>
            )}
          </div>
          <div class="info-item">
            <label for="address">Address:</label>
            {wantsEdit ? (
              <>
                <input
                  type="email"
                  id="email"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  value={stateProvince}
                  onChange={(e) => setStateProvince(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </>
            ) : (
              <span id="address">
                {user.address.city + "," + user.address.country}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleProfileButton}
          class={wantsEdit ? "edit-btn-save" : "edit-btn"}
        >
          {wantsEdit ? "save" : "edit"}
        </button>
      </div>
    </>
  );
};

export default UserProfileInformation;
