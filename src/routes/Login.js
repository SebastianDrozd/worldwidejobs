import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../redux/slices/userSlice';
import { loginUser, refreshToken } from '../utils/requests';
import '../css/login.css'
import { useLoginMutation } from '../redux/auth/authApiSlice';
import { setCredentials } from '../redux/auth/authSlice';
const Login = () => {
  const dispatch = useDispatch()
  const email = useRef();
  const password = useRef();
  const [response, setResponse] = useState(null)
  const [userNotFoundError,setUserNotFoundError] = useState(false)
  const [wrongPasswordError,setWrongPasswordError] = useState(false)
  const navigate = useNavigate();

  const [login,{isLoading}] = useLoginMutation()

  const handleLogin = async (e) => {
    e.preventDefault();
    let user = {
      email: email.current.value,
      password: password.current.value
    }
    try{
      const userData = await login(user).unwrap();
      console.log("This is userdata",userData)
      dispatch(setCredentials({user:userData.email,token:userData.token,type:userData.type}))
      if(userData.type == "user"){
        navigate('/uDashboard')
      }
      else if(userData.type == "business"){
        navigate('/bDashboard')
      }
    } catch(err){
      console.log("this is error message",err)
      if(err.status == 404){
        setUserNotFoundError(true)
        setTimeout(() => {
          setUserNotFoundError(false)
        }, 4000);
      }
      else if(err.status == 401){
        setWrongPasswordError(true)
        setTimeout(() => {
          setWrongPasswordError(false)
        }, 4000);
      }
    }

   /*  loginUser(user)
      .then(res => {
        console.log(res.data)
        setResponse(res.data.token)
        dispatch(setLoggedIn({ token: res.data.token }))
        //set token to localstorage
        localStorage.setItem('token', res.data.token)
        if (res.data.type == "user") {
       
            navigate('/uDashboard')
       
          
         
        }
        else if (res.data.type == 'business') {
       
            navigate('/bDashboard')
        
         
        }

      })
      .catch(err => { 
        if(err.response.status == 404){
          setUserNotFoundError(true)
          setTimeout(() => {
            setUserNotFoundError(false)
          }, 4000);
          
        }
        else if(err.response.status == 401){
          setWrongPasswordError(true)
          setTimeout(() => {
            setWrongPasswordError(false)
          }, 4000);
        }
      }) */
  }
  const handleRefreshToken = (e) => {
    e.preventDefault();
    refreshToken().then(res => {
      console.log(res.data.accessToken)
      setResponse(res.data.accessToken)
    })
  }
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register')
  }

  useEffect(() => {
    email.current.focus();
  },[])



  return (
    <>
      <div className='login-page'>
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              {userNotFoundError && <p style={{color:'red'}}>A user could not be found with that email</p>}
              <input ref={email} type="email" placeholder="Email" value="srankoin3@localhost" />
              <input ref={password} type="password" placeholder="Password" value="12345" />
              {wrongPasswordError && <p style={{color:'red'}}>You have entered an incorrect password for this account</p>}
              <a href="#">Forgot your password?</a>
              <button onClick={handleLogin}>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button  class="ghost" id="signIn">Sign In</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button onClick={handleRegister} class="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login