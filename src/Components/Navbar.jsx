import React, { useState } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter , NavLink } from 'react-router-dom'


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <BrowserRouter>
    <div>
    <div className='nav-container'>
        <div className='nav-wrapper'>
            <div className='nav-logo'>
                <h1>SapphireServers</h1>
                <i class="fa-solid fa-server"></i>
            </div>
            <div className="nav-link-wrapper">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <a>
            <li className="nav-item">
            <a href="/"  activeClassName="Active" className='nav-links'>Home</a>
            </li>
            </a>
            <li className="nav-item">
                <a href="/about"  activeClassName="Active" className='nav-links'>About</a>
              </li>
              <li className="nav-item">
              <a href="https://dash.sapphireservers.net"  activeClassName="Active" className='nav-links'>Sign-Up</a>
              </li>
          </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        </div>
        </div>
    </BrowserRouter>
  )
}

export default Navbar;