import React from "react";
import "../css/dropdownfilters.css"
const DropDownFilters = () => {
  return (
    <div class="dropdown-container">
      <div class="dropdown">
        <button class="dropdown-btn">Date Posted  <i class="fas fa-file-alt"></i></button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Job Type <i class="fas fa-file-alt"></i></button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Experience level <i class="fas fa-file-alt"></i></button>
        <div class="dropdown-content-filter">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropdown-btn">Sort By <i class="fas fa-file-alt"></i></button>
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
