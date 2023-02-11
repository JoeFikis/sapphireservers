import React, {useEffect} from 'react'
import './Home.css'
import Cards from './Components/Cards/Cards'
import Signup from './Components/Signup/signup'
import Signupbtn from './Components/BTN/signupbtn'
import Footer from '../../footer/footer'
import Plans from './Components/EX_Plans/Plans'
import Aos from 'aos'


function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  })
  return (
    <>
    <div className='header-container'>
      <div className="header-wrapper">
        <div className="header-text"  data-aos="fade-up" data-aos-offset="100">
          <h1>
            SapphireServers
          </h1>
        
        <div className="header-description">
          <h2>A premium game server host that provides secure fast, premium servers.</h2>
        </div>
        </div>
        <div className='header-sign-up'  data-aos="zoom-in" data-aos-offset="120" >
       <Signupbtn />
        </div>
      </div>
    </div>
    <Plans />
    <Cards />
    <Signup />
    <Footer />
    </>
  )
}

export default Home