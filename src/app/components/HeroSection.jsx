import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
const HeroSection = () => {
  return (
    <div className='bg-[#DAF3F4] h-[90vh] w-full md:px-32 px-8'>
        <h1 className='text-7xl font-bold text-[#004450]'>Build faster,</h1>
        <h1 className='text-7xl font-bold text-[#004450]'>together</h1>
        <h1 className='text-7xl font-bold text-[#004450]'>with Corzent</h1>
        <p className='text-2xl'>Product engineering simplified</p>
        <button className='text-2xl font-medium bg-[#45C1CE] py-6 px-12 rounded-full'><span>Get Started</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center'/></span></button>
    </div>
  )
}

export default HeroSection