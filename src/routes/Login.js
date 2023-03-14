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
  const [response, setResponse] = useState(null)
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
      .catch(err => { })
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
              <input ref={email} type="email" placeholder="Email" />
              <input ref={password} type="password" placeholder="Password" />
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