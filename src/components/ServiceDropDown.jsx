import React from 'react'

const ServiceDropDown = () => {
  return (
    <div className='absolute top-[80px] left-0 w-full h-[80vh] bg-[white] grid md:grid-cols-3  text-center md:px-32 px-8 pt-8'>
    <div>
    <h4>For Enterprises</h4>
    <hr className="w-[70%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    <h5>Customized Software Development</h5>
    </div>

    <div>
    <h4>For Startup</h4>
    <hr className="w-[70%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    <h5>Customized Software Development</h5>
    </div>

    <div>
    <h4>All Services</h4>
    <hr className="w-[70%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    <h5>Customized Software Development</h5>
    </div>
    </div>
  )
}

export default ServiceDropDown