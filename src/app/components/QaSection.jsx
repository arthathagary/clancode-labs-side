import React from 'react'
import { AiOutlinePlus} from "react-icons/ai";

const QaSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 mt-8 md:flex items-center'>
    <div className='bg-[#C5ECF0] p-8 md:w-[50%]'>
        <h4 className='text-2xl font-semibold mb-4'>General</h4>
        
            <div>
                <h5 className='flex items-center justify-between gap-4 text-xl font-medium mb-4'><span>Do you build MVP?</span><span><AiOutlinePlus/></span></h5>
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                <h5 className='flex items-center justify-between gap-4 text-xl font-medium mb-4'><span>I already have a team. Can you help expand?</span><span><AiOutlinePlus/></span></h5>
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                <h5 className='flex items-center justify-between gap-4 text-xl font-medium mb-4'><span>We need an app to go with our website. Can you handle that?</span><span><AiOutlinePlus/></span></h5>
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                <h5 className='flex items-center justify-between gap-4 text-xl font-medium mb-4'><span>I need a good product within a fortnight. Help!</span><span><AiOutlinePlus/></span></h5>
            </div>
           
        
    </div>

    <div>
        <h4>Onboarding</h4>
    </div>
    </div>
  )
}

export default QaSection