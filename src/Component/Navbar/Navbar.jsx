import React, { useState } from "react";
import first from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/images.png";
import Second from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/MaggiHD.png";
import Third from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/Momos.jpeg";
import forth from "D:/Startup/CafeWebsite/Client2/ASCafe/src/assets/images/cafe.jpg";
import "../Navbar/Navbar.css";
import { useNavigate ,Link} from "react-router-dom";

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
  
  const navigate = useNavigate();
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
    height: "100vh",
    objectFit: "cover",
  };

  return (
    <div>
      <button
        className="leftBtn arrowbtn"
        onClick={() => {
          if (id < photos.length - 1) {
            setid(id + 1);
          } else {
            setid(0);
          }
        }}
      > {"<"}</button>
      <button
        className="rightBtn arrowbtn"
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
        <nav className="navbar navbar-expand-lg bg-transparent ">
          <div className="container-fluid">
            {/* <a className="navbar-brand text-light" href="#">Navbar</a> */}
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse m-auto"
              id="navbarSupportedContent "
            >
              <ul className="navbar-nav me-auto mb-2  m-auto  px-4 navul">
                <li className="nav-item">
                  <a
                    className="nav-link text-warning navLi fs-4"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item px-2"   href="#">
                     <Link to="/Specialoffer" className="nav-link text-warning navLi fs-4">Today's_Special</Link>
                </li>
                <li className="nav-item">
                <Link to="/menu" className="nav-link text-warning navLi fs-4">Menu</Link>
                </li>
                <li className="nav-item px-2">
                <Link to="/gallery" className="nav-link text-warning navLi fs-4">Gallery</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link text-warning navLi fs-4">About</Link>

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
