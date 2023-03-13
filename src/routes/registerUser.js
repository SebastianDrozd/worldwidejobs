import React, { useRef } from 'react'
import { registerNewUser } from '../utils/requests';

const RegisterUser = () => {
    let username = useRef();
    let password = useRef();
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

    return (
        <>
            <h1>Register User</h1>
            <input ref={username} placeholder="username" type="text" />
            <input ref={email} placeholder="email" type="text" />
            <input ref={password} type="text" placeholder='password' />
            <input ref={firstName} type="text" placeholder='firstname' />
            <input ref={lastName} type="text" placeholder='lastname' />
            <label for="cars">Account Type:</label>
            <select onChange={() => {
                console.log(type.current.value)
            }} ref={type} name="cars" id="cars">
                <option value="none" selected disabled hidden>Select an Option</option>
                <option value="user">User</option>
                <option value="business">Business</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default RegisterUser