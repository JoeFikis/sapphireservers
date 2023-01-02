import React, { useState } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter} from 'react-router-dom'

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
                <a href="/" className='nav-btn' onClick={handleClick}>Home</a>
                <a href="../about.js" className='nav-btn' onClick={handleClick}>About</a>
                <a href="/" className='nav-btn' onClick={handleClick}>Contact</a>
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

export default Navbar