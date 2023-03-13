import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
     <div>LandingPage</div>
    <Link to='/login'>Login</Link>
    <br />
    <Link to='/register'>Register</Link>
    </>
   
  )
}

export default LandingPage