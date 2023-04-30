import React from 'react'
import { useParams } from 'react-router-dom'
import "../css/ViewAppliedJobPage.css"
import { useChangeApplicationViewedStatusMutation, useGetJobApplicationDetailsQuery } from '../redux/jobApplication'
const ViewAppliedJobPage = () => {
    const {applicationId} = useParams()
    const {data, isLoading, isError} = useGetJobApplicationDetailsQuery(applicationId)

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>
    console.log("single application",data)
    //if this is first time viewing the application, set the status to viewed
    if(data[0].job_application_status == "Not viewed"){
        //update the status to viewed
        console.log("this app hasnt been viewed yet..Changin to viewed")


    }

  return (
    <>
    <div className='applied-job-page-container'>
      
        <h2>Job Application</h2>
        <p>Application Id: {data[0].job_application_id}</p>
        <p>Candidate name : {data[0].firstname + " " + data[0].lastname}</p>
        <p>Candidate email : {data[0].email}</p>
        <a>view job posting</a>
        <p></p>
        
    </div>
    </>
    
  )
}

export default ViewAppliedJobPage