'use client';
import React,{useState} from 'react'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'

const NavBar = () => {
  const [nav,setNav] = useState(false);

  const handleHamClick = ()=>setNav(!nav)
  return (
    <nav className='flex justify-between w-full h-[80px] items-center md:px-32 px-8 '>
        <div className='text-xl'>Logo</div>

        {/* {Desktop Menus} */}
        
            <ul className='hidden md:flex'>
                <li className='text-xl'>Home</li>
                <li className='text-xl'>About</li>
                <li className='text-xl'>Services</li>
                <li className='text-xl'>Careers</li>
                <li className='text-xl'>Blog</li>
            </ul>
        
        <button className='hidden md:flex bg-[#E6ECEE] py-3 px-6 rounded-3xl text-xl'><span>Contact us</span><span><FaArrowRight className='inline-flex items-center ml-3 justify-center'/></span></button>

        {/* {Hamburger Button} */}
        <div onClick={handleHamClick} className='z-10 md:hidden cursor-pointer'>
        {!nav?<FaBars/>:<FaTimes/>}
        </div>

        {/* {Mobile Menus} */}
        
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Services</li>
                <li className='py-6 text-4xl'>Careers</li>
                <li className='py-6 text-4xl'>Blog</li>
                <button className='py-6 text-4xl'>Contact Us</button>
            </ul>
        
    </nav>
  )
}

export default NavBar