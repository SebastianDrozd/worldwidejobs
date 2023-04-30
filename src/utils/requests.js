import axios from 'axios'
axios.defaults.withCredentials = true
export const validateConfirmationToken = (token) => {
    return axios.get(`http://localhost:4000/api/v1/users/confirm/${token}`)
}
export const registerNewUser = (user)=> {
    return axios.post(`http://localhost:4000/api/v1/users/register`, user)
}
export const loginUser = (user) => {
    return axios.post(`http://localhost:4000/api/v1/users/login`, user)
}
export const refreshToken = ()=> {
    return axios.post(`http://localhost:4000/api/v1/users/refresh`)
}
export const sendReCaptchaToken = (token) => {
    return axios.post(`http://localhost:4000/api/v1/users/recaptcha`, {token})
}
export const getUserInformation = (id,accessToken) => {    
    return axios.get(`http://localhost:4000/api/v1/users/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
}