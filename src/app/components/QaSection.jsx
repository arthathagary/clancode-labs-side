'use client';
import React, { useState } from 'react'
import { AiOutlinePlus} from "react-icons/ai";
import generalQandA from '../assets/contents/generalQandA';
import onBoardingQandA from '../assets/contents/onBoardingQandA';

const QaSection = () => {
  return (
    <div className='md:h-[70vh] w-full md:px-32 px-8 mt-8 md:flex gap-16'>
    <div className='bg-[#C5ECF0] p-8 md:w-[50%]'>
        <h4 className='text-2xl font-semibold mb-4'>General</h4>
        
            <div>
            {generalQandA.map((gQandA)=>{
              return <div key={gQandA.id}> <h5 className='flex items-center justify-between gap-4 font-extrabold mb-4'><span>{gQandA.question}</span><span><AiOutlinePlus/></span></h5>
                <p className='hidden'>{gQandA.answer}</p> 
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            })}
            </div>
           
        
    </div>

    <div className='bg-[#C5ECF0] p-8 md:w-[50%]'>
        <h4 className='text-2xl font-semibold mb-4'>General</h4>
        
            <div>
            {onBoardingQandA.map((oQandA)=>{
              return <div key={oQandA.id}> <h5 className='flex items-center justify-between gap-4 font-extrabold mb-4'><span>{oQandA.question}</span><span><AiOutlinePlus/></span></h5>
                <p className='hidden'>{oQandA.answer}</p> 
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            })}
            </div>
           
        
    </div>
    </div>
   
  )
}

export default QaSection