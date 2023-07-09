import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { ImLoop2 } from "react-icons/im";

const AboutCard = () => {
  return (
    <div className='md:flex gap-8'>
    <div className='bg-[#B0E4F5] p-10'>
    <AiOutlineRise size={60} />
    <h3 className='text-2xl font-semibold my-6'>High Performance Team</h3>
    <p>Successful products are the outcome of a great team. We help you develop your ideas through a high-performance team focused on quality and outcome over output.</p>
    </div>

    <div className='bg-[#FDEAE7] p-10'>
    <FaUserGroup size={60}/>
    <h3 className='text-2xl font-semibold my-6'>Collaboration</h3>
    <p>Successful products are the outcome of a great team. We help you develop your ideas through a high-performance team focused on quality and outcome over output.</p>
    </div>

    <div className='bg-[#D8ECC5] p-10'>
    <ImLoop2 size={60}/>
    <h3 className='text-2xl font-semibold my-6'>Continuous Learning</h3>
    <p>Successful products are the outcome of a great team. We help you develop your ideas through a high-performance team focused on quality and outcome over output.</p>
    </div>
    </div>
  )
}

export default AboutCard