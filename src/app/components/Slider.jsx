"use client"
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="h-[1px] mb-[-50px]" >
        
        <Slider {...settings}>
          <div className="p-0  ">
            <img className="w-[45%]  object-cover" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" />
          </div>
          <div className="p-0   ">
            <img  className="w-[50%]  object-cover"  src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" />
          </div>
          <div className="p-0 ">
            <img  className="w-[50%]  object-cover"  src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" />
          </div>
          <div className="p-0">
            <img  className="w-[50%]  object-cover"  src="https://www.freepnglogos.com/uploads/snapchat-logo-png-0.png" />
          </div>
          <div className="p-0">
            <img  className="w-[40%]  object-cover"  src="https://www.freepnglogos.com/uploads/swirl-png/purple-swirl-transparent-png-art-2.png" />
          </div>
          <div className="p-0">
            <img  className="w-[40%]  object-cover"  src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-shop-with-the-gentlemen-collection-and-win-the-shopee-0.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
