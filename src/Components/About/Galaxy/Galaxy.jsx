import React from 'react'
import './Galaxy.css'
import Fold from '../../../assets/Fold.png'
import { useEffect } from 'react'
import { useState } from 'react'

const Galaxy = () => {
  const[isVisibl , setIsVisibl] = useState(false)
  useEffect(() => {
    
       const observer = new IntersectionObserver(
           ([entry]) => {
             if (entry.isIntersecting) {
               setIsVisibl(true);
             }
           },
           { threshold: 0.5}
         );
     
         const section = document.querySelector('.container4');
         if (section) observer.observe(section);
     
         return () => observer.disconnect();
       }, []);
  return (
    <div className={`container4 ${isVisibl ? 'visible' : ''}`}>
        <div className="text3">
            <h1>Galaxy Fold</h1>
            <p>The Galaxy Fold is a revolutionary device that combines the functionality of a smartphone and tablet into one. Featuring a flexible AMOLED display, the Z Fold unfolds to a large 7.6-inch screen , ideal for multitasking, gaming, and media consumption, while folding to a compact 6.2-inch cover display for everyday use. Powered by top-tier Snapdragon processors, it offers robust performance, S Pen support for productivity, and advanced camera systems. The Z Fold series delivers cutting-edge technology for users seeking a premium, versatile device.

</p>
          <div className="btn">
<a href="https://www.samsung.com/africa_en/smartphones/galaxy-z-fold6/" className='galaxy-button'>
<svg
      viewBox="0 0 16 16"
      class="bi bi-lightning-charge-fill"
      fill="currentColor"
      height={16}
      width={16}
      xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"  ></path></svg>
    View More
</a>
</div>
        </div>
        <div className="galaxy-image">
   <img src={Fold} className='imagess'/>
        </div>
    </div>
  )
}

export default Galaxy