import React, { Children, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { getUserInformation } from './requests';

const UserProtectedRoute = ({ account, children }) => {
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [done, setDone] = useState(false);
  //const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const decode = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
     
      getUserInformation(decode.sub, localStorage.getItem('token')).then(res => {
     
        if (res.data[0].type === "user") {
         
        }
        else{
          setIsUser(false)
        }
      })
        .catch(err => {
          setIsUser(false)
        })
    }
    else{
      setIsUser(false)
    }
    setLoading(false);
  
  }, [done]);

  useEffect(() => {

  }, [isUser])

  if (loading) {
    return <div>isLoading</div>
  }
  else if (isUser) {
    return children;
  }
  else {
    return <Navigate to="/login" />
  }

}

export default UserProtectedRoute