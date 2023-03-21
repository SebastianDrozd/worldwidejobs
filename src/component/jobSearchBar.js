import React from 'react'
import "../css/jobSearchBar.css"
const JobSearchBar = () => {
  return (
    <div className="input-group2">
     <input placeholder='Search by job type,tags, or description' className='job-type search2' type="text" />
     <input placeholder='Search by location or remote' className='place search2' type="text" />
     <button >Search</button>
    </div>
  )
}

export default JobSearchBar