'use client';
import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../../public/assets/images/logo.svg'
import Link from 'next/link';
import {useRouter } from 'next/navigation';



const NavBar = () => {
  const router = useRouter()
  const [nav,setNav] = useState(false);


  const handleHamClick = ()=>setNav(!nav)

  const [menu,setMenu] = useState(true);
  const handleMouseOver = ()=>{
    setMenu(!menu);
  }
  return (

<div className=' fixed  z-40  left-0 top-0 w-full ease-in-out shadow-md duration-500 '>
  <div className=' w-full m-auto h-[75px] bg-white flex justify-evenly items-center p-4 text-black' >

          <div   className='w-[200px] justify-center bg-black'> <Link href='/' > <Image src={Logo} alt=''/></Link></div>
        
  <ul  className='hidden lg:flex md:text-xs  lg:text-lg  '>
    
    <li className=' p-4 pr-7 scroll-s hover:text-red-700 hover:scale-105 font-medium'>
    <Link href='/'> Home</Link>
    </li>
    <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105  font-medium'>
    <Link href="/#aboutpage">About</Link></li>
    
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href="/#services">Service</Link></li>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Portfolio</Link></li>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Careers </Link></li>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Blog</Link></li>
  
  </ul>
  <div>
    
  </div>
  <div>
   <button className='font-mono hidden border-none  lg:flex items-center justify-center mt-2 type="button" class="focus:outline-none text-white bg-[#808080] hover:bg-black   text-xl rounded-lg f  px-3 py-2 mr-2 mb-2'onClick={()=>{
    router.push('/contact')
   }}>Contact Us</button>
   </div>

  
  {/* mobile Icons */}

  <div className=' lg:hidden z-50 block cursor-pointer '  onClick={handleHamClick}>
  
        {!nav?<FaBars size={20}  className=''/>:<FaTimes size={20} className='mt-0 text-black bg-white'/>}
       
  </div>
  {/* Mobile menu */}
  <div  className={nav ? ' lg:hidden text-black  absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in-out duration-500':'lg:hidden  absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-500  text-center ease-in-out duration-500 '}>
  <ul>
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white '>
      <a href="/">Home</a>
    </li>
    <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900  text-white  '>
      <Link href="/#about">About</Link>
    </li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="/#services">Service</Link></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#mvpsection">Portfolio</Link></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Careers</Link></li>
   <li onClick={handleHamClick} className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Blog</Link></li>
 <button onClick={handleHamClick} className='type="button" class="focus:outline-none text-black bg-[#808080] hover:bg-white hover:text-black focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-white dark:focus:ring-green-800" '>  <Link href="/contact">Contact Us</Link></button>
   
  </ul>
  </div>
  </div>
</div>

 
  )
}

export default NavBar