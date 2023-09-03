'use client';// components/ImageSlider.js
'use client'
import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';

const images = [
  'https://asianetbroadband.in/wp-content/uploads/2020/03/importance-of-internet-technology-for-easy-life.jpeg',
  'https://www.epictechnology.lk/wp-content/uploads/2019/03/epic4.jpg',
  'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks=',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
    <div className="relative ">
      {images.map((image, index) => (
        <SliderItem
          key={index}
          image={image}
          isActive={index === currentIndex}
        />
      ))}
    </div>
    </div>
  );
};

export default ImageSlider;




