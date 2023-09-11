import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const StoriesToProductSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 md:flex items-center justify-center bg-[#DAF3F4]'>

    <div className='md:w-[50%] pt-6 md:pt-0 mb-4 md:mb-0 '>
        <h1>1st</h1>
    </div>

    <div className='md:w-[50%]'>
        <div className='bg-[#FFFFFF] inline-block px-4 py-2 rounded-full mb-8'>Stories to Product</div>
        <h2>We're all about converting user journeys to product.</h2>
        <p className='text-[#004450]'>As our engineering team work with you on bringing your idea to life, we help you understand your customers even better. We gather continuous feedback in our development process and help align the product to better solve your customers' pain points. As a technical partner, we help in choosing the right technology to solve the problem and go to market as fast as possible.</p>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

       
            <div className='md:flex mb-4 gap-4'>
            <div className='inline-flex  items-baseline  gap-2 w-[50%]'><span><IoCheckmarkCircleOutline/></span><span className='text-xl font-medium'>High fidelity protopypes</span></div>
            <div className='inline-flex  items-baseline gap-2 w-[50%]'><span><IoCheckmarkCircleOutline/></span><span className='text-xl font-medium'>Mobile and web development</span></div>
            </div>
            <div className='md:flex mb-4 gap-4 pb-6 md:pd-6'>
            <div className='inline-flex  items-center gap-2 w-[50%]'><span><IoCheckmarkCircleOutline/></span><span className='text-xl font-medium'>Cloud & Devops</span></div>
            <div className='inline-flex  items-center gap-2 w-[50%]'><span><IoCheckmarkCircleOutline/></span><span className='text-xl font-medium'>Agile delivery management</span></div>
            </div>
       
    </div>
    </div>
  )
}

export default StoriesToProductSection