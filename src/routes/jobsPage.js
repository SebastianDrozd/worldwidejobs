import React, { useState } from 'react'
import "../css/jobsPage.css"
import { useGetJobPostsQuery } from '../redux/jobPost';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import JobSearchBar from '../component/jobSearchBar';
const JobsPage = () => {
    const { data, error, isLoading } = useGetJobPostsQuery();
    const [currentJob,setCurrentJob] = useState(null)
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
                                <p>{job.job_description}</p>
                                </div></>
                        ))}
                        </div>
                </div>
                <div className="job-search-right">
                            <h1>{currentJob && currentJob.job_title}</h1>
                </div>
            </div>

           
        </>
    )
}

export default JobsPage