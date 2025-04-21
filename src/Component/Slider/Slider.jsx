import React, { useState } from 'react'
import first from 'D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/images.png';
import Second from 'D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/Maggi.jpeg';
import Third from 'D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/Momos.jpeg';
import '../Slider/Slider.css'

function Slider() {
  const photos =[
    {
      title :"firstPhoto",
      url:first,
      id:1,      
    },
    {
      title :"secondPhoto",
      url:Second,
      id:2,      
    },
    {
      title :"thirdPhoto",
      url:Third,
      id:3,      
    }
  ]
 
  // const [photos,setphotos] = useState(photos[0].url)
  const[id,setid] = useState(0)
  console.log(photos[id].url);
  console.log(photos.length);
  
  
  return ( 
    <div>
      <div className="container">
        <button className="leftArrow"
        onClick={()=>{
          console.log("left btn click "+id);
           if(id < photos.length-1){
            setid(id+1)  
           }        
           else{
            setid(0)
           }
        }}
     
        >{"<"}</button>
        <img src={photos[id].url} alt="some issue"></img>
        <button className="rightArrow"
        onClick={()=>{
          console.log("right btn click "+id);
          if(id != 0){
            setid(id-1)  
           } else{
            setid(photos.length - 1)
           }        
        }}>{">"}</button>
      </div>
    </div>
  )
}

export default Slider
