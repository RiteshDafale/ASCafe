import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="content bg-dark text-light">
          <div className="row">
            <div className="col-lg-3 border d-flex flex-column justify-content-center align-items-center">
              <h4 className='text-decoration-underline'>ASCafe - best coffee </h4>
              <p className='text-start p-3'>Welcome to your cozy corner of calm—where the coffee’s bold, the vibes are mellow, and every cup tells a story.
                Sip, chill, connect. This is more than a café—it’s your daily escape.</p>
            </div>
            <div className="col-lg-3 border d-flex flex-column justify-content-center align-items-center">
              <h4 className='text-decoration-underline'>Important Link</h4>
              <div className="links text-white lh-1 mt-3">
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Home</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Today's Special</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Menu</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Gallery</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">About</a></p>
              </div>

            </div>
            <div className="col-lg-3 border">
            <h4 className='text-decoration-underline'>Contact Details</h4>
              <div className="links text-white lh-1 mt-3">
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Home</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Today's Special</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Menu</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">Gallery</a></p>
                <p><a class="link-opacity-75-hover text-white lh-1" href="#">About</a></p>
              </div>

            </div>
            <div className="col-lg-3 border">Social Media</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
