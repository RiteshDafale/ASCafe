import React from 'react'
import video from '../HomepagVideo/videos/CafeVideo.mp4';
import '../HomepagVideo/video.css';

function Video() {
    const divStyle = {
        // height:"50%",
        // width:"100vh",
        border:"3px solid red"
    }
  return (
    <div className='container-fluid p-3 d-flex flex-column justify-content-center align-items-center' style={divStyle}>
        <h5 style={{color:"#D35400"}}>Coffee isn’t just a drink,it’s an art form 🎨☕</h5>
     <video src={ video} class="object-fit-cover w-75"  alt="some issue" controls ></video>
    </div>
  )
}

export default Video
