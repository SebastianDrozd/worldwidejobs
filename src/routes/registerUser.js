import React, { useEffect, useRef } from 'react'
import { registerNewUser, sendReCaptchaToken } from '../utils/requests';
import ReCAPTCHA from "react-google-recaptcha";
import "../css/registerUser.css"
import { useNavigate } from 'react-router-dom';
const RegisterUser = () => {
    const [reCaptchaError, setReCaptchaError] = React.useState(false)
    const [firstNameError, setFirstNameError] = React.useState(false)
    const [lastNameError, setLastNameError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [accountSuccess, setAccountSuccess] = React.useState(false)
    const [captchaSuccess, setCaptchaSuccess] = React.useState(false)
    const [captcherror, setCaptchaError] = React.useState(false)
    const [captchaNotChecked, setCaptchaNotChecked] = React.useState(false);
    const [captchaToken, setCaptchaToken] = React.useState("");
    const [submitClicked, setSubmitClicked] = React.useState(false);
    const navigate = useNavigate()
    let password = useRef();
    let passwordConfirm = useRef();
    let firstName = useRef();
    let lastName = useRef();
    let email = useRef();
    let type = useRef();
    let recaptchaRef = useRef();

    const handleCaptcha = (value) => {
        setCaptchaToken(value)
        console.log(value)
        captchaNotChecked(false)
        sendReCaptchaToken(value)
            .then(res => {
                setCaptchaSuccess(true)
            })
            .catch(err => {
                setCaptchaSuccess(false)
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login')
    }
    const handleSignUp = (e) => {
        //check if passwords match
        if (firstName.current.value.length == 0 || lastName.current.value.length == 0 || email.current.value.length == 0 || password.current.value.length == 0 || passwordConfirm.current.value.length == 0) {
            return;
        }
        if (password.current.value != passwordConfirm.current.value) {
            e.preventDefault();
            setPasswordError(true)
            setTimeout(() => {
                setPasswordError(false)
            }, 3000)
            return;
        }
        if (captchaToken.length < 10 ) {
            console.log(captchaToken)
            console.log("recaptcha is null")
            e.preventDefault();
            setCaptchaNotChecked(true)
            setTimeout(() => {
                setCaptchaNotChecked(false)
            }, 3000)
            return;
        }
     
       
        else {
            console.log("there are no errors")
            e.preventDefault();
            let user = {
                firstname: firstName.current.value,
                lastname: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
                type: type.current.value
            }
            console.log(user)
            registerNewUser(user)
                .then(res => {
                    console.log(res)
                    setAccountSuccess(true)
                    console.log("you have successfully registered, check your email")
                })
                .catch(err => {
                    if (err.response.status == 409) {
                        setEmailError(true)
                        setTimeout(() => {
                            setEmailError(false)
                        }, 3000)
                    }
                })
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
                        {accountSuccess && <label className='success-label' for="Firstname">Your account has been created, please check your email</label>}
                        <br />
                        {emailError && <label className='error-label' for="Firstname">Email already exists</label>}

                        <input ref={firstName} type="text" id="firstname" placeholder="First Name" autoFocus required />

                        <input ref={lastName} type="text" placeholder="Last Name" required />

                        <input ref={email} type="email" placeholder="Email" required />
                        <input ref={password} type="password" placeholder="Password" pattern=".{3,}" required title="3 characters minimum" />
                        <input ref={passwordConfirm} type="password" placeholder="Confirm Password" pattern=".{3,}" required title="3 characters minimum" />
                        {passwordError && <label className='error-label' for="Firstname">Your passwords do not match</label>}
                      
                        <select onChange={() => {
                            console.log(type.current.value)
                        }} ref={type} name="cars" id="cars">
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="user">User</option>
                            <option value="business">Business</option>
                        </select>
                        <br />
                        <ReCAPTCHA ref={recaptchaRef} sitekey="6LcVGvskAAAAAEEosQDhQ6S564ixi4DBbnA_A4nA" onChange={handleCaptcha} />
                        {captchaNotChecked && <label className='error-label' for="Firstname">Please verify that you are not a robot</label>}
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