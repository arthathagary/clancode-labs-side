import React from 'react'
import { GoStack } from "react-icons/go";
import { FaAngular,FaReact,FaNodeJs } from "react-icons/fa";


const ServicesPage = () => {
  return (
    <div id='services' className='md:h-[100vh] w-full md:px-32 px-8 md:flex items-center  bg-[#DAF3F4] gap-4'>
    <div className='flex flex-col gap-4'>
      <h4 className='bg-[#004450] p-8 text-xl font-bold text-[white]'><GoStack/>Full stack<br/>Development</h4>
      <h4 className='bg-[#004450] p-8 text-xl font-bold text-[white]'><GoStack/>Full stack<br/>Development</h4>
      <h4 className='bg-[#004450] p-8 text-xl font-bold text-[white]'><GoStack/>Full stack<br/>Development</h4>
    </div>

    <div>
      <h1>image</h1>
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