import axios from 'axios'
export const validateConfirmationToken = (token) => {
    return axios.get(`http://localhost:4000/api/v1/users/confirm/${token}`)
}
export const registerNewUser = (user)=> {
    console.log("this is user in registerNewUser", user)
    return axios.post(`http://localhost:4000/api/v1/users/register`, user)
}