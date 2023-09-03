import React from 'react';

const SliderItem = ({ image, isActive }) => {
  return (
    <div
      className={`w-full  h-96  absolute transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        src={image}
        alt="Slider Item"
        className="lg:h-[110%] lg:ml-[21%] overflow-hidden dark:bg-slate-800 md:h-[75%]  lg:w-[60%] w-[75%] h-[60%] ml-[18%] md:ml-[16%] sm:ml-[18%]   border-gray-300 shadow-2xl  p-2 m-2 items-center justify-center  shadow-slate-50 bg-slate-300 rounded-2xl object-cover"
      />
    </div>
  );
};

export default SliderItem;
