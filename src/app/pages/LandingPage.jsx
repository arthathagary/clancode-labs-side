import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutPage from './AboutPage'
import IdeasToStorySection from '../components/IdeasToStorySection'
import StoriesToProductSection from '../components/StoriesToProductSection'
import OnboardingSection from '../components/OnboardingSection'


const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <AboutPage />
        <IdeasToStorySection />
        <StoriesToProductSection />
        <OnboardingSection />
    </div>
  )
}

export default LandingPage