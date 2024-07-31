import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {assets} from '../../assets/assets'
import '../Header/Header.css'

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    cssEase:"linear",
    speed: 2000,
    autpplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        //   initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={assets.header_img} alt="" className="carousel-image" />
        </div>
        <div>
        <img src={assets.hero} alt="" className="carousel-image"  />
        </div>
        <div>
        <img src={assets.header_img} alt="" className="carousel-image"/>
        </div>
        <div>
        <img src={assets.hero} alt="" className="carousel-image" />
        </div>
        <div>
        <img src={assets.header_img} alt="" className="carousel-image"/>
        </div>

      </Slider>
    </div>
  );
}

export default Responsive;
