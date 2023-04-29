import React, { useRef } from "react";
import "../css/UserResumes.css";
import {
  useGetUserResumesQuery,
  useUploadUserResumeMutation,
} from "../redux/resumes";
import { useSelector } from "react-redux";
import pdf from "../assets/pdf.png"
const UserResumes = () => {
  const userId = useSelector((state) => state.user.id);
  const { data, error, isLoading } = useGetUserResumesQuery(userId);
  const [uploadUserResume] = useUploadUserResumeMutation();
  const file = useRef();
  const handleUploadResume = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("avatar", file.current.files[0]);
    form.append("user_id", userId);
    try {
      const response = await uploadUserResume(form).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
 
  return (
    <>
      <div className="resumes-wrapper">
        <h2>My Resumes</h2>
        <form action="" enctype="multipart/form-data">
          <input ref={file} type="file" id="myFile" name="avatar" />
          <input onClick={handleUploadResume} type="submit" />
        </form>
        <div className="resumes-list-wrapper">
          {data && data.map((resume) => 
          <div className="resume-item">
            <img src={pdf} height={50} width={50} alt="" />
            <h4>{resume.resume_original_name}</h4>
            <p className="added">Added on: {resume.resume_uploaded}</p>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default UserResumes;
