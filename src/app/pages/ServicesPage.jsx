import React from 'react'
import { GoStack } from "react-icons/go";
import { FaAngular,FaReact,FaNodeJs } from "react-icons/fa";


const ServicesPage = () => {
  return (
    <div id='services' className='md:h-[70vh] w-full md:px-32 px-8 md:grid grid-cols-3 items-center  bg-[#DAF3F4] gap-4 py-6 md:py-0'>
    <div className='flex flex-col gap-4 justify-self-start'>
      <h4 className='bg-[#004450] px-6 py-4  font-bold text-[white]'>Software Development</h4>
      <h4 className='bg-[#004450] px-6 py-4  font-bold text-[white]'>UI/UX Design</h4>
      <h4 className='bg-[#004450] px-6 py-4  font-bold text-[white]'>Mobile App Development</h4>
      <h4 className='bg-[#004450] px-6 py-4  font-bold text-[white]'>Artificial Intelligence</h4>
      <button>Learn More</button>

    </div>

    <div className='my-6 md:my-0'>
      <h2>Building nothing but the best custom software</h2>
    </div>

    <div>
    <div className='bg-[#FFFFFF] inline-block px-4 py-2 rounded-full mb-8'>All in one</div>
    <h4 className='font-medium text-2xl mb-4'>Our engineers are skilled in every part of the stack who are constantly looking to adapt technologies that will deliver maximum value to you.</h4>
    <div className='flex gap-4'>
    <FaAngular size={60} color='#DD0031'/>
    <FaReact size={60} color='#81E0FA'/>
    <FaNodeJs size={60} color='#333333'/>
    </div>
    </div>
    </div>
  )
}

export default ServicesPage