import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutPage from './AboutPage'


const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <AboutPage />
    </div>
  )
}

export default LandingPage