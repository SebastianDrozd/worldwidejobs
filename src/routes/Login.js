import React, { useRef } from 'react'
import { registerNewUser } from '../utils/requests';

const Login = () => {
    let username = useRef();
    let password = useRef();
    let firstName = useRef();
    let lastName = useRef();
    let email = useRef();

    const handleSubmit = (e) => {
        let user = {
            firstname: firstName.current.value,
            lastname: lastName.current.value,
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
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
    <input ref={username} placeholder="username" type="text" />
    <input ref = {email} placeholder="email" type="text" />
    <input ref={password} type="text" placeholder='password' />
    <input ref = {firstName} type="text" placeholder='firstname'/>
    <input ref = {lastName} type="text" placeholder='lastname' />
    <button onClick = {handleSubmit}>Submit</button>
    </>
  )
}

export default Login