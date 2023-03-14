import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserAuthGuard = () => {
    const [isRegularUser, setIsRegularUser] = React.useState(false)
    
    useEffect(() => {
        console.log("this is token in authgaruad", localStorage.getItem('token'))
        if(localStorage.getItem('token')){
           let token = localStorage.getItem('token')
            let decodedToken = JSON.parse(atob(token.split('.')[1]))
            console.log("decodedtoken in auth guard",decodedToken)
            if(decodedToken.aud == "user"){
                console.log("it does equal user")
                setIsRegularUser(true)
            }
            else{
                console.log("it does not equal user")
                setIsRegularUser(false)
            }
        }
       
    }, [])
    if(isRegularUser){
        console.log("isRegularUser is true")
        return (<Outlet/>)
    }
  else return (<Navigate to='/login' />)
}

export default UserAuthGuard