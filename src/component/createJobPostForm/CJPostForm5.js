import React, { useRef,useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/createJobPostForm/createJobPostingPage5.css";
import { setDeleteRequirements, setJobRequirements } from "../../redux/slices/createJobPostSlice";

const CJPostForm5 = ({ setFormData, formData }) => {
  const [requirements, setRequirements] = useState([]);
  const [newRequirement, setNewRequirement] = useState("");
  const reqs = useSelector((state) => state.createJobPost.requirements);
 const dispatch = useDispatch()
  const req = useRef();
  function handleRequirementAdd(event) {
    event.preventDefault();
    if (req.current.value.trim() !== "") {
      setRequirements([...requirements, req.current.value]);
      dispatch(setJobRequirements(req.current.value))
      setNewRequirement("");
    }
    console.log(requirements);
  }

  function handleInputChange(event) {
    setNewRequirement(event.target.value);
  }
  const handleDeleteRequirement = (index) => {
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    dispatch(setDeleteRequirements(index))
    setRequirements(newRequirements);
  }
  return (
    <>
      <div class="job-requirements-container">
        <div className="cjpf1-header">
          <h4>Job Requirements</h4>
        </div>
        <p className="heading-sub">
          Enter some job requirements for your posting
        </p>

        <div className="cj5-button">
          <input
            ref={req}
            type="text"
            class="requirements-input"
            placeholder="Enter a requirement"
          />
          <button onClick={handleRequirementAdd} class="add-requirement-btn">
            Add
          </button>
        </div>
        {
            reqs.length >  0 && 
            <div className="requirements-list">
            {reqs.map((requirement,index) => (
                <div className="requirement-item">
                    <p>{requirement}</p> 
                    <button onClick={() => handleDeleteRequirement(index)} className="delete-requirement-btn">X</button>
                </div>
            )
            )}
        </div>
        }
      
      </div>
    </>
  );
};

export default CJPostForm5;
