import React from "react";
import { useSelector } from "react-redux";
import { useGetUserJobApplicationsQuery } from "../redux/jobApplication";
import "../css/RecentUserJobAppliedTable.css";
import { useNavigate } from "react-router-dom";
const RecentUserJobAppliedTable = () => {
  const navigate = useNavigate()
  const id = useSelector((state) => state.auth.user);
  console.log("This is id", id);
  const { data, error, isLoading } = useGetUserJobApplicationsQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleViewMore = () => {
    navigate('/uDashboard/jobapplications')
  };

  const handleViewJobApplication =async (jobApplication) => {
    
  }
  return (
    <>
      <div className="recent-job-applications-wrapper">
        <h2>My Recent Job Applications</h2>
        <table className="application-recents-table">
          <tr>
            <th>Date Applied</th>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th></th>
          </tr>
          {data &&
            data.map((jobApplication) => (
              <tr>
                <td>{jobApplication.application_created}</td>
                <td>{jobApplication.name}</td>
                <td>{jobApplication.job_title}</td>
                <td>{jobApplication.job_application_status}</td>
                <td><button>Info</button></td>
              </tr>
            ))}
        </table>
        <p onClick={handleViewMore}>View all job applications</p>
      </div>
    </>
  );
};

export default RecentUserJobAppliedTable;
