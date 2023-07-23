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
      },
    })
  );
  if (data[0]?.accountsetup == "false") {
    navigate("/completeUserAccount");
  }
  const navigateHome = () => {
    navigate("/");
  };
  console.log(data[0]);
  return (
    <>
   
      <div className="user-dashboard-layout-wrapper">
        <div className="header-row">
        <h1 className="dash-header">User Dashboard</h1>
        
        <div className="icon-div">
        <i onClick={() => navigate("/userNotifications")} style={{fontSize: '20px'}} className="fa fa-bell icon-item"></i>
        <i style={{fontSize: '20px'}} className="fa fa-envelope icon-item"></i>
        <i style={{fontSize: '20px'}} className="fa fa-user-circle icon-item"></i>
        <i style={{fontSize: '20px'}} className="fa fa-sign-out"></i>
        </div>
        </div>
        
      <div className="dashboard-top-row">
        <UserProfileInformation />
        <UserResumes />
      </div>
        <RecentUserJobAppliedTable />
        <br />
      

        <button onClick={navigateHome}>Home</button>
      </div>
    </>
  );
};

export default UserDashboard;
