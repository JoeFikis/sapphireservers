import React from 'react'
import './About.css'
import AboutUs from './Components/About Us/index'
import Footer from '../../footer/footer'
import Testimonials from './Components/Testimonials/index'
import AboutUs from './Components/About Us'


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
<<<<<<< HEAD
    <AboutUs />
=======
    <AboutUs/>
>>>>>>> 04bbbad0bb1eee0bae01e53dcf3dabb32ad19c71
    <Footer />
    </>
  )
}

export default About