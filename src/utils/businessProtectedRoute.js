import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const BusinessProtectedRoute = ({account,children}) => {
  const [loading, setLoading] = useState(true);
  const [isBusiness, setIsBusiness] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('token')){
      const decode = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
      console.log("this is decode in auth", decode)     
      if(decode.aud === "business"){
        console.log("this is business account")
        setIsBusiness(true)
      }
    }
    setLoading(false);
  },[]);
 
  if (loading) {
    return <div>isLoading</div>
  }
  else if (isBusiness) {
    return children;
  }
  else {
    return <Navigate to="/login" />
  }
}

export default BusinessProtectedRoute