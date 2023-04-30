import React from 'react'
import "../css/businessMyJobs.css"

import { useSelector } from 'react-redux';
import { useGetJobsByBusinessIdQuery } from '../redux/jobPost';
const BusinessMyJobs = () => {
    const businessId = useSelector(state => state.business.businessId)
    const { data, error, isLoading } = useGetJobsByBusinessIdQuery(businessId)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Something went wrong</div>
    }
    return (
        <>
            <div className="businessMyJobs-container">
                <h2 className='my-jobs-title'>My Active Jobs</h2>
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