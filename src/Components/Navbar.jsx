import React, { useState } from 'react';
import './Styles/Navbar.css'
import  {BrowserRouter , NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { debounce } from '../utilities/helpers';


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'sticky',
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.3s',
    zindex: '1000',
    
  }


  return (
    <BrowserRouter>
    <div style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>
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