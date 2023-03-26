import React from "react";
import "../css/dropdownfilters.css"
const DropDownFilters = () => {
  return (
    <div class="dropdown-container">
      <div class="dropdown">
        <button class="dropdown-btn">Date Posted</button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Job Type</button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Experience level</button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Sort By</button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
    </div>
  );
};

export default DropDownFilters;
