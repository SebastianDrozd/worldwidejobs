import React from 'react'
import "../css/UserJobApplications.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useGetUserJobApplicationsQuery } from '../redux/jobApplication';
const UserJobApplications = () => {
  const id = useSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserJobApplicationsQuery(id);
  
  return (
    <div className="job-applications-page">
    <div className="job-applications-header">
      <h1>My Job Applications</h1>
      <Link to="/new-application" className="btn-primary">
        New Application
      </Link>
      
    </div>
    <div className="job-applications-container">
      {data.map((application) => (
        <div key={application.id} className="job-application-card">
          <div className="job-application-card-header">
            <h2>{application.position}</h2>
            <span>{application.company}</span>
          </div>
          <div className="job-application-card-body">
            <div>
              <strong>Date Applied: </strong>
              {new Date(application.application_created).toDateString()}
            </div>
            <div>
              <strong>Position: </strong>
              {application.job_title}
            </div>
            <div>
              <strong>Status: </strong>
              {application.job_application_status}
            </div>
            <div>
              <strong>Location: </strong>
              {application.city}, {application.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default UserJobApplications