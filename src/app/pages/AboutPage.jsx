import React from 'react'
import AboutCard from '../components/AboutCard'


const AboutPage = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 flex flex-col items-center justify-center'>
        <h1 className='text-5xl text-center mb-16 mt-8 md:mt-0 font-semibold text-[#004450]'>Engineering Approach</h1>
        <AboutCard />
    </div>
  )
}

export default AboutPage