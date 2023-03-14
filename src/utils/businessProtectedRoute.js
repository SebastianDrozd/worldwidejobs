import React from 'react'
import { Navigate } from 'react-router-dom';

const BusinessProtectedRoute = ({account,children}) => {
    console.log("this is account",account)
    if (account != "business") {
        return <Navigate to="/login" replace />;
        
        
      }
    
      return children;
}

export default BusinessProtectedRoute