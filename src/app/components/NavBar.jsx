'use client';
import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo.svg'
import Link from 'next/link';

import { animateScroll as scroll } from 'react-scroll';


const NavBar = () => {
  const [nav,setNav] = useState(false);
  const [color,setColor]=useState('white')
  const [text,setText] =useState('black')

  const handleHamClick = ()=>setNav(!nav)

useEffect(()=>{
  const change=()=>{
    if(window.scrollY>=90){

      setColor('White')
      setText('black')
    }
    else{
      setColor('white')
      setText('	black ')
    }
  }
  window.addEventListener('scroll',change);
},[])


  const [menu,setMenu] = useState(true);
  const handleMouseOver = ()=>{
    setMenu(!menu);
  }
  return (

<div style={{backgroundColor:`${color}`}} className=' fixed font-sans z-40  left-0 top-0 w-full ease-in-out duration-500 '>
  <div className=' w-full m-auto bg-transparent flex justify-evenly items-center p-4 text-black'>
<Link href='/'> 
          <div style={{color:`${text}`}}  className='w-[200px] bg-black'><Image src={Logo}/></div>
        </Link>
  <ul style={{color:`${text}`}} className='hidden md:flex md:text-xs  lg:text-lg  '>
    
    <li className=' p-4 pr-7 scroll-s hover:text-red-700 hover:scale-105'>
    <Link href='/'> Home</Link>
    </li><Link href="/#aboutpage">
    <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>
      About</li></Link>
    <Link href="/#services">
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Service</li></Link><Link href=''>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Portfolio</li></Link><Link href=''>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Careers</li></Link><Link href=''>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 '>Blog</li></Link>
  
  </ul>
  <div>
    
  </div>
  <div><Link href="/components/Contact">
   <button className=' hidden border-none  md:flex items-center justify-center mt-2 type="button" class="focus:outline-none text-white bg-[#808080] hover:bg-black   text-xl rounded-2xl font-bold  px-5 py-2 mr-2 mb-2   '>Contact Us</button></Link>
   </div>

  
  {/* mobile Icons */}

  <div className=' md:hidden z-50 block cursor-pointer '  onClick={handleHamClick}>
  
        {!nav?<FaBars size={20} style={{color:`${text}`}} className=''/>:<FaTimes size={20} className='mt-0 text-black bg-white'/>}
       
  </div>
  {/* Mobile menu */}
  <div style={{color:`${text}`}} className={nav ? ' md:hidden text-black  absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in-out duration-500':'md:hidden  absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-500  text-center ease-in-out duration-500 '}>
  <ul>
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white '>
      <a href="/">Home</a>
    </li>
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white  '>
      <Link href="">About</Link>
    </li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#services">Service</a></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#mvpsection">Portfolio</a></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#">Careers</a></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><a href="#">Blog</a></li>
   <Link href="/components/Contact"><button onClick={handleHamClick} className='type="button" class="focus:outline-none text-black bg-[#808080] hover:bg-white hover:text-black focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-white dark:focus:ring-green-800" '>Contact Us</button></Link>
   
  </ul>
  </div>
  </div>
</div>

 
  )
}

export default NavBar