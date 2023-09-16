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

<div className=' fixed  z-40  left-0 top-0 w-full bg-white ease-in-out shadow-md duration-500  md:px-28 px-8  md:py-0'>
  <div className=' w-full m-auto h-[75px]  flex justify-between items-center text-black' >

          <div   className='w-[200px] justify-center'> <Link href='/' > <Image src={Logo} alt=''/></Link></div>
        
  <ul className='hidden lg:flex md:text-xs xl:pl-14  lg:text-lg ml-10 '>
    
    <li className=' p-4 pr-7 scroll-s hover:text-red-700 hover:scale-105 font-medium'>
    <Link href='/'> Home</Link>
    </li>
    <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105  font-medium'>
    <Link href="/#about">About</Link></li>
    
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href="/#services">Service</Link></li>
   {/* <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Portfolio</Link></li>
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Careers </Link></li> */}
   <li className=' p-4 pr-7 hover:text-red-700 hover:scale-105 font-medium '><Link href='/'>Blog</Link></li>
  
  </ul>
  <div>
    
  </div>
  <div>
   <li className=' hidden border-none  lg:flex group text-xl  md:text-xl font-medium bg-[#45C1CE] hover:bg-[#3a9fa8] py-3 px-4 rounded-full mt-0 md:self-start text-[#004450]'
   ><Link href='/contact'>Contact Us </Link></li>
   </div>

  
  {/* mobile Icons */}

  <div className=' lg:hidden z-50 block cursor-pointer '  onClick={handleHamClick}>
  
        {!nav?<FaBars size={20} color='black' />:<FaTimes size={20} color='white' />}
       
  </div>
  {/* Mobile menu */}
  <div   className={nav ? ' lg:hidden text-black  absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in-out duration-500':'lg:hidden  absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-500  text-center ease-in-out duration-500 ' }>
  <ul onClick={handleHamClick}>
    <li  className='p-4 text-2xl hover:text-gray-900  text-white '>
      <Link href="/">Home</Link>
    </li>
    <li  className='p-4 text-2xl hover:text-gray-900  text-white  '>
      <Link href="/#about">About</Link>
    </li>
   <li  className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="/#services">Service</Link></li>
   <li  className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#mvpsection">Portfolio</Link></li>
   <li  className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Careers</Link></li>
   <li  className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Blog</Link></li>
 <button  className="lg:flex group text-xl md:text-2xl font-medium bg-[#45C1CE] hover:bg-[#3a9fa8] py-3 px-5 rounded-full mt-2 md:self-start text-[#004450]"onClick={()=>{
    router.push('/contact')
   }} >Contact Us</button>
   
  </ul>
  </div>
  </div>
</div>

 
  )
}

export default NavBar