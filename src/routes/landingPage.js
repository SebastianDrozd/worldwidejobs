import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/landingPage.css";
import axios from "axios";
import { useGetLocationMutation } from "../redux/locationFinder";
import { useGetJobTitlesMutation } from "../redux/jobPost";
import SearchBar from "../component/searchbar/SearchBar";

const LandingPage = () => {
  const navigate = useNavigate();
  const [getLocation, { isLoading }] = useGetLocationMutation();
  const [jobTitles, setJobTitles] = useState([]);
  const [getJobTitles] = useGetJobTitlesMutation();
  const [locations, setLocations] = useState([]);
  const handleSearch = () => {
    if (keyword.current.value === "" && location.current.value === "") return;
    const keywordValue = `jobType=${keyword.current.value}`;
    const locationValue = `location=${location.current.value}`;
    const searchQuery = keywordValue + "&" + locationValue;
    navigate(`/jobs/search?${searchQuery}`);
    navigate(
      `/jobs/search?jobType=${keyword.current.value}&location=${location.current.value}`
    );
  };
  const keyword = useRef();
  const location = useRef();

  const handleLocation = async () => {
    if (location.current.value.length > 4) {
      const response = await getLocation({
        location: location.current.value,
      }).unwrap();
      setLocations(response);
    }
  };
  const handleJobType = async () => {
    if (keyword.current.value.length > 4) {
      const response = await getJobTitles({
        jobTitle: keyword.current.value,
      }).unwrap();
      console.log(response);
      setJobTitles(response);
    }
  };

  const handleItemClick = (location2) => {
    console.log("this is location", location2);
    location.current.value =
      location2.city + "," + location2.state + "," + location2.country;
    setLocations([]);
  };

  return (
    <>
      <div className="landing-page-container">
        <h1 className="title">World Wide Jobs</h1>
        <p className="title-sub">
          Your premier destination for jobs worldwide!
        </p>

    <SearchBar/>

      </div>
    </>
  );
};

export default LandingPage;
