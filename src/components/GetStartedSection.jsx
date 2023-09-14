'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetStartedSection = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div className='md:h-[70vh] md:mt-24 lg:mt-0 md:mb-14 lg:mb-0 w-full md:px-32 px-8 mt-8 flex flex-col justify-center py-6 md:py-0'>
    <h1 className='text-center mb-4'>Start Expanding your<br/> business with ClanCode Labs</h1>
    <p className='text-center mb-4'>Accelerate your growth with a team that turns your ideas into remarkable products.</p>
    <motion.button
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     whileHover={{ scale: 1.1 }}
     whilePressed={{ scale: 1.2 }}
     onPress={() => setIsPressed(true)}
     onRelease={() => setIsPressed(false)} className='self-center bg-[#45C1CE] px-10 py-6 rounded-full font-bold text-xl text-[#004450] hover:bg-[#3a9fa8]'>Get Started Now</motion.button>
    </div>
  )
}

export default GetStartedSection