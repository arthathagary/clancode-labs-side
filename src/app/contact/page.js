import React from 'react'
import NavBar from '../../components/NavBar'
import {BiPhoneCall,BiCurrentLocation,BiLocationPlus,BiLogoGmail} from 'react-icons/bi'
import Footer from '../../pages/Footer'

const page = () => {
  return (
    <div className='width-full overflow-x-hidden bg-white h-[140vh] sm:h-[100vh]'>
        <NavBar/>
 <div  className='sm:mt-40 mt-20  flex flex-col justify-center ml-[10%] sm:ml-[20%] '>
  <h1 className=' text-5xl justify-start font-bold text-blue-950  '>
    Send Us a message
  </h1>
  <p className='w-[70%] lg:w-[50%] '>Send us a message and we will get back to you as soon as possible. We look forward to hearing from you.</p>
 <div className='sm:grid ml[-20px] lg:w-[70%] sm:grid-cols-2 sm:grid-rows-3 flex flex-col gap-[-20px]'>
 <div  className='m-0 flex flex-col p-4 mt-4 '>
  <label className=''>
    Name
  </label>
  <input
      class="peer h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-4'>
  <label className='mb-2'>
  Your website
  </label><input
      class="peer h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2'>
  E-mail
  </label><input
      class="peer h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 '>
  <label className='mb-2'>
  Phone
  </label><input
      class="peer h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 sm:mb-0 '>
  <label className='mb-2'>
  Your Message
  </label>
  <input
      class="peer h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 </div>
 <div className='p-4'>
 <input type="checkbox" className='w-10 ' id="tickButton" name="tick" value="selected"></input>
 <label for="tickButton">Subscribe to ClanCodeLabs</label></div>
 <div>


  <button className=' py-2 px-32 mb-10 rounded-lg bg-black text-white ' > Send</button>
 </div>
 
 </div>


        <Footer/>
   
    </div>
  )
}

export default page
