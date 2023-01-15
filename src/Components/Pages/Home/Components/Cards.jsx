import React from 'react'
import  './Cards.css'
<script src="https://kit.fontawesome.com/929406d06b.js" crossorigin="anonymous"></script>

function Cards() {
  return (
    <div>
        <div className='cards-container'>
            <div className="card-wrapper">
                <div className='card1'>
                    <h1>Fast and Powerful</h1>
                    <h2>Sapphire Servers has fast, powerful, reliable to servers to host your game server!</h2>
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <div className='card2'>
                    <h1>Secure</h1>
                    <h2>Sapphire Servers has secure servers.</h2>
                    <i class="fa-solid fa-building-lock"></i>
                </div>
                <div className="card3">
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