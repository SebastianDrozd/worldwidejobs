import React from 'react'
import "../css/businessMyJobs.css"
import { createStyles, Table, Progress, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useGetJobsByBusinessIdQuery } from '../redux/jobPost';
const BusinessMyJobs = () => {
    const businessId = useSelector(state => state.business.businessId)
    console.log("businessId: " + businessId)
    const { data, error, isLoading } = useGetJobsByBusinessIdQuery(businessId)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Something went wrong</div>
    }
    console.log(data)
    return (
        <>
            <div className="businessMyJobs-container">
                <h1 className='my-jobs-title'>My Jobs</h1>
                <table className='my-jobs-table'>
                    <tr>
                        <th>Job Title</th>
                        <th>Date posted</th>
                        <th>status</th>
                        <th>Applicants</th>
                        <th></th>
                    </tr>
                    {data && data.map((job) => (<>
                        <tr>
                            <td>{job.job_title}</td>
                            <td>{job.job_date_created}</td>
                            <td>active</td>
                            <td>0</td>
                            <td><button>view</button></td>
                        </tr>
                    </>))}
                  
                </table>
            </div>

        </>
    )
}

export default BusinessMyJobs