import React from 'react'
import './signup.css'
import Signupbtn from './signupbtn'

function Signup() {
  return (
    <>
     <div className="signup-container">
      <div className="box-container">
      <div className="signup-wrapper">
        <div className="signup-head">
          <div className="text">
          <h1>
            SapphireServers
          </h1>
          <h2>
            Start your server now.
          </h2>
          </div>
          <div className="signup-btn">
          <Signupbtn />
          </div>   
          <div className="icon-container">
          <i class="fa-solid fa-server"></i>
          </div>  
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Signup