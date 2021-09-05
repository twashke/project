import React from "react";
import slide1 from "./../../assets/images/cherries.jpeg";
import slide2 from "./../../assets/images/pencils.jpeg";
import slide3 from "./../../assets/images/blueberry-waffles.jpeg";
import "./Home.css";

export default function Home() {
    return (
    <div className="carouselBackground d-flex justify-content-center">
    <div id="carouselExampleFade" class="carousel slide carousel-fade soapCarousel" data-bs-ride="carousel">
     <div class="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="soapCarousel" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slide2} className="soapCarousel" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="soapCarousel" alt="..."/>
        </div>
      </div>
    </div>
    </div>
    );
}