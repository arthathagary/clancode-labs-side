import React from 'react'
import NavBar from '../NavBar'
import {BiPhoneCall,BiCurrentLocation,BiLocationPlus,BiLogoGmail} from 'react-icons/bi'
import Footer from '@/app/pages/Footer'

const page = () => {
  return (
    <div className='width-full h-[100vh]'>
        <NavBar/>
 <div  className='mt-40  flex flex-col justify-center ml-[20%] '>
  <h1 className=' text-5xl justify-start font-bold text-blue-950  '>
    Send Us a message
  </h1>
  <p className='w-[70%] lg:w-[50%] '>Send us a message and we will get back to you as soon as possible. We look forward to hearing from you.</p>
 <div className='sm:grid ml[-20px] lg:w-[70%] sm:grid-cols-2 sm:grid-rows-3 flex flex-col gap-[-20px]'>
 <div  className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2 '>
    Name
  </label>
 <input placeholder='Enter Name ' className=' outline-none'/>
 </div>
 <div className='m-0 flex flex-col p-4 mt-4'>
  <label className='mb-2'>
  Your website
  </label>
 <input placeholder='Enter Your website' className=' outline-none'/>
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2'>
  E-mail
  </label>
 <input placeholder='Enter Email Address' className=' outline-none'/>
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2'>
  Phone
  </label>
 <input placeholder='Enter Phone Number' className=' outline-none'/>
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2'>
  Your Message
  </label>
  <textarea
            id="message"
            rows="4"
            className="block p-2. outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
 </div>
 </div>
 <div className='p-4'>
 <input type="checkbox" className='w-5 ' id="tickButton" name="tick" value="selected"></input>
 <label for="tickButton">Tick box</label></div>
 <div>


  <button className=' py-2 px-32 mb-10 rounded-lg bg-black text-white ' > Send</button>
 </div>
 
 </div>


        <Footer/>
   
    </div>
  )
}

export default page
