import React from 'react'
import NavBar from '../../components/NavBar'
import {BiPhoneCall,BiCurrentLocation,BiLocationPlus,BiLogoGmail} from 'react-icons/bi'
import Footer from '../../pages/Footer'

const page = () => {
  return (
    <div className='width-full overflow-x-hidden bg-white h-[140vh] sm:h-[100vh]'>
        <NavBar/>
 <div  className='md:mt-40 mt-32  flex flex-col justify-center ml-[5%] sm:ml-[10%] '>
  <h1 className=' lg:text-[72px] text-[48px] md:text-[60px] md:mt-[-40px] mt-5 justify-start mb-10 lg:mb-4 font-bold text-blue-950  '>
    Send Us a message
  </h1>
  <p className='w-[90%] md:w-[60%] lg:w-[60%] xl:w-[40%] text-[16px] mb-2 text-black'>Send us a message and we will get back to you as soon as possible. We look forward to hearing from you.</p>
 <div className='sm:grid ml-[-20px] lg:w-[70%] md:grid-cols-2 md:grid-rows-3 flex flex-col gap-[-20px]'>
 <div  className='m-0 flex flex-col p-4 mt-4 '>
  <label className=''>
    Name
  </label>
  <input
      class="peer h-[50px] lg:w-[250px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter The Name "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-4 lg:ml-[-150px]'>
  <label className=''>
  Your website
  </label><input
      class="peer h-[50px] lg:w-[250px] w-full border-b  border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter Your website link "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-0 '>
  <label className='mb-2'>
  E-mail
  </label><input
      class="peer h-[50px] lg:w-[250px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter Email Address "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-0 lg:ml-[-150px] '>
  <label className='mb-2'>
  Phone
  </label><input
      class="peer h-[50px] lg:w-[250px] w-full border-b   border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Enter Phone Number "
    />
 </div>
 <div className='m-0 flex flex-col p-4 mt-0 sm:mb-0 '>
  <label className='mb-2'>
  Your Message
  </label>
  <input
      class="peer lg:w-[250px] h-[50px] w-full border-b border-blue-gray-200 bg-transparent  font-sans text-md font-normal text-black outline outline-0 transition-all placeholder-shown:border-b border-black-50 focus:border-blue focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="Message "
    />
    
 </div>
 </div>
 <div className='p-4 ml-[-30px]'>
 <input type="checkbox" className='w-10 bg-black rounded-md ' id="tickButton" name="tick" value="selected"></input>
 
 <label for="tickButton" className='mb-10 ml-[-5px] '>Subscribe to ClanCodeLabs</label></div>
 <div>


  <button className=' py-2 ml-[-10px] px-[45%] md:px-24 mb-16 mt-4 rounded-lg accent-black bg-yellow-400 text-black ' > Send</button>
  
 </div>
 
 </div>


        <Footer/>
   
    </div>
  )
}

export default page
