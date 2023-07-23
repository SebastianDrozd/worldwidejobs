import React, { useEffect, useState } from "react";
import "../css/jobsPage.css";
import {
  useGetJobPostSearchQuery,
  useGetJobPostsQuery,
} from "../redux/jobPost";
import { useLocation, useNavigate } from "react-router-dom";
import JobSearchBar from "../component/jobSearchBar";
import { useParams } from "react-router-dom";
import SearchBar from "../component/searchbar/SearchBar";
import DropDownFilters from "../component/DropDownFilters";
import JobCard from "../component/JobCard";
const JobsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  const url = window.location.href;
  const query = url.substring(url.indexOf("?") + 1);
  //const { data, error, isLoading } = useGetJobPostsQuery();
  const { data, error, isLoading } = useGetJobPostSearchQuery(query);
  const [currentJob, setCurrentJob] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) {
      //set the default job to the first job in the list
      setCurrentJob(data[0]);
    }
  }, [data]);

  if (error) {
    return <div>Something went wrong</div>;
  }


  const handleCurrentJob = (job) => {

    setCurrentJob(data.filter((jobPost) => jobPost.job_id == job)[0]);
  };


  const handleApply = (id) => {
    navigate(`/applyJob/${id}`, { state: { job: currentJob } });
  }

  return (
    <>
      <br />
      <SearchBar />
      <DropDownFilters />
      <div className="job-search-container">
        <div className="job-search-left">
          <div class="listing-header">
            <div class="listing-header-left">
              
              <span class="listing-header-count">{data && data.length} jobs found</span>
            </div>
            <div class="listing-header-right">
              <span class="listing-header-sort">Sort by:</span>
              <a href="#" class="listing-header-sort-link">
                Relevance
              </a>
              <span class="listing-header-divider">|</span>
              <a href="#" class="listing-header-sort-link">
                Date
              </a>
            </div>
          </div>

          <div className="job-search-results">
            {isLoading && 
             <div class="job-post-skeleton">
             <div class="job-post-skeleton__header">
               <div class="job-post-skeleton__company"></div>
               <div class="job-post-skeleton__location"></div>
             </div>
             <div class="job-post-skeleton__body">
               <div class="job-post-skeleton__title"></div>
               <div class="job-post-skeleton__description"></div>
               <div class="job-post-skeleton__requirements"></div>
             </div>
           </div>}
            {data &&
              data.map((job) => (
                <>
                  {isLoading ? (
                    <div class="job-post-skeleton">
                      <div class="job-post-skeleton__header">
                        <div class="job-post-skeleton__company"></div>
                        <div class="job-post-skeleton__location"></div>
                      </div>
                      <div class="job-post-skeleton__body">
                        <div class="job-post-skeleton__title"></div>
                        <div class="job-post-skeleton__description"></div>
                        <div class="job-post-skeleton__requirements"></div>
                      </div>
                    </div>
                  ) : (
                    <JobCard job={job} handleCurrentJob={handleCurrentJob} />
                  )}
                </>
              ))}
          </div>
        </div>
        {currentJob && (
          <div className="job-search-right">
            {/*  <h3 className="job-title">{currentJob.job_title}</h3>
              <p className="job-company">{currentJob.name}</p>
              <p className="job-location">Chicago,Il</p>
              <p>{currentJob.job_employment_type}</p>
              <button>Apply now</button> */}
            <div class="job-header">
              <div class="job-header-info">
                <h1 class="job-title">{currentJob.job_title}</h1>
                <p class="job-location">San Francisco, CA</p>
                <p class="job-type">{currentJob.job_employment_type}</p>
              </div>
              <div class="job-header-btns">
                <button onClick={() => handleApply(currentJob.job_id)} class="job-header-apply">Apply</button>
                <button class="job-header-save">Save</button>
              </div>
            </div>

            <div className="right-wrapper">
              <div className="job-post-body">
                <h3>
                  <i class="fas fa-file-alt"></i> Job Description
                </h3>
                <p>{currentJob.job_description} </p>
              </div>
              <hr />
              <div className="job-post-body">
                <h3>
                  <i style={{ color: "green" }} class="fas fa-check-circle"></i>{" "}
                  Job Requirements
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  volutpat ultricies nibh. Sed finibus enim mauris, at commodo
                  metus aliquet a. Nulla facilisi. Sed vitae urna lectus.{" "}
                </p>
                <ul className="ul-req">
                  <li>Experience with React</li>
                  <li>Experience with Redux</li>
                  <li>Experience with React</li>
                  <li>Experience with Redux</li>
                </ul>
              </div>
              <hr />
              <div className="job-post-body">
                <h3>
                  <i style={{ color: "red" }} class="fas fa-school"></i> Job
                  Education
                </h3>
                <p>{currentJob.job_education} </p>
              </div>
              <hr />
              <div className="job-post-body job-post-pay">
                <h3>
                  <i style={{ color: "orange" }} class="fas fa-briefcase"></i>{" "}
                  Job Pay
                </h3>
                <p>Job pay frequency: {currentJob.job_pay_frequency}</p>
                <p>Job pay type: {currentJob.job_pay_type}</p>
                <p>Job pay currency: {currentJob.job_currency}</p>
                <p>Job pay salary: {currentJob.job_salary}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobsPage;
