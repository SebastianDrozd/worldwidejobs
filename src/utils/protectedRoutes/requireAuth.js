import { useLocation,Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/auth/authSlice";
import React from 'react'

const RequireAuth = ({children,allowedRoles}) => {
    const token = useSelector(selectCurrentToken)
    const type = useSelector(state => state.auth.type)
    const user = useSelector(state => state.auth.user)
    const location = useLocation()
  return (
    type == allowedRoles ? 
    <Outlet/> 
    : token && user 
    ? <div><h1>Unauthized site. Your account is {type}, and you are trying to access a {allowedRoles} page</h1></div>
    : <Navigate to="/login" state={{from : location}} replace />
  )
}

export default RequireAuth