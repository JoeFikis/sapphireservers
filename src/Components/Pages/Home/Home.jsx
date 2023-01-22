import React from 'react'
import './Home.css'
import Cards from './Components/Cards'
import Spacer from '../../spacer/spacer'
import Signup from './Components/signup'

function Home() {
  return (
    <>
    <div className='header-container'>
      <div className="header-wrapper">
        <div className="header-text">
          <h1>
            SapphireServers
          </h1>
        
        <div className="header-description">
          <h2>A premium game server host that provides secure fast premium servers.</h2>
        </div>
        </div>
        <div className='header-sign-up'>
        <span><a href="https://dash.sapphireservers.net/"></a></span>
        </div>
      </div>
    </div>
    <Cards />
    <Spacer/>
    <Signup />
    </>
  )
}

export default Home