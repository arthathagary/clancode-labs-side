'use client'
import React, { useState } from 'react';

import Link from 'next/link';
import {useRouter } from 'next/navigation';

const GetStartedSection = () => {
  const router = useRouter()
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div id='about' className='md:h-[70vh] md:mt-24 lg:mt-0 md:mb-14 lg:mb-0 w-full md:px-32 px-8 mt-8 flex flex-col justify-center py-6 md:py-0'>
    <h2 className='text-center mb-4 text-bold'>Start Expanding your<br/> business with ClanCode Labs</h2>
    <p className='text-center mb-4'>Accelerate your growth with a team that turns your ideas into remarkable products.</p>
    <button
     className='self-center list-none bg-[#45C1CE] px-6 py-4 rounded-full font-bold text-xl text-[#004450] hover:bg-[#3a9fa8]' onClick={()=>{
      router.push('/contact')
     }}>Get Started Now</button>
    </div>
  )
}

export default GetStartedSection