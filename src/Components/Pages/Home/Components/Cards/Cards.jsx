import React from 'react'
import  './Cards.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
<script src="https://kit.fontawesome.com/929406d06b.js" crossorigin="anonymous"></script>


function Cards() {
    useEffect(() => {
        Aos.init({ duration: 1500});
    })
  return (
    <div>
        <div className='cards-container'>
            <div className="card-wrapper">
                <div className='card1' data-aos="fade-up" data-aos-offset="100">
                    <h1>Fast and Powerful</h1>
                    <h2>Sapphire Servers has fast, powerful, reliable to servers to host your game server!</h2>
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <div className='card2' data-aos="fade-up" data-aos-offset="200">
                    <h1>Secure</h1>
                    <h2>Sapphire Servers has secure servers.</h2>
                    <i class="fa-solid fa-building-lock"></i>
                </div>
                <div className="card3" data-aos="fade-up" data-aos-offset="300">
                    <h1>Something</h1>
                    <h2>Something and something. leleeleleel</h2>
                    <i class="fa-solid fa-building-lock"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards