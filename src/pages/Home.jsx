import { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import MDMessageSection from '../components/MDMessageSection'
import ServicesPreview from '../components/ServicesPreview'
import TeamSection from '../components/TeamSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <MDMessageSection />
      <ServicesPreview />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
