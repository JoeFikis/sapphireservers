import React from 'react'
import './signup.css'
import Signupbtn from '../BTN/signupbtn'

function Signup() {
  return (
    <>
     <div className="signup-container">
      <div className="box-container">
      <div className="signup-wrapper">
        <div className="signup-head">
          <div className="text">
            <div className="textcontainer-wrapper">
          <h1>
            SapphireServers
          </h1>
          <h2>
            Start your server now.
          </h2>

          <div className="signup-btn">
          <Signupbtn />
          </div>
          </div>
          </div>   
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default Signup