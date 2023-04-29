import React from 'react'
import "../css/businessRecentApplied.css"
import { useSelector } from 'react-redux'
import { useGetBusinessJobApplicationsQuery } from '../redux/jobApplication'
const BusinessRecentApplied = () => {
    const businessId = useSelector(state => state.business.businessId)
    const {data,isLoading,error} = useGetBusinessJobApplicationsQuery(businessId)
    if (isLoading) {
       
    }
  return (
   <>
   <div className='business-recent-applied-container'>
    <h2> Recent Job Applications</h2>
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
                <td><button>view</button></td>
            </tr>
        </>))}
    </table>
   </div>
   </>
  )
}

export default BusinessRecentApplied