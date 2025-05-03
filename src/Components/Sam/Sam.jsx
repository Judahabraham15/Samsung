import React from 'react'
import './sams.css'
import watch from '../../assets/watch2.png'
import { useEffect } from 'react'
const Sam = () => {
  
    useEffect(() => {
      const bub = document.getElementById('bubbles');
      const numberBub = 50; // Number of bubbles
      for (let j = 0; j < numberBub; j++) {
        createBubbles();
      }
  
      function createBubbles() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bub.appendChild(bubble);
  
        const size = Math.random() * 20 + 5; // Random size between 5px and 25px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
  
        const posX = Math.random() * window.innerWidth; // Random horizontal position
        bubble.style.left = `${posX}px`;
  
        const duration = Math.random() * 8 + 4; // Random animation duration
        bubble.style.animation = `bubble ${duration}s linear infinite`;
  
        const delay = Math.random() * duration; // Random animation delay
        bubble.style.animationDelay = `-${delay}s`;
      }
    }, []);
  
  
  return (
    <div className='container2'>
      <div className="bubbles" id='bubbles'></div>
      <div className="text">
        <h1>Galaxy Watch</h1>
        <p>The Galaxy Watch has enhanced health precautions and many more.</p>
      </div>
      <div className="section3">
     <div className="sam-image">
   <img src={watch} className='image3' />
      </div>
      <div className="text2">
        <p>The Samsung Galaxy Watch series blends sleek design with advanced functionality, catering to fitness enthusiasts and tech-savvy users alike. Powered by Wear OS, it offers seamless integration with Samsung phones and other Android devices.

</p>
      </div>
      </div>

    </div>
  )
}

export default Sam