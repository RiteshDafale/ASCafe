import React from 'react'
import video from '../HomepagVideo/videos/CafeVideo.mp4';
import '../HomepagVideo/video.css';

function Video() {
  const divStyle = {
    // height:"50%",
    // width:"100vh",
  }
  return (
    <>
      <div className='container-fluid p-3 d-flex flex-column justify-content-center align-items-center' style={divStyle}>
        <h5 style={{backgroundColor:"#D35400"}}>Coffee isn’t just a drink,it’s an art form 🎨☕</h5>
     <video src={ video} class="object-fit-cover"  alt="some issue" autoPlay muted loop playsInline  aria-label="Video showcasing the art of coffee" ></video>
    </div>     
    </>
  )
}

export default Video
