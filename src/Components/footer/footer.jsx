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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer