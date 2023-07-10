import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
const HeroSection = () => {
  return (
    <div className='md:flex bg-[#DAF3F4] md:h-[90vh] w-full md:px-32 px-8'>
    <div className='md:h-screen flex flex-col justify-center'>
        <h1>Build faster,</h1>
        <h1>together</h1>
        <h1>with Corzent</h1>
        <p className='text-2xl my-4'>Product engineering simplified</p>
        <button className='text-2xl font-medium bg-[#45C1CE] py-6 px-12 rounded-full mt-4 md:self-start'><span>Get Started</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center'/></span></button>
    </div>

    {/* {hero image section} */}
    <div>

    </div>
    </div>
  )
}

export default HeroSection