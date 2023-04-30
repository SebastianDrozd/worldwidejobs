import React from 'react'
import "../css/businessRecentApplied.css"
import { useSelector } from 'react-redux'
import { useChangeApplicationViewedStatusMutation, useGetBusinessJobApplicationsQuery } from '../redux/jobApplication'
import { useNavigate } from 'react-router-dom'
const BusinessRecentApplied = () => {
    const navigate = useNavigate()
    const [changeApplicationViewedStatus] = useChangeApplicationViewedStatusMutation()
    const businessId = useSelector(state => state.business.businessId)
    const {data,isLoading,error} = useGetBusinessJobApplicationsQuery(businessId)
    if (isLoading) {

    }

    const handleViewJobApplication = async(jobApplication) => {
        //check if the job application has been viewed.
        if(jobApplication.job_application_status == "Not viewed"){
            //update the status to viewed
    
            const response = await changeApplicationViewedStatus(jobApplication.job_application_id)

        }

        navigate(`jobapplications/${jobApplication.job_application_id}`)
    }
  return (
   <>
   <div className='business-recent-applied-container'>
    <h2> Recent Job Applications</h2>
    <br/>
    <br/>
    <table className='business-recent-applied-table'>
        <tr>
            <th>Job Title</th>
            <th>Applicant</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th></th>
        </tr>

        {data && data.map((jobApplication) => (<>
            
            <tr>
                <td>{jobApplication.job_title}</td>
                <td>{jobApplication.firstname + " " + jobApplication.lastname}</td>
                <td>{jobApplication.application_created}</td>
                <td>{jobApplication.job_application_status}</td>
                <td><button onClick={() => {
                    handleViewJobApplication(jobApplication)
                }}>view</button></td>
            </tr>
        </>))}
    </table>
   </div>
   </>
  )
}

export default BusinessRecentApplied