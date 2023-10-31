import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import YouTube from 'react-youtube';
import {image_url, api_key} from '../../Constants/Constans'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=> {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err =>{
      // alert("Network Error")
    })

  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${api_key}&language=en-US`)
    .then(response=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Trailer Not Available")
        alert("Trailer Not Available")
      }

    })
  }

  return (
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movies.map((obj)=> 
            <div key={obj.key}>
            <img 
            onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${image_url + obj.backdrop_path}`} />
            <p style={{marginLeft: '10px'}}>{obj.original_title}</p>
            </div>
            )}
            </div>
           { urlId &&  <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  
  )
}

export default RowPost
