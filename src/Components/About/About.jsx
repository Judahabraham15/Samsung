import React from 'react'
import './About.css'
import Sam from '../../assets/Sam.png'
import {useState , useEffect} from 'react'

const About = () => {
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
   
       const section = document.querySelector('.container');
       if (section) observer.observe(section);
   
       return () => observer.disconnect();
     }, []);
  return (
    <div className={`container ${isVisibl ? 'visible' : ''}`}>
            <div className="about-image">
                <img src={Sam} className='image' />
        </div>
        <div className="about-text">
            <h1>Find The Samsung Phone That Suits You.</h1>
            <p>"The Samsung Galaxy series is renowned for its cutting-edge technology and sleek design. Featuring stunning AMOLED displays, powerful Exynos or Snapdragon processors, Samsung phones deliver exceptional performance for gaming, photography, and multitasking."</p>
        </div>

    </div>
  )
}

export default About