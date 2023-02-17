import React, { useState, useEffect } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter } from 'react-router-dom'


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    zIndex: '1',
  }



  return (
    <BrowserRouter>
    <div className={`navbar ${sticky ? 'sticky' : 'fixed'}`} style={navbarStyles}>
    <div className='nav-container'>
  
            <div className='nav-logo'>
                <h1>SapphireServers</h1>
                <i class="fa-solid fa-server"></i>
            </div>
            <div className="nav-link-wrapper">
              <div className="nav-linkss">
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