'use client';
import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import HeroImg from '../../public/assets/images/heroImg.png'
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useRouter } from 'next/navigation';
const HeroSection = () => {
  const router = useRouter()
  return (
    <div className='md:flex mt-[70px]  bg-[#DAF3F4] lg:h-[90vh] md:h-[100vh]  w-full md:px-32 px-8 py-6 md:py-0'>
    <motion.div 
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{type:'spring',stiffness:30}}
    className='flex flex-col justify-center md:w-[50%]'>
        <h2 className='font-bold lg:mb-[-10px]'>Expand,Grow and Elevate</h2>
        <h2 className='font-bold'>your tech team with us.</h2>
        <p className='text-2xl my-4'>We empowere numerous organizations to achieve business success through our expertise by engineering digital products.</p>
        <button onClick={()=>{
          router.push('/contact')
        }} className='group text-xl list-none md:text-2xl font-medium bg-[#45C1CE] hover:bg-[#3a9fa8] py-6 px-12 rounded-full mt-4 md:self-start text-[#004450]'><span>Get Started</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center group-hover:translate-x-1 group-hover:duration-300'/></span></button>
    </motion.div>

    {/* {hero image section} */}
    <motion.div
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{type:'spring',stiffness:30}}
     className='md:w-[50%] hidden md:flex md:flex-col justify-center'>
        <Image src={HeroImg} alt='hero-img'/>
    </motion.div>
    </div>
  )
}

export default HeroSection