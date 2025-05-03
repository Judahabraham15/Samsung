import React from 'react'
import './More.css'
import photo from '../../assets/photo.png'
const More = () => {
  return (
    <div className='container6'>
        <div className="contents">
            <h1>Enjoy Your Exploration</h1>
            <p>Thanks For Trusting Us</p>
        </div>
        <div className="contents-image">
           <img src={photo} className='image6'  />
        </div>
    </div>
  )
}

export default More