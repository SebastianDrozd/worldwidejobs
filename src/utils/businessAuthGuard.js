
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

const BusinessAuthGuard = () => {
    const [isBusinessUser, setIsBusinessUser] = React.useState(true)
    const token = useSelector(state => state.user.token)
    let decodedToken = null;
    useEffect(() => {
        if(token){
            let result = false;
            decodedToken = JSON.parse(atob(token.split('.')[1]))
            console.log(decodedToken)
            if(decodedToken.aud == "business"){
                result = true;
            }
            else{
                result = false;
            }
            setIsBusinessUser(result)
        }
    })
  return (

    (
        isBusinessUser == true? <Outlet/> : <Navigate to='/login' />
    )
  )
}

export default BusinessAuthGuard