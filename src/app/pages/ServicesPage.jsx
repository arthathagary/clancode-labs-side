'use client';
import React, { useState } from 'react'
import { GoStack } from "react-icons/go";
import { FaAngular,FaReact,FaNodeJs } from "react-icons/fa";
import Image from 'next/image'
import webAppProjectImg from '../../../public/assets/images/webAppProject.jpg'
import ProjectImg from '../../../public/assets/images/productDevelopment.jpg'

const ServicesPage = () => {
  const initialHeading = 'Building nothing but the best custom software';
  const initialPara = 'some content about our custom software';

  const [heading,setheading] = useState(initialHeading);
  const [para,setPara] = useState(initialPara);
  const [img,setImg] = useState(webAppProjectImg);

  const clickHandler = (e) =>{
    console.log(e.target.id);
    const currentId = e.target.id;
    switch (currentId) {
      case 'sdBtn':
        setheading("Changed");
        setPara("Changed Para");
        setImg(webAppProjectImg);
        break;
    
      case 'uiBtn':
        setheading("ui");
        setPara("uipara");
        setImg(ProjectImg);
        break;

      case 'mdBtn':
        setheading("mobile");
        setPara("mobilePara");
        setImg(webAppProjectImg);
        break;
      
      case 'aiBtn':
        setheading("ai");
        setPara("aiPara");
        setImg(ProjectImg);
        break;
      default:
        break;
    }
  }
  return (
    <div id='services' className='md:h-[70vh] w-full md:px-32 px-8 md:grid grid-cols-3 items-center  bg-[#DAF3F4] gap-4 py-6 md:py-0'>
    <div className='flex flex-col gap-4 justify-self-start'>
      <h4 id='sdBtn' className='bg-[#004450] px-6 py-4  font-bold text-[white] cursor-pointer' onClick={clickHandler}>Software Development</h4>
      <h4 id='uiBtn' className='bg-[#004450] px-6 py-4  font-bold text-[white] cursor-pointer' onClick={clickHandler}>UI/UX Design</h4>
      <h4 id='mdBtn' className='bg-[#004450] px-6 py-4  font-bold text-[white] cursor-pointer' onClick={clickHandler}>Mobile App Development</h4>
      <h4 id='aiBtn' className='bg-[#004450] px-6 py-4  font-bold text-[white] cursor-pointer' onClick={clickHandler}>Artificial Intelligence</h4>
      <button>Learn More</button>

    </div>

    <div className='my-6 md:my-0 justify-self-start place-items-start'>
      <h3 className='text-3xl'>{heading}</h3>
      <p>{para}</p>
    </div>

    <div>
    {/* <div className='bg-[#FFFFFF] inline-block px-4 py-2 rounded-full mb-8'>All in one</div>
    <h4 className='font-medium text-2xl mb-4'>Our engineers are skilled in every part of the stack who are constantly looking to adapt technologies that will deliver maximum value to you.</h4>
    <div className='flex gap-4'>
    <FaAngular size={60} color='#DD0031'/>
    <FaReact size={60} color='#81E0FA'/>
    <FaNodeJs size={60} color='#333333'/>
    </div> */}
    <Image src={img} alt='' />
    </div>
    </div>
  )
}

export default ServicesPage