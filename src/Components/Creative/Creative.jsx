import React from 'react'
import './Creative.css'
import buds from '../../assets/buds.png'
const Creative = () => {
  
  return (
    <div className='container5'>
             <div className="content">
                <h1>Galaxy Buds</h1>
                <p>Galaxy Buds offer Active Noise Cancellation (ANC), Ambient Sound mode, Bluetooth connectivity, and seamless Samsung device pairing. They provide 5–30 hours of battery life, IPX2–IPX7 water resistance, high-quality audio codecs, AI-enhanced sound (newer models), touch controls, wireless charging (select models), and voice assistant integration.

</p>
<div className="btn">
  <a 
    href="https://www.samsung.com/africa_en/audio-sound/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hero-button"
  >
    <svg
      viewBox="0 0 16 16"
      className="bi bi-lightning-charge-fill"
      fill="currentColor"
      height={16}
      width={16}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
      ></path>
    </svg>
    Learn More
  </a>
</div>
 </div>
             <div className="content-image">
                <img src={buds} className='imag'/>
             </div>
    </div>
  )
}

export default Creative