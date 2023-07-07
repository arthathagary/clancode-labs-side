import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutPage from './AboutPage'
import IdeasToStorySection from '../components/IdeasToStorySection'
import StoriesToProductSection from '../components/StoriesToProductSection'
import OnboardingSection from '../components/OnboardingSection'
import ServicesPage from './ServicesPage'


const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <AboutPage />
        <IdeasToStorySection />
        <StoriesToProductSection />
        <OnboardingSection />
        <ServicesPage />
    </div>
  )
}

export default LandingPage