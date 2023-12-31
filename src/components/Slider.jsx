"use client"
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../../public/assets/images/Card1.png"
import Logo2 from "../../public/assets/images/fathimas.jpg"
import Logo3 from "../../public/assets/images/surukkam.png"
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
      <div className=" lg:flex grid grid-cols-1 grid-rows-1" >
 
    <div className=" w-[600px] flex flex-col justify-center max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[300px]   shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
      <Image
        className=" mt-10  object-cover"
        src={Logo1}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">Mr Snow Removal</h2>
        {/* <p className=" text-center text-gray-600">
          This is the content of your card. You can add more details here.
        </p> */}
      </div>
    </div>

    <div className=" md:w-[600px] flex flex-col justify-center max-w-xs mx-auto mb-16 lg:mb-0 bg-[#DAF3F4] h-[300px] shadow-xl border-yellow-200 rounded-xl  overflow-hidden">
      <Image
        className="w-[40%] mt-10 ml-[30%] object-cover rounded-3xl"
        src={Logo2}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className=" pt-6 text-xl text-center font-semibold text-gray-800">Fathimas</h2>
        {/* <p className="mt-2 text-center text-gray-600">
          This is the content of your card. You can add more details here.
        </p> */}
      </div>
    </div>

    <div className="w-[600px] flex flex-col justify-center items-center max-w-xs mx-auto bg-[#DAF3F4] shadow-xl h-[300px] border-yellow-200 rounded-xl  overflow-hidden">
      <Image
        className="w-[44%] mt-10 object-cover rounded-3xl"
        src={Logo3}
        alt="Card"
      />
      
      <div className="px-6 py-4">
        <h2 className="pt-6 text-xl text-center font-semibold text-gray-800">Surukkam</h2>
        {/* <p className="mt-2 text-center text-gray-600">
          This is the content of your card. You can add more details here.
        </p> */}
      </div>
    </div>
          {/* <div className="p-0">
          <Image src={Logo1} className="w-[50%] lg:w-[30%]  object-cover" />   </div>

          <div className="p-0 bg-slate-600 w-9">
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
          </div> */}
       
      </div>
    );
  }
}

export default App;
