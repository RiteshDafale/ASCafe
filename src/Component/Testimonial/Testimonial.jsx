import React from 'react'
import '../Testimonial/Testimonial.css';
import Slider from "react-slick";


function Testimonial() {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
  };
  const review = [
    {
      name: "ritesh dafale",
      id: 1,
      image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg",
      comment: "Hands down the best coffee in town. The vibe is cozy, the playlists are on point, and the baristas know your order by heart."
    },
    {
      name: "Kanish Mehta",
      id: 2,
      image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg",
      comment: " came for a quick espresso and ended up staying for hours. Great Wi-Fi, even better atmosphere. Feels like my second home."
    },
    {
      name: "Aniket Thakur",
      id: 3,
      image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg",
      comment: "From the latte art to the locally sourced pastries, everything here is thoughtfully crafted. A hidden gem with real soul."
    },
    // {
    //   name: "Shrutika Waghmare",
    //   id: 4,
    //   image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg",
    //   comment: "I came for a quick espresso and ended up staying for hours. Great Wi-Fi, even better atmosphere. Feels like my second home."
    // },
  ]

  return (
    <div>
      <div className="container-fluid mt-5 ">


        <div className="row d-flex  justify-content-center align-items-center">
          <h5 className='text-center '>Reviews </h5>
          {/* <Slider {...settings}> */}
            {

              review.map((val, index) => (
                <div className="col-lg-4 border border-danger d-flex flex-column  justify-content-center align-items-center bg-primary text-light " key={index}>
                  {/* <div className="image">
                <img src={val.image} alt="some issue"></img>
                </div> */}
                  <div className="info">
                    <p>{val.name}</p>
                    <p>{val.comment}</p>
                  </div>
                </div>
              ))
            }
          {/* </Slider> */}          
        </div>
      </div>
      {/* <div className="contaier mt-3">
        <h5 className='text-center'>People's Review</h5>
        <div className="row mt-3">
          <Slider {...settings}>
            {
              review.map((value, index) => (
                <div className='reviewDiv border bg-secondary w-100 h-100 d-flex flex-column justify-content-center align-items-center' key={index}>
                  <div className="">
                    <div className='imagediv mb-3 d-flex justify-content-center align-items-center'>
                      <img src={value.image} className='img-thumbnail rounded-circle' alt="user" style={{ height: "80px", width: "80px" }} />
                    </div>
                    <div className='paraContent text-center'>
                      <p className='mb-1 fw-bold'>{value.name}</p>
                      <p className='fst-italic'>{value.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div> */}
      {/* </div> */}

    </div>
  )
}

export default Testimonial
