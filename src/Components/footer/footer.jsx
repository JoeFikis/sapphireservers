import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div className="billing">
          <h2> Billing</h2>
          <div className="plans">
          <button><a href="/">Plans</a></button>
          </div>
          <div className="billing_panel">
            <button><a href="https://dash.sapphireservers.net">Billing Panel</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer