import React from 'react'

const LogoutButton = () => {
  
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        window.location.reload()
    }
    
  return (
    <>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default LogoutButton