import React from 'react'
import './Home'


function Home() {
  return (
    <>
    <div className='header-container'>
      <div className="header-wrapper">
        <div className="header-text">
          <h1>
            SapphireServers
          </h1>
        </div>
        <div className="header-description">
          <h2>A premium game server host that provides secure fast premium servers.</h2>
        </div>
        <div className='header-sign-up'>
          <button><a href="dash.sapphireservers.net">Sign-Up</a></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home