import React from 'react'
import { AiOutlinePlus} from "react-icons/ai";

const QaSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 mt-8 flex items-center'>
    <div className='bg-[#C5ECF0] p-8'>
        <h4>General</h4>
        <div className='flex items-center justify-center gap-4'>
            <div>
                <h5>Do you build MVP?</h5>
                <h5>I already have a team. Can you help expand?</h5>
                <h5>We need an app to go with our website. Can you handle that?</h5>
                <h5>I need a good product within a fortnight. Help!</h5>
            </div>
            <div>
                <h5><AiOutlinePlus /></h5>
                <h5><AiOutlinePlus /></h5>
                <h5><AiOutlinePlus /></h5>
                <h5><AiOutlinePlus /></h5>
            </div>
        </div>
    </div>

    <div>
        <h4>Onboarding</h4>
    </div>
    </div>
  )
}

export default QaSection