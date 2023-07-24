import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import HeroImg from '../../../public/assets/images/heroImg.png'
const HeroSection = () => {
  return (
    <div className='md:flex bg-[#DAF3F4] lg:h-[90vh] w-full md:px-32 px-8 py-6 md:py-0'>
    <div className='flex flex-col justify-center md:w-[50%]'>
        <h1>Expand,Grow and Elevate</h1>
        <h1>your tech team with us.</h1>
        <p className='text-2xl my-4'>We empowere numerous organizations to achieve business success through our expertise by engineering digital products.</p>
        <button className='text-xl md:text-2xl font-medium bg-[#45C1CE] py-6 px-12 rounded-full mt-4 md:self-start'><span>Get Started</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center'/></span></button>
    </div>

    {/* {hero image section} */}
    <div className='md:w-[50%] hidden md:flex md:flex-col justify-center'>
        <Image src={HeroImg} alt='hero-img'/>
    </div>
    </div>
  )
}

export default HeroSection