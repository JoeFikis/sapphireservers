import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        {/* Billing */}
        <div className="billing">
          <h2> Billing</h2>
          <div className="plans">
          <button><a href="/">Plans</a></button>
          </div>
          <div className="billing_panel">
            <button><a href="https://dash.sapphireservers.net">Billing Panel</a></button>
          </div>
        </div>
        {/* Legal */}
        <div className="legal">
          <h2>Legal</h2>
          <div className="TOS">
          <button><a href="/">TOS</a></button>
          </div>
          <div className="privacy">
            <button><a href="https://dash.sapphireservers.net">Privacy And Policy</a></button>
          </div>
        </div>
        {/* Social */}
        <div className="Social">
          <h2>Soical</h2>
          <div className="Discord">
          <button><a href="/">Discord</a></button>
          </div>
          <div className="Yt">
            <button><a href="https://dash.sapphireservers.net">Youtube</a></button>
          </div>
        </div>
        <div className="name">
          <h2>SapphireServers</h2>
        </div>
      </div>
    </div>
  )
}

export default footer