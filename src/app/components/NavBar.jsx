'use client';
import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes,FaArrowRight} from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo.svg'
import Link from 'next/link'
import ServiceDropDown from './ServiceDropDown';

const NavBar = () => {
  const [nav,setNav] = useState(false);
  const [color,setColor]=useState('transparent')
  const [text,setText] =useState('white')

  const handleHamClick = ()=>setNav(!nav)

useEffect(()=>{
  const change=()=>{
    if(window.scrollY>=90){

      setColor('rgb(30, 30, 30)')
      setText('white')
    }
    else{
      setColor('transparent')
      setText('	#330066 ')
    }
  }
  window.addEventListener('scroll',change);
},[])

  const [menu,setMenu] = useState(true);
  const handleMouseOver = ()=>{
    setMenu(!menu);
  }
  return (

<div style={{backgroundColor:`${color}`}} className='fixed z-40   left-0 top-0 w-full ease-in-out duration-500 '>
  <div className=' w-full m-auto bg-transparent flex justify-evenly items-center p-4 text-black'>
<Link href='#'> 
          <div style={{color:`${text}`}}  className='w-[200px] bg-black'><Image src={Logo}/></div>
        </Link>
  <ul style={{color:`${text}`}} className='hidden md:flex md:text-xs lg:text-lg  '>
    <li className='p-4'>
      <Link href="#">Home</Link>
    </li>
    <li className='p-4 '>
      <Link href="#">About</Link>
    </li>
   <li className='p-4 '><Link href="#">Service</Link></li>
   <li className='p-4 '><Link href="#">Portfolio</Link></li>
   <li className='p-4 '><Link href="#">Careers</Link></li>
   <li className='p-4 '><Link href="#">Blog</Link></li>
   <li className='p-4 '><Link href="#">Contact Us</Link></li>
   
  </ul>

  
  {/* mobile Icons */}

  <div className=' md:hidden z-50 block cursor-pointer'  onClick={handleHamClick}>
  
        {!nav?<FaBars size={20} style={{color:`${text}`}} className='text-white'/>:<FaTimes size={20} style={{color:`${text}`}}/>}
       
  </div>
  {/* Mobile menu */}
  <div style={{color:`${text}`}} className={nav ? ' md:hidden  absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in-out duration-500':'md:hidden  absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-500  text-center ease-in-out duration-500 '}>
  <ul>
    <li className='p-4 text-2xl hover:text-gray-900  text-white '>
      <Link href="#">Home</Link>
    </li>
    <li className='p-4 text-2xl hover:text-gray-900  text-white  '>
      <Link href="#">About</Link>
    </li>
   <li className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Service</Link></li>
   <li className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Portfolio</Link></li>
   <li className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Careers</Link></li>
   <li className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Blog</Link></li>
   <li className='p-4 text-2xl hover:text-gray-900   text-white '><Link href="#">Contact Us</Link></li>
   
  </ul>
  </div>
  </div>
</div>

 
  )
}

export default NavBar