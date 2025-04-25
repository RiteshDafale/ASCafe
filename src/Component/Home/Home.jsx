import React from 'react'
import '../Home/Home.css';
import Testimonial from '../Testimonial/Testimonial';
import second from '../HomepagVideo/second';
import Video from '../HomepagVideo/Video';
import Contact from '../Contact/Contact';


function Home() {
  return (
    <div className='bg-danger' style={{ width: "" }}>
      {/* <Navbar/> */}
      <Video />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Home
