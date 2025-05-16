import React from 'react';
import './Hero.css';
import Samsung from '../../../assets/Samsung.png';
import wave from '../../../assets/1.png';
import wav from '../../../assets/2.png';
import wae from '../../../assets/3.png';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const textElement = document.getElementById('ChangeText');
    const textArray = ['Tablets', 'Laptops', 'Wearables'];
    let textIndex = 0;

    function changeText() {
      textElement.style.opacity = 0;

      setTimeout(() => {
        textElement.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;

        textElement.style.opacity = 1;
        textElement.style.color = 'darkgray';
      }, 500);
    }

    const interval = setInterval(() => {
   changeText()
   }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="hero">
    
     
      <div className="hero-text">
        <h1>
          Unleash Your World And Experience With Samsung{' '}
          <span id="ChangeText">SmartPhones</span> And Electronic Devices.
        </h1>
        <br />
        <p>
          "Samsung offers a device for every user, backed by robust software support and seamless
          integration with the Galaxy ecosystem."
        </p>
        <div className="btn">
          <a href='https://www.samsung.com/us/smartphones/' target='_blank' className="hero-button">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-lightning-charge-fill"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
            Shop Now
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={Samsung} className="images" />
      </div>

      <div className="waves wave-1" style={{ backgroundImage: `url(${wave})` }}></div>
    </div>
  );
};

export default Hero;
