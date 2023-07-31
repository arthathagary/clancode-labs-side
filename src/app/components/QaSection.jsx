'use client';
import React, { useState } from 'react'
import { AiOutlinePlus} from "react-icons/ai";
import generalQandA from '../assets/contents/generalQandA';
import onBoardingQandA from '../assets/contents/onBoardingQandA';

const QaSection = () => {
  const [click,setClick] = useState(null);
  const [click2,setClick2] = useState(null);
  const handleClick = (index)=> {
    if(click === index){
      setClick(null);
    }else{
      setClick(index);
    }
    
  }
  const handleClick2 = (i)=> {
    if(click2 === i){
      setClick2(null);
    }else{
      setClick2(i);
    }
    
  }
  return (
    <div className='md:h-[70vh] w-full md:px-32 px-8 mt-8 md:flex gap-16'>
    <div className='bg-[#C5ECF0] p-8 md:w-[50%]'>
        <h4 className='text-2xl font-semibold mb-4'>General</h4>
        
            <div>
            {generalQandA.map((gQandA,index)=>{
              return <div key={gQandA.id}> <h5 className='flex items-center justify-between gap-4 font-extrabold mb-4' onClick={()=>handleClick(index)}><span>{gQandA.question}</span><span className='text-xl cursor-pointer'>{click===index?'-':'+'}</span></h5>
                <h6 className={click === index ?'block':'hidden'}>{gQandA.answer}</h6> 
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            })}
            </div>
           
        
    </div>

    <div className='bg-[#C5ECF0] p-8 md:w-[50%]'>
        <h4 className='text-2xl font-semibold mb-4'>Onboarding</h4>
        
            <div>
            {onBoardingQandA.map((oQandA,i)=>{
              return <div key={oQandA.id}> <h5 className='flex items-center justify-between gap-4 font-extrabold mb-4' onClick={()=>handleClick2(i)}><span>{oQandA.question}</span><span className='text-xl cursor-pointer'>{click2===i?'-':'+'}</span></h5>
                <h6 className={click2 === i ?'block':'hidden'}>{oQandA.answer}</h6> 
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            })}
            </div>
           
        
    </div>
    </div>
   
  )
}

export default QaSection