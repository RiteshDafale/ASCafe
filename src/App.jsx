import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import Home from "./Component/Home/Home";
import Slider from "./Component/Slider/Slider";

function App() {
  return (
    <>
      {/* <Slider/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/ASCafe" element={<Home/>}></Route>
          {/* <Route path="/slider" element={<Slider/>}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <Slider/> */}
    </>
  );
}

export default App;
