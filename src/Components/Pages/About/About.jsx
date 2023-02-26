import React from 'react'
import './About.css'
import AboutUs from './Components/About Us/index'
import Footer from '../../footer/footer'
import Testimonials from './Components/Testimonials/index'


function About() {
  return (
    <>
    <div className="container">
      <div className="header">
        <h1>About</h1>
      </div>
    </div>
    {/* End of About Page */}
    <Testimonials />
    <AboutUs />
    <Footer />
    </>
  )
}

export default About