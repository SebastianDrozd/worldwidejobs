import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../redux/slices/userSlice';
import { loginUser, refreshToken } from '../utils/requests';
import '../css/login.css'
const Login = () => {
    const dispatch = useDispatch()
  const email = useRef();
  const password = useRef();
   const [response,setResponse] = useState(null)
    const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
        email: email.current.value,
        password: password.current.value
    }
    loginUser(user)
    .then(res => {
        console.log(res.data)
        setResponse(res.data.token)
        dispatch(setLoggedIn({token: res.data.token}))
        if(res.data.type == "user"){
            navigate('/uDashboard')
        }
        else if(res.data.type == 'business'){
            navigate('/bDashboard')
        }

    })
    .catch(err => {})
  }
  const handleRefreshToken = (e) => {
    e.preventDefault();
    refreshToken().then(res => {
        console.log(res.data.accessToken)
        setResponse(res.data.accessToken)
    })
  }
  return (
    <>
    <h1>Login Page</h1>
    <input ref={email} type="text" placeholder='email' />
    <input ref={password} type="text" placeholder='password' />
    <button onClick={handleLogin}>Login</button>
    {
        response && <p>Access token: {response}</p>
    }
   
    {response && <button onClick={handleRefreshToken}>Send refresh token and get new Access token</button>}
    </>
  )
}

export default Login