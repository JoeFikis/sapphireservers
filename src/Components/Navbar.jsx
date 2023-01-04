import React, { useState } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter , Link } from 'react-router-dom'


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <div className='nav-container'>
        <div className='nav-wrapper'>
            <div className='nav-logo'>
                <h1>SapphireServers</h1>
                <i class="fa-solid fa-server"></i>
            </div>
            <div className="nav-menu">
            <div className="nav-links">
              <BrowserRouter>
              <ul className='nav-links'>
                <Link to="/" className='nav-btn' onClick={handleClick}>Home</Link>
                <Link to="about" className='nav-btn' onClick={handleClick}>About</Link>
                <a href="https://dash.sapphireservers.net" className='nav-btn'>Sign-Up</a>
                <div className="dot"></div>
              </ul>
                </BrowserRouter>
            </div>
            </div>
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
    </div>
  )
}

export default Navbar;