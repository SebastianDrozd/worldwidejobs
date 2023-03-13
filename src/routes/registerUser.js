import React, { useRef } from 'react'
import { registerNewUser, sendReCaptchaToken } from '../utils/requests';
import ReCAPTCHA from "react-google-recaptcha";
import "../css/registerUser.css"
import { useNavigate } from 'react-router-dom';
const RegisterUser = () => {
    const [reCaptchaError, setReCaptchaError] = React.useState(false)
    const [firstNameError, setFirstNameError] = React.useState(false)
    const [lastNameError, setLastNameError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError,setPasswordError]  = React.useState(false)
    const navigate = useNavigate()
    let username = useRef();
    let password = useRef();
    let passwordConfirm = useRef();
    let firstName = useRef();
    let lastName = useRef();
    let email = useRef();
    let type = useRef();

    const handleSubmit = (e) => {
        let user = {
            firstname: firstName.current.value,
            lastname: lastName.current.value,
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            type: type.current.value
        }
        console.log(user)
        registerNewUser(user)
            .then(res => {
                console.log(res)
                console.log("you have successfully registered, check your email")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleCaptcha = (value) => {
        console.log(value)
        sendReCaptchaToken(value)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login')
    }
    const handleFirstName = (e) => {
        e.preventDefault();
        if (firstName.current.value.length < 3) {
            setFirstNameError(true)
        }
        else {
            setFirstNameError(false)
        }
    }
    const handleSignUp = (e) => {
        if (firstName.current.value.length < 3) {
            //do a timeout function to show the error message for 3 seconds
            setFirstNameError(true)
            setTimeout(() => {
                setFirstNameError(false)
            }, 3000)
           
        }
         if(lastName.current.value.length < 2){
            setLastNameError(true)
            setTimeout(() => {
                setLastNameError(false)
            }, 3000)
        }
        
    }

    return (
        <div className='reg-container'>
            <div class="container right-panel-active" id="container">
                <div class="form-container sign-up-container">
                    <form action="">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <br />
                        
                        <input  ref={firstName} type="text" id="firstname" placeholder="First Name" autoFocus required/>
                      
                        <input ref={lastName} type="text" placeholder="Last Name" required />
                       
                        <input type="email" placeholder="Email" required/>
                        <input type="password" placeholder="Password" required/>
                        <input type="password" placeholder="Confirm Password" required/>
                        <br />
                        <ReCAPTCHA sitekey="6LcVGvskAAAAAEEosQDhQ6S564ixi4DBbnA_A4nA" onChange={handleCaptcha}/>
                        <br />
                        <button onClick={handleSignUp}>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={handleLogin} class="ghost" id="signIn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterUser