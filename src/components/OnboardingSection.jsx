import React from 'react'
import OnbordingCard from './OnbordingCard'
import onBoardingContent from '../assets/contents/onboarding'

const OnboardingSection = () => {
  return (
    <div className='md:h-[100vh] w-full md:px-32 px-8 mt-8'>
    <h2 className='text-center'>Our onboarding process</h2>
    <div className=' md:flex items-center justify-center gap-8'>
    <div>
    <OnbordingCard  num={onBoardingContent[0].num} title={onBoardingContent[0].title} text={onBoardingContent[0].text} />
    <OnbordingCard num={onBoardingContent[1].num} title={onBoardingContent[1].title} text={onBoardingContent[1].text} />
    </div>
    <div className='hidden lg:flex lg:flex-col'>
    <OnbordingCard num={onBoardingContent[2].num} title={onBoardingContent[2].title} text={onBoardingContent[2].text}/>
    <OnbordingCard num={onBoardingContent[3].num} title={onBoardingContent[3].title} text={onBoardingContent[3].text}/>
    </div>
    <div>
    <OnbordingCard num={onBoardingContent[2].num} title={onBoardingContent[2].title} text={onBoardingContent[2].text}/>
    <OnbordingCard num={onBoardingContent[3].num} title={onBoardingContent[3].title} text={onBoardingContent[3].text}/>
    </div>
    
    
    </div>
    </div>
  )
}

export default OnboardingSection