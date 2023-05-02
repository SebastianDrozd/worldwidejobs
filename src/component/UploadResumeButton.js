import React from 'react'
import { useSelector } from 'react-redux';
import { useUploadUserResumeMutation } from '../redux/resumes';

const UploadResumeButton = () => {
    const userId = useSelector((state) => state.user.id);
    const [uploadUserResume] = useUploadUserResumeMutation();
     const file = useRef();
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
  return (
    <button onClick={handleUploadResume}>Upload File</button>
  )
}

export default UploadResumeButton