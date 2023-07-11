import React from 'react'
import { FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='w-full md:px-32 px-8 flex items-center bg-[#004450] md:py-32 py-16 md:justify-evenly justify-center' >
        <div >
            <div className='mb-4'>logo</div>
            <h6 className='text-[white] mb-4'>Product engineering simplified</h6>
            <div className='flex gap-4 mb-4'>
            <FaLinkedin size={20} color='white' />
            <FaFacebookSquare size={20} color='white' />
            <AiFillInstagram size={20} color='white' />  
            </div> 
            <h6 className='text-[white]'>©  {new Date().getFullYear()} Corzent </h6>

        </div>

        <nav>
          <ul className='flex flex-col md:flex-row md:gap-6 gap-3'>
            <li className='text-[white] font-medium'>Home</li>
            <li className='text-[white] font-medium'>About</li>
            <li className='text-[white] font-medium'>Services</li>
            <li className='text-[white] font-medium'>Careers</li>
            <li className='text-[white] font-medium'>Blog</li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer