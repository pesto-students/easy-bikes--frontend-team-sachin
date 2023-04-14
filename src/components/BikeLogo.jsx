import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BikeLogo.css";
import bajaj from "./assets/bajaj.png";
import honda from "./assets/honda.png";
import kawasaki from "./assets/kawasaki.png";
import ktm from "./assets/ktm.png";
import royale from "./assets/royale.png";
import suzuki from "./assets/suzuki.png";
import tvs from "./assets/tvs.png";
import yamaha from "./assets/yamaha.png";

// import { Component } from "react";

class BikeLogo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="mainContainer">
        <h2>Logo slider</h2>
        <Slider {...settings}>
          <div className="container">
            <img required src={bajaj} alt="bajaj" />
          </div>
          <div className="container">
            <img src={honda} alt="honda" />
          </div>
          <div className="container">
            <img src={kawasaki} alt="kawasaki" />
          </div>
          <div className="container">
            <img src={ktm} alt="ktm" />
          </div>
          <div className="container">
            <img src={royale} alt="royal" />
          </div>
          <div className="container">
            <img src={suzuki} alt="suzuki" />
          </div>
          <div className="container">
            <img src={tvs} alt="tvs" />
          </div>
          <div className="container">
            <img src={yamaha} alt="yamaha" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default BikeLogo;
