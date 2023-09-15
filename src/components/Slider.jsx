"use client"
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../../public/assets/images/in.png"
import Logo2 from "../../public/assets/images/twitter.png"
import Logo3 from "../../public/assets/images/snap.png"
import Logo4 from "../../public/assets/images/round.png"
import Logo5 from "../../public/assets/images/logo s.png"
import Image from "next/image";
import Img1 from "../../public/assets/images/logo.svg"

class App extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="h-[1px] mb-[-150px] " >
        
        <Slider {...settings}>
     
          <div className="p-0   ">
          <Image src={Logo1} className="w-[50%] lg:w-[30%]  object-cover" />   </div>
          <div className="p-0">
            <Image alt="logo"   className="w-[50%] lg:w-[30%]  object-cover"  src={Logo2} />
          </div>
          <div className="p-0">
            <Image alt="logo"   className="w-[50%] lg:w-[30%]  object-cover"  src={Logo3} />
          </div>
          <div className="p-0">
            <Image alt="logo"   className="w-[40%] lg:w-[30%]  object-cover"  src={Logo4} />
          </div>
          <div className="p-0">
            <Image alt="logo"   className="w-[40%] lg:w-[30%]  object-cover"  src={Logo5} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
