import React, { useState } from "react";
import first from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/images.png";
import Second from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/MaggiHD.png";
import Third from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/Momos.jpeg";
import forth from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/cafe.jpg";
import "../Navbar/Navbar.css";
function Navbar() {
  const photos = [
    {
      title: "firstPhoto",
      url: Second,
      id: 1,
    },
    {
      title: "secondPhoto",
      url: "https://www.shutterstock.com/image-photo/restaurant-features-modern-elegant-design-600nw-2496390883.jpg",
      id: 2,
    },
    {
      title: "thirdPhoto",
      url: Third,
      id: 3,
    },
    {
      title: "forthPhoto",
      url: forth,
      id: 4,
    },
  ];
  
  const [id, setid] = useState(0);
  console.log(`${photos[id].url}`);
  
  const [index, setindex] = useState(0);
  const bgStyle = {
    // backgroundColor: "lightblue",
    // backgroundImage: 'url("https://images.unsplash.com/photo-1463797221720-6b07e6426c24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
    backgroundImage: `url(${photos[id].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "1rem",
    height: "80vh",
    width: "80vw",
    objectFit: "cover",
  };

  return (
    <div>
      <button
        className="leftBtn btn"
        onClick={() => {
          if (id < photos.length - 1) {
            setid(id + 1);
          } else {
            setid(0);
          }
        }}
      > {"<"}</button>
      <button
        className="rightBtn btn"
        onClick={() => {
          if (id != 0) {
            setid(id - 1);
          } else {
            setid(photos.length - 1);
          }
        }}
      >
        {">"}
      </button>
      <div className="container-fluid" style={bgStyle}> 
        <nav class="navbar navbar-expand-lg bg-transparent ">
          <div class="container-fluid">
            {/* <a class="navbar-brand text-light" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div
              class="collapse navbar-collapse m-auto"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                <li class="nav-item">
                  <a
                    class="nav-link text-warning navLi fs-4"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-warning navLi fs-4" href="#">
                    Today's_Special
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-warning navLi fs-4" href="#">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-warning navLi fs-4" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-warning navLi fs-4" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
