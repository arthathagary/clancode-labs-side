import React from 'react'
import OnbordingCard from './OnbordingCard'

const OnboardingSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 md:flex items-center justify-center'>
    <OnbordingCard />
    <OnbordingCard />
    <OnbordingCard />
    </div>
  )
}

export default OnboardingSection