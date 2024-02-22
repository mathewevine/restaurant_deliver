import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className='home-bg'>
        <h1 className='home-head'>Locally Produced Delivered Direct To Your Door</h1>
        <p className='home-para'>"From Local Fields to Your Doorstep: Fresh, Sustainable, and Direct. Bringing Community to Your Table, 
        One Delivery at a Time."</p>
        <div className='home-search-container'>
            <img src='' alt='location' className='home-search-img'/>
            <input type="text" placeholder='Enter address to find nearby shops' className='home-search-input'/>
            <button type='button' className='home-search-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Home