import React, { useState } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter , Link } from 'react-router-dom'


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <BrowserRouter>
    <div className='nav-container'>
        <div className='nav-wrapper'>
            <div className='nav-logo'>
                <h1>SapphireServers</h1>
                <i class="fa-solid fa-server"></i>
            </div>
            <div className="nav-link-wrapper">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"  activeClassName="active" className="nav-links" onClick={handleClick}  >
                About
              </Link>
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
    </BrowserRouter>
  )
}

export default Navbar;