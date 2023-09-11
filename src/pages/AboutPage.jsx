import React from 'react'
import AboutCard from '../components/AboutCard'


const AboutPage = () => {
  return (
    <div id='aboutpage' className='md:h-[100vh] w-full md:px-32 px-8 flex flex-col items-center md:mt-28 lg:mt-0 justify-center py-6 md:py-0'>
        <h2>Engineering Approach</h2>
        <AboutCard />
    </div>
  )
}

export default AboutPage