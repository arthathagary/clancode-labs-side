import React from 'react'
import {IoCheckmarkCircle } from "react-icons/io5";

const IdeasToStorySection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 md:flex items-center justify-center'>
    <div className='md:w-[50%]'>
    <div className='bg-[#DAF3F4] inline-block px-4 py-2 rounded-full mb-16'>Ideas to Stories</div>
    <h2>We know how important your customers are to you.</h2>
    <div>
    <div><div  className='inline-flex  items-baseline justify-center mb-8 gap-3'><span><IoCheckmarkCircle size={20}/></span><span className='text-2xl font-medium'>Surface your vision for  the product</span></div></div>
    <div><div className='inline-flex  items-baseline justify-center mb-8 gap-3'><span><IoCheckmarkCircle size={20}/></span><span className='text-2xl font-medium'>Journeys that show where you can take your customers</span></div></div>
    <div><div className='inline-flex  items-baseline justify-center gap-3'><span><IoCheckmarkCircle size={20}/></span><span className='text-2xl font-medium'>Connect and co-create</span></div> </div>
   </div>
   </div>

   {/* {Image} */}
   <div className='md:w-[50%]'>
    <h1>Image</h1>
   </div>
    
    </div>
  )
}

export default IdeasToStorySection