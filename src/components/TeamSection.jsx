import { useRef } from 'react'

const TeamSection = () => {
  const teamCardsRef = useRef(null)

  const scrollTeam = (direction) => {
    const container = teamCardsRef.current
    if (!container) return

    const scrollAmount = 300
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const teamMembers = [
    {
      name: 'Mudassar Sultan Hashmi',
      qualifications: ['B. Sc. Civil Engineering', 'Managing Director'],
      description: 'An experienced civil engineer and Managing Director, leading projects with expertise and innovation.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Sajid Ali',
      qualifications: ['B. Sc. Civil Engineering', 'Director Technical'],
      description: 'A skilled technical director ensuring project excellence and structural integrity.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Muhammad Numan Ch.',
      qualifications: ['B. Sc. Architecture', 'Principal Architect'],
      description: 'A creative architect specializing in innovative and functional building designs.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Faizan Muhaudin',
      qualifications: ['MBA', 'Business Development Manager'],
      description: 'A strategic business developer focused on growth and client relationships.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Muhammad Tahir',
      qualifications: ['PhD Structural Engineering', 'Senior Structure Designer'],
      description: 'An expert structural designer ensuring safe and efficient engineering solutions.',
      image: '/client-img/logo.png'
    },
    {
      name: 'M. Rizwan Arshad',
      qualifications: ['B. Tech Civil', 'Project Manager'],
      description: 'An efficient project manager coordinating construction projects with precision and dedication.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Syed Nabeel Kazmi',
      qualifications: ['B. Tech Civil', 'Construction Manager'],
      description: 'A dedicated construction manager overseeing site operations and ensuring quality standards.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Shoaib Nazeer',
      qualifications: ['B. Sc. Civil Engineering', 'Construction Manager'],
      description: 'An experienced construction manager leading teams to deliver exceptional construction projects.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Muhammad Azam',
      qualifications: ['DAE Civil', 'Site Engineer'],
      description: 'A skilled site engineer managing daily construction activities and ensuring quality control.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Tahir Iqbal',
      qualifications: ['DAE Civil', 'Site Engineer'],
      description: 'An experienced site engineer responsible for on-site supervision and technical execution.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Mudassar Sajjad',
      qualifications: ['B. Sc. Electrical Engineering', 'Site Incharge Electrical'],
      description: 'A qualified electrical engineer managing all electrical installations and systems on site.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Sajjad Hussain',
      qualifications: ['DAE Mechanical', 'Site Incharge Mechanical'],
      description: 'A skilled mechanical technician overseeing mechanical systems and equipment installations.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Tehseen Junaid',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'A diligent site supervisor ensuring smooth operations and adherence to safety protocols.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Jameel Arshad',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'An experienced supervisor managing workforce and maintaining high construction standards.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Naveed Akram',
      qualifications: ['DAE Civil', 'Site Supervisor'],
      description: 'A committed site supervisor coordinating daily activities and ensuring project progress.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Ahsan Afzal',
      qualifications: ['DAE Civil', 'Chief Surveyor'],
      description: 'An expert surveyor responsible for accurate site measurements and land surveying.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Tabassum Ali',
      qualifications: ['DAE Civil', 'Surveyor'],
      description: 'A skilled surveyor providing precise measurements and technical support for projects.',
      image: '/client-img/logo.png'
    },
    {
      name: 'M. Muqaddas',
      qualifications: ['DAE Civil', 'Laboratory Technician'],
      description: 'A qualified lab technician conducting quality tests on construction materials.',
      image: '/client-img/logo.png'
    },
    {
      name: 'Talib Hussain',
      qualifications: ['M. Com.', 'Manager Accounts'],
      description: 'A professional accounts manager handling financial operations and budget management.',
      image: '/client-img/logo.png'
    },
    {
      name: 'M. Yasir',
      qualifications: ['Intermediate', 'Admin'],
      description: 'An efficient administrator managing office operations and administrative tasks.',
      image: '/client-img/logo.png'
    }
  ]

  return (
    <section id="our-team" className="relative text-white py-10 px-5 md:py-[40px] md:px-5 text-center max-w-full mx-auto overflow-hidden">
      {/* Background with Construction Theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/client-img/WC-BAnner-2-scaled.jpg')`
        }}
      />
      <div className="relative z-10">
      <h2 className="text-2xl md:text-3xl mb-8 relative pb-4">
        Our Team
        <span className="block w-[60px] h-0.5 bg-white mx-auto mt-4"></span>
      </h2>
      
      <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base">
        Meet the talented professionals who make Altin Oran a leader in the construction industry. 
        Our diverse team combines expertise, creativity, and dedication to deliver exceptional results.
      </p>
      
      <div className="relative max-w-6xl mx-auto overflow-hidden py-2.5">
        <div 
          ref={teamCardsRef}
          className="flex overflow-x-auto scroll-smooth gap-5 py-5 px-2.5 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-[220px] sm:w-[240px] md:w-[260px] bg-white/10 rounded-xl overflow-hidden text-center transition-transform duration-300 hover:-translate-y-2.5 shadow-lg flex flex-col h-[300px] sm:h-[320px] md:h-[340px]"
            >
              <div className="w-full h-[140px] sm:h-[150px] md:h-[170px] overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 bg-white/15 flex-grow flex flex-col">
                <h3 className="m-0 mb-1 text-base sm:text-lg font-semibold">{member.name}</h3>
                {member.qualifications.map((qual, idx) => (
                  <div key={idx} className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-3 italic">
                    {qual}
                  </div>
                ))}
                <p className="text-xs sm:text-sm my-2 sm:my-2.5 flex-grow line-clamp-3">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => scrollTeam('left')}
          className="bg-white/20 border-none text-white w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-white/40 focus:outline-none text-xl"
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          onClick={() => scrollTeam('right')}
          className="bg-white/20 border-none text-white w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-white/40 focus:outline-none text-xl"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
      </div>
    </section>
  )
}

export default TeamSection
