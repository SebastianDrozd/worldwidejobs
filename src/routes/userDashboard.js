import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileInfoQuery } from "../redux/regUsers";
import { setUserState } from "../redux/slices/userSlice";
import RecentUserJobAppliedTable from "../component/RecentUserJobAppliedTable";
import "../css/userDashboard.css";
import UserResumes from "../component/UserResumes";
import UserProfileInformation from "../component/UserProfileInformation";
const UserDashboard = () => {
  const email = useSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserProfileInfoQuery(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  dispatch(
    setUserState({
      id: data[0]?.user_id,
      firstName: data[0]?.firstname,
      lastName: data[0]?.lastname,
      email: data[0]?.email,
      phoneNumber: data[0]?.phone_number,
      address: {
        street: data[0]?.address,
        city: data[0]?.city,
        stateProvince: data[0]?.state_province,
        country: data[0]?.country,
        postalCode: data[0]?.postal_code,
      }
    })
  );
  if(data[0]?.accountsetup == "false"){
    navigate('/completeUserAccount')
  }
  const navigateHome = () => {
    navigate("/");
  };
  console.log(data[0])
  return (
    <>
    <button className="notification-button" onClick={() => navigate("/userNotifications")} >
        <i className="fa fa-bell"></i>
        <span className="notification-badge">3</span>
      </button>
      <div className="user-dashboard-layout-wrapper">
      <UserProfileInformation/>
      <br/>
        <RecentUserJobAppliedTable />
        <br/>
        <UserResumes />
       
        <button onClick={navigateHome}>Home</button>
      </div>
    </>
  );
};

export default UserDashboard;
