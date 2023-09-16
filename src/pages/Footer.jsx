import React from 'react'
import { FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from 'next/image'
import whiteLogo from '../../public/assets/images/logoWhite.svg'
const Footer = () => {
  return (
    <footer className='w-full md:px-32 z-20  lg:flex items-center bg-[#004450] lg:py-6  md:justify-evenly' >
        <div className='text-center lg:mr-[35%] z-10'>
            <div className='w-60 lg:ml-[-20%] ml-[20%] md:ml-[30%] '><Image src={whiteLogo} alt='logo'/></div>
            {/* <h6 className='text-[white] mb-4'>Product engineering simplified</h6>  */}
            <div className='flex gap-4 mb-4 justify-center mt-2'>
            <FaLinkedin size={20} color='white' />
            <FaFacebookSquare size={20} color='white' />
            <AiFillInstagram size={20} color='white' />  
            </div>

        </div>

        <nav className='z-10'>
          <ul className='lg:flex z-10 md:gap md:mr-0 lg:ml-0 ml-[10%] lg:0 grid grid-cols-4 grid-rows-4 -mb-12  '>
            <li className='text-[white] font-medium'>Home</li>
            <li className='text-[white] font-medium'>About</li>
            <li className='text-[white] font-medium'>Services</li>
            {/* <li className='text-[white] font-medium'>Portfolio</li>
            <li className='text-[white] font-medium'>Careers</li> */}
            <li className='text-[white] font-medium'>Blog</li>
          </ul>
          <h6 className='text-[white] text-center'>©  {new Date().getFullYear()} Clancode Labs </h6>
        </nav>
    </footer>
  )
}

export default Footer