import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutPage from './AboutPage'
import IdeasToStorySection from '../components/IdeasToStorySection'
import StoriesToProductSection from '../components/StoriesToProductSection'
import OnboardingSection from '../components/OnboardingSection'
import ServicesPage from './ServicesPage'
import QaSection from '../components/QaSection'
import GetStartedSection from '../components/GetStartedSection'
import Footer from './Footer'
import TrustedBySection from '../components/TrustedBySection'
import ProductDevelpment from '../components/ProductDevelpment'
import MvpSection from '../components/MvpSection'
import ServiceDropDown from '../components/ServiceDropDown'


const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        {/* <ServiceDropDown /> */}
        <HeroSection />
        <TrustedBySection />
        <ProductDevelpment />
        <MvpSection />
        {/* <AboutPage /> */}
        {/* <IdeasToStorySection /> */}
        {/* <StoriesToProductSection /> */}
        {/* <OnboardingSection /> */}
        <ServicesPage />
        <QaSection />
        <GetStartedSection />
        <Footer />
    </div>
  )
}

export default LandingPage