import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { validateConfirmationToken } from '../utils/requests'

const ConfirmPage = () => {
    const {token} = useParams()
    useEffect(() => {
        validateConfirmationToken(token)
        .then(res => {
            console.log(res)
            console.log("token has been validated")
        })
        .catch(err => {
            console.log(err)
            console.log("token has not been validated")
        })
    })
  return (
    <div>confirmPage</div>
  )
}

export default ConfirmPage