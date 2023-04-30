import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserAuthGuard = () => {
    const [isRegularUser, setIsRegularUser] = React.useState(false)
    
    useEffect(() => {

        if(localStorage.getItem('token')){
           let token = localStorage.getItem('token')
            let decodedToken = JSON.parse(atob(token.split('.')[1]))
          
            if(decodedToken.aud == "user"){
              
                setIsRegularUser(true)
            }
            else{
               
                setIsRegularUser(false)
            }
        }
       
    }, [])
    if(isRegularUser){
   
        return (<Outlet/>)
    }
  else return (<Navigate to='/login' />)
}

export default UserAuthGuard