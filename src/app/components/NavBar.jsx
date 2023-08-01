'use client';
import React,{useState} from 'react'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo.svg'
import ServiceDropDown from './ServiceDropDown';

const NavBar = () => {
  const [nav,setNav] = useState(false);

  const handleHamClick = ()=>setNav(!nav)

  const [menu,setMenu] = useState(true);
  const handleMouseOver = ()=>{
    setMenu(!menu);
  }
  return (
    <nav className='flex justify-between w-full h-[80px] items-center md:px-32 px-8 '>
        <div className='md:w-[220px] w-48'><Image src={Logo} objectFit='cover' alt='logo'/></div>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex gap-4'>
                <a href=''><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Home</li></a>
                <a href='#aboutpage'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>About</li></a>
                <a href='#services' onMouseOver={handleMouseOver}><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Services</li></a>
                <a href='/'><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Portfolio</li></a>
                <a href=''><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Careers</li></a>
                <a href=''><li className='text-[1.1rem] text-gray-600 hover:text-gray-950'>Blog</li></a>
            </ul>
        
        <button className='group hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-[1.1rem]'><span>Contact us</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center group-hover:translate-x-1 group-hover:duration-300'/></span></button>

        {/* {Hamburger Button} */}
        <div onClick={handleHamClick} className='z-10 md:hidden cursor-pointer'>
        {!nav?<FaBars/>:<FaTimes/>}
        </div>

        {/* {Mobile Menus} */}
        
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Services</li>
                <li className='py-6 text-4xl'>Portfolio</li>
                <li className='py-6 text-4xl'>Careers</li>
                <li className='py-6 text-4xl'>Blog</li>
                <button className='py-6 text-4xl'>Contact Us</button>
            </ul>
        
    </nav>

 
  )
}

export default NavBar