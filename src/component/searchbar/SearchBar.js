import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/searchbar/SearchBar.css";
import { useGetJobTitlesMutation } from "../../redux/jobPost";
import { useGetLocationMutation } from "../../redux/locationFinder";
const SearchBar = () => {
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [jobSuggestions, setJobSuggestions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [getJobTitles] = useGetJobTitlesMutation();
  const jobType = useRef();
  const location = useRef();
  const [jobTypeString,setJobTypeString] = useState("");
  const [getLocation, { isLoading }] = useGetLocationMutation();
  const navigate = useNavigate()

  const handleJobType = async(e) => {
    if(jobType.current.value.length > 4){
  
        setShowJobTypeDropdown(true);
      const response = await getJobTitles({
        jobTitle: jobType.current.value,
      }).unwrap();
      setJobSuggestions(response);
    }
    else{
        setShowJobTypeDropdown(false);
    }
  };
  const handleJobTypeClick = (job) => {
   
    setJobTypeString(job.job_title)
    jobType.current.value = job.job_title;
    setShowJobTypeDropdown(false);
  };
  const handleJobLocation = async(e) => {
    if (location.current.value.length > 4) {
        setShowLocationDropdown(true);
        const response = await getLocation({
          location: location.current.value,
        }).unwrap();
        setLocations(response);
      }
      else{
            setShowLocationDropdown(false);
      }
  };
  const handleJobLocationClick = (geo) => {
    location.current.value = geo.city + "," + geo.state + "," + geo.country;
    setShowLocationDropdown(false);
  }
  const handleSearchButton = () => {
    navigate(`/jobs/search?jobType=${jobTypeString}&location=${location.current.value}`)
  };
  return (
    <>
      <div class="search-bar">
        <div className="search-input-group">
        <input
            ref={jobType}
          type="text"
          class="search-input"
          placeholder="Job title, keywords, or company"
            onChange={handleJobType}
        />
        {showJobTypeDropdown && (
          <div className="dropdown-content">
            {jobSuggestions.map((suggestion, index) => (
              <a onClick={() => handleJobTypeClick(suggestion)} key={index}>{suggestion.job_title}</a>
            ))}
          </div>
        )}

        <input
       ref={location}
          type="text"
          class="search-input"
          placeholder="City, state, or zip code"
          onChange={handleJobLocation}
        />
        {showLocationDropdown && (
            <div className="dropdown-content2">
                {locations.map((location, index) => (
                    <a onClick={() => handleJobLocationClick(location)} key={index}>{location.city},{location.state},{location.country}</a>
                ))}
            </div>
        )}
            
        </div>
        <button onClick={handleSearchButton} class="search-button">Search</button>

      </div>
    </>
  );
};

export default SearchBar;
