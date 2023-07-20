import React from 'react'
import Image from 'next/image'
import webAppProjectImg from '../../../public/assets/images/webAppProject.jpg'

const MvpSection = () => {
  return (
    <div className='md:flex md:h-[70vh] w-full md:px-32 px-8 py-6 md:py-0 justify-center items-center gap-8'>
        <div className='md:w-[50%]'>
            <Image src={webAppProjectImg}  alt='webAppProjectImg'/>
        </div>

        <div className='md:w-[50%]'>
            <h3>Minimum Value Products</h3>
            <h2>We bulid lightweight, scalable MVPs</h2>
            <p>We help you to Go-To-Market fast, continue to iterate and scale up while you grow</p>
            <button>Explore More</button>
        </div>
    </div>
  )
}

export default MvpSection