import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Slider from "./Component/Slider";
import Services from "./Component/Services";
import VideoSlider from "./Component/VideoSlider";
import Store from "./Component/Store";
import Rating from "./Component/Rating";
import Laptop from "./Component/Laptop";
import MobileService from "./Component/MobileService";
import Model from "./Component/Model";
import Repairing from "./Component/Repairing";
import Brand from "./Component/Brand";
import About from "./Component/About";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Slider />
              <Services />
              <Laptop />
              <VideoSlider />
              <Store />
              <Rating />
              <About />
              <Footer />


               {/* <Repairing /> */}
              {/* <Brand /> */}
              {/* <MobileService /> */}
              {/* <Model /> */}
              
            </div>
          }/>

        <Route path="/services" element={<Brand />} />
        <Route path="/brand" element={<MobileService />} />
        <Route path="/mobileservice" element={<Model />} />
        <Route path="/model" element={<Model />} />
        <Route path="/Models" element={<Repairing />} />
        <Route path="" element={<ser />} />
      </Routes>
    </div>
  );
};

export default App;
