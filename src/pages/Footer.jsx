import React from 'react'
import { FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from 'next/image'
import whiteLogo from '../../public/assets/images/logoWhite.svg'
const Footer = () => {
  return (
    <footer className='w-full px-20 lg:px-32 xl:px-10 z-20 lg:justify-evenly  lg:flex items-center bg-[#004450] lg:py-6 ' >
        <div className='text-center    z-10'>
            <div className='w-60 ml-[5%]  md:ml-[30%] lg:ml-0 '><Image src={whiteLogo} alt='logo'/></div>
            {/* <h6 className='text-[white] mb-4'>Product engineering simplified</h6>  */}
            <div className='flex gap-4 mb-4 justify-center mt-2'>
            <FaLinkedin size={20} color='white' />
            <FaFacebookSquare size={20} color='white' />
            <AiFillInstagram size={20} color='white' />  
            </div>

        </div>

        <nav className='z-10 lg:ml-[45%] lg:mb-5'>
          <ul className='lg:flex z-10 md:gap  lg:0 grid grid-cols-4 grid-rows-4 -mb-12  '>
            <li className='text-[white] font-medium'>Home</li>
            <li className='text-[white] font-medium'>About</li>
            <li className='text-[white] font-medium'>Services</li>
            {/* <li className='text-[white] font-medium'>Portfolio</li>
            <li className='text-[white] font-medium'>Careers</li> */}
            <li className='text-[white] font-medium'>Blog</li>
          </ul>
          <h6 className='text-[white] text-center '>©  {new Date().getFullYear()} Clancode Labs </h6>
        </nav>
    </footer>
  )
}

export default Footer