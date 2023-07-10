import React from 'react'
import { FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='w-full md:px-32 px-8 md:flex items-center bg-[#004450] py-32' >
        <div >
            logo
            <p>Product engineering simplified</p>
            <FaLinkedin />
            <FaFacebookSquare />
            <AiFillInstagram />   
        </div>

        <div>

        </div>
    </footer>
  )
}

export default Footer