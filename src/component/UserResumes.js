import React, { useRef } from "react";
import "../css/UserResumes.css";
import {
  useDeleteUserResumeMutation,
  useEditUserResumeMutation,
  useGetUserResumesQuery,
  useUploadUserResumeMutation,
} from "../redux/resumes";
import { useSelector } from "react-redux";
import pdf from "../assets/pdf.png"
const UserResumes = () => {
  const userId = useSelector((state) => state.user.id);
  const [wantsEdit, setWantsEdit] = React.useState(false);
  const [newResumeName, setNewResumeName] = React.useState("");
  const { data, error, isLoading } = useGetUserResumesQuery(userId);
  const [uploadUserResume] = useUploadUserResumeMutation();
  const [deleteUserResume] = useDeleteUserResumeMutation();
  const [editUserResume] = useEditUserResumeMutation();
  const file = useRef();
  const name = useRef();
  const handleUploadResume = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("avatar", file.current.files[0]);
    form.append("user_id", userId);
    try {
      const response = await uploadUserResume(form).unwrap();
     
    } catch (error) {
  
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDeleteResume = async (resumeId) => {
    console.log(resumeId)
    try {
      const response = await deleteUserResume(resumeId).unwrap();
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditResume = async (resumeId,org_name) => {
    setNewResumeName(org_name)
    setWantsEdit(true);

  };

  const handleSaveEditedResume = async (resumeId) => {
      const obj = {
        resumeId : resumeId,
        newName : newResumeName,
      }
    try {
      const response = await editUserResume(obj).unwrap();
      setWantsEdit(false);
      console.log(response)
      console.log("edited")

    }catch(error){
      console.log(error)
    }
  };
 
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
            <img className="resume-logo" src={pdf} height={50} width={50} alt="" />
            {!wantsEdit ? <h4>{resume.resume_original_name}</h4> : <div className="edit-block"><input onChange={e => setNewResumeName(e.target.value)} ref={name} type="text" value={newResumeName} /><button onClick={() => {handleSaveEditedResume(resume.resume_id)}}>save</button></div>}
            <p className="added">Added on: {new Date(resume.resume_uploaded).toDateString()}</p>
            <button onClick={() => { handleEditResume(resume.resume_id,resume.resume_original_name)}} className="resume-edit-button">Edit</button>
            <button onClick={(() => { handleDeleteResume(resume.resume_id)})} className="resume-delete-button">Delete</button>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default UserResumes;
