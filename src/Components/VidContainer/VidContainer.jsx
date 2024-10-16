import React from 'react'
import './VidContainer.scss'
const VidContainer = () => {
  const apikey = import.meta.env.VITE_YOUTUBE_API_KEY;
  return <div className='video-container'>
    <h1>Video Feed</h1>
    <h2></h2>
  </div>
}

export default VidContainer