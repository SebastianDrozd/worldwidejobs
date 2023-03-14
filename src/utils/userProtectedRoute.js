import React, { Children, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const UserProtectedRoute = ({account,children}) => {
    console.log("this is account",account)
    if (account != "user") {
        return <Navigate to="/login" replace />;
        
      }
    
      return children;
}

export default UserProtectedRoute