import React from 'react'

const StoriesToProductSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 md:flex items-center justify-center bg-[#DAF3F4]'>

    <div className='md:w-[50%]'>
        <h1>1st</h1>
    </div>

    <div className='md:w-[50%]'>
        <h1 className='bg-[#FFFFFF] inline-block px-4 py-2 rounded-full mb-16'>Stories to Product</h1>
        <h1>We're all about converting user journeys to product.</h1>
        <p>As our engineering team work with you on bringing your idea to life, we help you understand your customers even better. We gather continuous feedback in our development process and help align the product to better solve your customers' pain points. As a technical partner, we help in choosing the right technology to solve the problem and go to market as fast as possible.</p>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

       <ul>
            <li>High fidelity protopypes</li>
            <li>Mobile and web development</li>
            <li>Cloud & Devops</li>
            <li>Agile delivery management</li>
        </ul>
    </div>
    </div>
  )
}

export default StoriesToProductSection