import { useState } from 'react'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Sam from './Components/Sam/Sam'
import Navbar from './Components/Navbar/Navbar'
import Galaxy from './Components/About/Galaxy/Galaxy'
import Creative from './Components/Creative/Creative'
import More from './Components/More/More'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
     <Navbar/>
    <Hero/>
    
    <About />
    <Sam />
    <Galaxy/>
    <Creative/>
    <More/>
    <Footer/>
   
    </>
  )
}

export default App
