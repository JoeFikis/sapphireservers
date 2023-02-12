import React from 'react'
import './Plans.css'

function Plans() {
  return (
    <div>
        <div className="plans-container">
            <div className="plans-box-container">
            <div className="plans-wrapper">
              <div className="stuff-container">
               <div className="header">
                <h1>
                    Servers starting at ___ $
                </h1>
                <h2>
                    Order Now
                </h2>
               </div>
               <div className="btn">
                <button>
                <a href="https://dash.sapphireservers.net/">
                View Plans
                </a>
                </button>
                </div>
              </div>
              <div className="icon-container">
              <i class="fa-solid fa-server"></i>
              </div>
               </div>
        </div>
    </div>
    </div>
  )
}

export default Plans