import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movies Name</h1>
        <div>
            <button  className="banner_button">Play</button>
            <button  className="banner_button">My Playlist</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et, blanditiis voluptatum ab nostrum consectetur.</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
