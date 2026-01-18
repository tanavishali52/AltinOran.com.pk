import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Team = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: 'Mudassar Sultan Hashmi',
      qualifications: ['B. Sc. Civil Engineering', 'Managing Director'],
      description: 'An experienced civil engineer and Managing Director, leading projects with expertise and innovation.',
      // Professional portraits - Replace with actual team photos if available
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
      role: 'MD'
    },
    {
      name: 'Sajid Ali',
      qualifications: ['B. Sc. Civil Engineering', 'Director Technical'],
      description: 'A skilled technical director ensuring project excellence and structural integrity.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
      role: 'Technical'
    },
    {
      name: 'Muhammad Numan Ch.',
      qualifications: ['B. Sc. Architecture', 'Principal Architect'],
      description: 'A creative architect specializing in innovative and functional building designs.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
      role: 'Architecture'
    },
    {
      name: 'Faizan Muhaudin',
      qualifications: ['MBA', 'Business Development Manager'],
      description: 'A strategic business developer focused on growth and client relationships.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
      role: 'Business'
    },
    {
      name: 'Muhammad Tahir',
      qualifications: ['PhD Structural Engineering', 'Senior Structure Designer'],
      description: 'An expert structural designer ensuring safe and efficient engineering solutions.',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=500&fit=crop&q=80',
      role: 'Structural'
    },
    {
      name: 'M. Rizwan Arshad',
      qualifications: ['B. Tech Civil', 'Project Manager'],
      description: 'An efficient project manager coordinating construction projects with precision and dedication.',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop&q=80',
      role: 'Management'
    },
    {
      name: 'Syed Nabeel Kazmi',
      qualifications: ['B. Tech Civil', 'Construction Manager'],
      description: 'A dedicated construction manager overseeing site operations and ensuring quality standards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
      role: 'Construction'
    },
    {
      name: 'Shoaib Nazeer',
      qualifications: ['B. Sc. Civil Engineering', 'Construction Manager'],
      description: 'An experienced construction manager leading teams to deliver exceptional construction projects.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
      role: 'Construction'
    },
    {
      name: 'Muhammad Azam',
      qualifications: ['DAE Civil', 'Site Engineer'],
      description: 'A skilled site engineer managing daily construction activities and ensuring quality control.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
      role: 'Engineering'
    },
    {
      name: 'Tahir Iqbal',
      qualifications: ['DAE Civil', 'Site Engineer'],
      description: 'An experienced site engineer responsible for on-site supervision and technical execution.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
      role: 'Engineering'
    },
    {
      name: 'Mudassar Sajjad',
      qualifications: ['B. Sc. Electrical Engineering', 'Site Incharge Electrical'],
      description: 'A qualified electrical engineer managing all electrical installations and systems on site.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
      role: 'Electrical'
    },
    {
      name: 'Sajjad Hussain',
      qualifications: ['DAE Mechanical', 'Site Incharge Mechanical'],
      description: 'A skilled mechanical technician overseeing mechanical systems and equipment installations.',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=500&fit=crop&q=80',
      role: 'Mechanical'
    },
    {
      name: 'Tehseen Junaid',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'A diligent site supervisor ensuring smooth operations and adherence to safety protocols.',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop&q=80',
      role: 'Supervision'
    },
    {
      name: 'Jameel Arshad',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'An experienced supervisor managing workforce and maintaining high construction standards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
      role: 'Supervision'
    },
    {
      name: 'Naveed Akram',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'A committed site supervisor coordinating daily activities and ensuring project progress.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
      role: 'Supervision'
    },
    {
      name: 'Ahsan Afzal',
      qualifications: ['DAE Civil', 'Chief Surveyor'],
      description: 'An expert surveyor responsible for accurate site measurements and land surveying.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
      role: 'Surveying'
    },
    {
      name: 'Tabassum Ali',
      qualifications: ['DAE Civil', 'Surveyor'],
      description: 'A skilled surveyor providing precise measurements and technical support for projects.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80',
      role: 'Surveying'
    },
    {
      name: 'M. Muqaddas',
      qualifications: ['DAE Civil', 'Laboratory Technician'],
      description: 'A qualified lab technician conducting quality tests on construction materials.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&q=80',
      role: 'Quality'
    },
    {
      name: 'Talib Hussain',
      qualifications: ['M. Com.', 'Manager Accounts'],
      description: 'A professional accounts manager handling financial operations and budget management.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
      role: 'Accounts'
    },
    {
      name: 'M. Yasir',
      qualifications: ['Intermediate', 'Admin'],
      description: 'An efficient administrator managing office operations and administrative tasks.',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=500&fit=crop&q=80',
      role: 'Admin'
    }
  ]

  // Background colors for cards (alternating)
  const getBgColor = (index) => {
    const colors = [
      '#E3F2FD', // Light Blue
      '#1E3A8A', // Dark Blue
      '#FEF3C7', // Light Yellow
      '#F5F5F5', // Off White
      '#E0F2FE', // Sky Blue
      '#1F2937', // Dark Gray
      '#FCE7F3', // Pink
      '#F0FDF4', // Light Green
    ]
    return colors[index % colors.length]
  }

  const getTextColor = (bgColor) => {
    const darkColors = ['#1E3A8A', '#1F2937']
    return darkColors.includes(bgColor) ? 'text-white' : 'text-black'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden pt-24 md:pt-28 pb-20 px-5 bg-black">
        <div className="relative max-w-6xl mx-auto text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Team
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full animate-fade-in-up-delay-1"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up-delay-2">
            Meet the talented professionals who make ALTIN ORAN a leader in the construction industry. 
            Our diverse team combines expertise, creativity, and dedication to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.map((member, index) => {
              const isVisible = visibleCards.includes(index)
              const isHovered = hoveredCard === index
              const bgColor = getBgColor(index)
              const textColor = getTextColor(bgColor)
              const isRoundedArch = index % 4 !== 0 // Alternate between rounded arch and rectangle

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-index={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isRoundedArch ? 'aspect-[2/3] sm:aspect-[3/4]' : 'aspect-[3/4] sm:aspect-[4/5]'}`}
                  style={{
                    transitionDelay: `${index * 0.05}s`
                  }}
                >
                  {/* Card Container with Background Color */}
                  <div 
                    className={`relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105 ${
                      isRoundedArch ? 'rounded-t-[60%] rounded-b-2xl' : 'rounded-2xl'
                    }`}
                    style={{ backgroundColor: bgColor }}
                  >
                    {/* Image Container */}
                    <div className="absolute inset-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.style.display = 'none'
                          const parent = e.target.parentElement
                          if (parent && !parent.querySelector('.initials-fallback')) {
                            const initials = member.name
                              .split(' ')
                              .map(n => n[0])
                              .join('')
                              .toUpperCase()
                            const fallbackDiv = document.createElement('div')
                            fallbackDiv.className = 'initials-fallback w-full h-full flex items-center justify-center bg-gray-300'
                            fallbackDiv.innerHTML = `<span class="text-6xl md:text-7xl text-gray-600 font-bold">${initials}</span>`
                            parent.appendChild(fallbackDiv)
                          }
                        }}
                      />
                    </div>

                    {/* Dark Overlay on Hover */}
                    <div 
                      className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isHovered ? 'opacity-40' : 'opacity-0'
                      }`}
                    ></div>

                    {/* Name and Role - Shows on Hover/Click */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transition-all duration-500 ${
                        isHovered 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {/* White Background for Text */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-xl">
                        <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 text-black transition-all duration-300`}>
                          {member.name}
                        </h3>
                        <div className="space-y-1">
                          {member.qualifications.map((qual, idx) => (
                            <p key={idx} className="text-xs sm:text-sm text-gray-700 font-medium">
                              {qual}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div 
                      className={`absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 transition-opacity duration-300 ${
                        isHovered ? 'opacity-0' : 'opacity-30'
                      }`}
                    >
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${textColor} bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30`}>
                        <i className="fas fa-plus text-xs sm:text-sm"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: teamMembers.length, label: 'Team Members', icon: 'fa-users' },
              { value: '25+', label: 'Years Experience', icon: 'fa-calendar' },
              { value: '500+', label: 'Projects Done', icon: 'fa-project-diagram' },
              { value: '100%', label: 'Client Satisfaction', icon: 'fa-star' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 md:p-8 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-black group-hover:text-gray-700 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 group-hover:text-black transition-colors duration-300 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="py-8 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-black"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Team
