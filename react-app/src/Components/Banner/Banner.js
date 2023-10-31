import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {api_key, image_url} from '../../Constants/Constans'

function Banner() {
   
  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  }, [])

  return (
    <div 
    style={{backgroundImage:`url(${movie ? image_url+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div>
            <button  className="banner_button">Play</button>
            <button  className="banner_button">My Playlist</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}


export default Banner
