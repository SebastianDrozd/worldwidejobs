import React from 'react'
import "../css/UserJobApplicationModal.css"
const UserJobApplicationModal = ({ application, onClose }) => {
    console.log(application)
    return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Application Details</h2>
              <button className="close-btn" onClick={onClose}>
               Close modal
              </button>
            </div>
            <div className="modal-body">
              <table className="application-table">
                <tbody>
                  <tr>
                    <td>Application ID:</td>
                    <td>{application.job_application_id}</td>
                  </tr>
                  <tr>
                    <td>Position:</td>
                    <td>{application.job_title}</td>
                  </tr>
                  <tr>
                    <td>Company:</td>
                    <td>{application.name}</td>
                  </tr>
                  <tr>
                    <td>Job Description:</td>
                    <td>{application.job_description}</td>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>{application.city},{application.country}</td>
                  </tr>
                  <tr>
                    <td>Date Applied:</td>
                    <td>{new Date(application.application_created).toDateString()}</td>
                  </tr>
                  <tr>
                    <td>Application Status</td>
                    <td>{application.job_application_status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default UserJobApplicationModal