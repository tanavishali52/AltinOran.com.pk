import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const projectsCountRef = useRef(null)
  const yearsCountRef = useRef(null)
  const clientsCountRef = useRef(null)
  const awardsCountRef = useRef(null)

  // Background images array
  const backgroundImages = [
    '/client-img/WC-BAnner-2-scaled.jpg',
    '/image/new-house-construction-building-site_293060-52.jpg',
    '/image/residential-commercial-construction-slowdown-continues-in-higher-interest-rate-environment-key.jpg',
    '/image/Render_01.jpg',
    '/image/Construction-Cost-For-5-Marla-Houses-In-Pakistan1-1.jpg'
  ]

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Navigate to previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    )
  }

  // Navigate to next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    const animateCounter = (ref, target, suffix = '') => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          ref.current.textContent = target + suffix
          clearInterval(timer)
        } else {
          ref.current.textContent = Math.floor(current) + suffix
        }
      }, 30)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(projectsCountRef, 100, '+')
            animateCounter(yearsCountRef, 25)
            animateCounter(clientsCountRef, 100, '+')
            animateCounter(awardsCountRef, 20)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (projectsCountRef.current) {
      observer.observe(projectsCountRef.current.parentElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center text-white overflow-hidden pt-16 md:pt-20">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPreviousImage}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg"
        aria-label="Previous image"
      >
        <i className="fas fa-chevron-left text-sm md:text-base"></i>
      </button>
      <button
        onClick={goToNextImage}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg"
        aria-label="Next image"
      >
        <i className="fas fa-chevron-right text-sm md:text-base"></i>
      </button>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-4 md:mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              <i className="fas fa-award"></i>
              <span>PEC & SECP Registered Since 1995</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight animate-fade-in-up">
            Building Dreams,<br />
            <span className="text-primary">Shaping Futures</span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-4 md:mb-6 animate-fade-in-up-delay-1">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 mb-2">
              ALTIN ORAN ENGINEERING
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Architectural / Interiors / Town Planning Consultants
            </p>
          </div>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-white/85 animate-fade-in-up-delay-1 max-w-2xl">
            Turning your vision into reality with precision engineering and expert craftsmanship. 
            Over 25 years of excellence in construction, design, and planning.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-8 md:mb-12 animate-fade-in-up-delay-2">
            <Link
              to="/#Contact"
              className="bg-primary text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold rounded-lg uppercase transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Get a Quote
            </Link>
            <Link
              to="/#Project"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold rounded-lg uppercase transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <i className="fas fa-building"></i>
              Our Projects
            </Link>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 animate-fade-in-up-delay-3">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 lg:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                <i className="fas fa-project-diagram text-white text-xs md:text-sm lg:text-base"></i>
              </div>
              <div ref={projectsCountRef} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">
              0
              </div>
              <div className="text-xs md:text-sm text-white/90 font-medium leading-tight">Projects Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 lg:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                <i className="fas fa-calendar-alt text-white text-xs md:text-sm lg:text-base"></i>
              </div>
              <div ref={yearsCountRef} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">
              0
              </div>
              <div className="text-xs md:text-sm text-white/90 font-medium leading-tight">Years of Experience</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 lg:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                <i className="fas fa-users text-white text-xs md:text-sm lg:text-base"></i>
              </div>
              <div ref={clientsCountRef} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">
              0
              </div>
              <div className="text-xs md:text-sm text-white/90 font-medium leading-tight">Happy Clients</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 lg:p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                <i className="fas fa-trophy text-white text-xs md:text-sm lg:text-base"></i>
              </div>
              <div ref={awardsCountRef} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">
              0
              </div>
              <div className="text-xs md:text-sm text-white/90 font-medium leading-tight">Awards Won</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 animate-fade-in-up-delay-3 mb-4">
            <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm lg:text-base">
              <i className="fas fa-check-circle text-primary"></i>
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm lg:text-base">
              <i className="fas fa-shield-alt text-primary"></i>
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm lg:text-base">
              <i className="fas fa-clock text-primary"></i>
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators - Moved below content */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
