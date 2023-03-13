import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserAuthGuard = () => {
    const [isRegularUser, setIsRegularUser] = React.useState(true)
    
    const token = useSelector(state => state.user.token)
    let decodedToken = null;
    useEffect(() => {
        if(token){
            let result = false;
            decodedToken = JSON.parse(atob(token.split('.')[1]))
            console.log(decodedToken)
            if(decodedToken.aud == "user"){
                result = true;
            }
            else{
                result = false;
            }
            setIsRegularUser(result)
        }
    })
  return (

    (
        
        isRegularUser == true? <Outlet/> : <Navigate to='/login' />
    )
  )
}

export default UserAuthGuard