import React from 'react'
import { FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from 'next/image'
import whiteLogo from '../../../public/assets/images/logoWhite.svg'
const Footer = () => {
  return (
    <footer className='w-full md:px-32 px-8 md:flex items-center bg-[#004450] md:py-6 py-6 md:justify-evenly' >
        <div className='text-center'>
            <div className='w-60'><Image src={whiteLogo} alt='logo'/></div>
            {/* <h6 className='text-[white] mb-4'>Product engineering simplified</h6> */}
            {/* <div className='flex gap-4 mb-4 justify-center'>
            <FaLinkedin size={20} color='white' />
            <FaFacebookSquare size={20} color='white' />
            <AiFillInstagram size={20} color='white' />  
            </div>  */}
            {/* <h6 className='text-[white]'>©  {new Date().getFullYear()} ClanCode Labs </h6> */}

        </div>

        <nav>
          <ul className='md:flex md:gap-2'>
            <li className='text-[white] font-medium'>Home</li>
            <li className='text-[white] font-medium'>About</li>
            <li className='text-[white] font-medium'>Services</li>
            <li className='text-[white] font-medium'>Portfolio</li>
            <li className='text-[white] font-medium'>Careers</li>
            <li className='text-[white] font-medium'>Blog</li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer