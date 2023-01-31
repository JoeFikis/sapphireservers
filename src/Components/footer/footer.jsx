import React from 'react'
import './footer.css'
import { Column, Heading, Row } from './FooterStyles'

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-links">
            {/* Billing Links */}
            <div className="billing">
              <Heading>Billing</Heading>
              <a href="https://dash.sapphireservers.net/" className='Dashboard'>Dashboard</a>
              </div>
               {/* Legal Links */}
            <div className="legal">
              <Heading>Legal</Heading>
              <a href="/" className='TOS'>TOS</a>
              </div>

               {/* Website Links Links */}
            <div className="links">
              <Heading>Links</Heading>
              <a href="/about" className='About'>About</a>
              <a href="/" className='Plans'>Plans</a>
              </div>
          </div>
          <div className="name">
            <Heading>SapphireServers</Heading>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer