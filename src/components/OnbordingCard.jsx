import React from 'react'

const OnbordingCard = (props) => {
  return (
    <div>
        <hr />
        <h4 className='flex items-center gap-2 font-semibold my-6'><span className='text-5xl text-[#45C1CE]'>{props.num}</span><span>{props.title}</span></h4>
        <p className='mb-6'>{props.text}</p>
    </div>
  )
}

export default OnbordingCard