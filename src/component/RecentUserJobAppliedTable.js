import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useGetUserJobApplicationsQuery } from "../redux/jobApplication";
import "../css/RecentUserJobAppliedTable.css";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import UserJobApplicationModal from "./UserJobApplicationModal";
const RecentUserJobAppliedTable = () => {
  const navigate = useNavigate()
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal,setShowModal] = useState(false);
  const id = useSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserJobApplicationsQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  const handleViewMore = () => {
    navigate('/uDashboard/jobapplications')
  };

  const handleViewJobApplication =async (jobApplication) => {
    setSelectedApplication(jobApplication);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setSelectedApplication(null);
    setShowModal(false);
  };
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
            data.slice(0,5).map((jobApplication) => (
              <tr>
                <td>{new Date(jobApplication.application_created).toDateString()}</td>
                <td>{jobApplication.name}</td>
                <td>{jobApplication.job_title}</td>
                <td>{jobApplication.job_application_status}</td>
                <td><button onClick={() => handleViewJobApplication(jobApplication)}>Info</button></td>
              </tr>
            ))}
        </table>
        {showModal && (<UserJobApplicationModal application={selectedApplication} onClose={handleCloseModal}/>)}
        <p className="view-more-tag" onClick={handleViewMore}>View all job applications</p>
      </div>
    </>
  );
};

export default RecentUserJobAppliedTable;
