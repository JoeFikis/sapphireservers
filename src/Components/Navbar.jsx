import React from 'react'
import './Styles/Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-wrapper'>
            <div className='nav-logo'>
                <h1>SapphireServers</h1>
                <i></i> 
            </div>
            <div className="nav-links">
                <a href="/" className='nav-btn'>Home</a>
                <a href="/" className='nav-btn'>About</a>
                <a href="/" className='nav-btn'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar