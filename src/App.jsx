import { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import Home from "./Component/Home/Home";
import Slider from "./Component/Slider/Slider";
import SpecialOffer from "./Component/SpecialOffer/SpecialOffer";
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer';
import Menu from "./Component/Menu/Menu";
import Gallery from "./Component/Gallery/Gallery";
import About from "./Component/About/About";


function App() {
  return (
    <>
      {/* <Slider/> */}
      <Navbar/> 
        <Routes>
          <Route path="/ASCafe" element={<Home/>}></Route>
          <Route path="/Specialoffer" element={<SpecialOffer/>}   />
          <Route path="/menu" element={<Menu/>}   />
          <Route path="/gallery" element={<Gallery/>}   />
          <Route path="/about" element={<About/>}   />
        </Routes>
      <Footer/>
      {/* <Slider/> */}
    </>
  );
}

export default App;
