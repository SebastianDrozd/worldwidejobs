import React, { useEffect, useState } from 'react'
import "../css/jobsPage.css"
import { useGetJobPostsQuery } from '../redux/jobPost';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import JobSearchBar from '../component/jobSearchBar';
const JobsPage = () => {
    const { data, error, isLoading } = useGetJobPostsQuery();
    const [currentJob,setCurrentJob] = useState(null)
    useEffect(() => {
        if(data && data.length > 0){
            //set the default job to the first job in the list
            setCurrentJob(data[0])
        }
    },[])
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Something went wrong</div>
    }
   
   
    console.log(data)
    const handleCurrentJob = (job) => {
        console.log(job)
        console.log("this is current job",currentJob)
        setCurrentJob(data.filter((jobPost) => jobPost.job_id == job)[0])
    }
    return (
        <>
        <br />
        <JobSearchBar/>
        
            <div className='job-search-container'>
                
                <div className="job-search-left">
                    <div className="job-search-left-top">
                        <h1>Job Search</h1> 
                        <p>Sort by : relevance - date</p>    
                        </div>
                        <div className='job-search-results'>
                        {data && data.map((job) => (
                            <><div onClick={() => {
                                handleCurrentJob(job.job_id)
                            }} className='job-card'>
                                <h4>{job.job_title}</h4>
                                <p>{job.name}</p>
                                <div className="job-title-feature">
                                    <div className='job-pay'>
                                        <p>{job.job_salary} {job.job_currency} {job.job_pay_frequency}</p>
                                    </div>
                                    <div className="job-employment-type">
                                        <p>{job.job_employment_type}</p>
                                    </div>
                                </div>
                                <p>{job.job_description}</p>
                               
                                </div></>


                        ))}
                        </div>
                </div>
                {currentJob && 
                 <div className="job-search-right">
                  
                 <div className="current-job-header">
                 <h1>{ currentJob.job_title}</h1>
                         <p>{currentJob.name}</p>
                         <h4>Chicago,Il</h4>
                         <p>{currentJob.job_employment_type}</p>
                     
                 </div>
                 <div className="right-wrapper">
                 <div className="current-job-description">
                     <h1>Job Description</h1>
                     <p>{currentJob.job_description}</p>
                 </div>
                 <div className="current-job-pay">
                     <h1>Pay</h1>
                     <p>{currentJob.job_salary} {currentJob.job_currency} {currentJob.job_pay_frequency}</p>
                     
                 </div>
                 <div className="current-job-experience">
                     <h1>Experience</h1>
                     <p>{currentJob.job_experience}</p>
                     
                 </div>
                 <div className="current-job-education">
                     <h1>Experience</h1>
                     <p>{currentJob.job_education}</p>
                     
                 </div>
                        
             </div>
             </div> }
               
            </div>

           
        </>
    )
}

export default JobsPage