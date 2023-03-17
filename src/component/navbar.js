import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                <li><a href="/login">login</a></li>
                <li><a href="/register">register</a></li>
            </ul>
        </div>
    )
}

export default Navbar