import { useEffect } from 'react'
import Footer from '../components/Footer'

const Services = () => {
  useEffect(() => {
    // Smooth scroll to anchor on mount if hash exists
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  const services = [
    {
      id: 'Agricalture',
      title: 'Architectural Engineering',
      icon: 'fa-drafting-compass',
      description: `Our architectural engineering services offer a harmonious blend of creativity and technical expertise. With a dedicated team of architects and engineers, we provide comprehensive solutions that envision, design, and realize extraordinary structures. From concept development to detailed blueprints, our collaborative approach ensures seamless integration of aesthetics, functionality, and sustainability. With a focus on innovation and cutting-edge technologies, we bring efficiency to every project, be it residential, commercial, or industrial.`,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop' // Architecture/blueprints
    },
    {
      id: 'civil',
      title: 'Civil Construction Work',
      icon: 'fa-hard-hat',
      description: `Our civil construction services offer comprehensive solutions for all your infrastructure needs. With a team of experienced engineers, skilled laborers, from road construction and bridges to water supply systems and drainage networks, we deliver top-notch quality that stands the test of time. Safety and sustainability are at the core of our operations, ensuring a secure and environmentally responsible approach. Embracing innovation and client-centricity.`,
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop' // Construction site
    },
    {
      id: 'Steel',
      title: 'Steel Fabrication',
      icon: 'fa-industry',
      description: `Our steel fabrication work exemplifies precision, durability, and ingenuity. With cutting-edge technology and skilled craftsmanship, we shape raw steel into tailored solutions for diverse industries. From structural frameworks to intricate components, our expertise ensures superior quality and timely delivery. Each project is executed with unwavering attention to detail, adhering to the highest industry standards. Whether it's commercial buildings, industrial structures, or architectural marvels, our steel fabrication work stands.`,
      color: 'amber',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop' // Steel fabrication
    },
    {
      id: 'interior',
      title: 'Interior Design & Work',
      icon: 'fa-couch',
      description: `We bring your spaces to life through our impeccable design and seamless implementation. With a keen eye for aesthetics and functionality, our team of talented designers creates bespoke solutions that reflect your unique style and needs. From conceptualization to execution, we handle every aspect with meticulous attention to detail, ensuring a smooth and efficient process. With a passion for innovation and a commitment to quality, we transform interiors into captivating environments that evoke emotion and leave a lasting impression.`,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop' // Modern interior
    },
    {
      id: 'Ranovation22',
      title: 'Renovation Services',
      icon: 'fa-tools',
      description: `Discover the art of transformation with our renovation services. At Altin Oran, we breathe new life into your spaces, reviving them with creativity and precision. Our skilled team of experts is passionate about revitalizing interiors and exteriors alike, from residential homes to commercial establishments. With a keen eye for detail and a commitment to quality, we reimagine your vision, crafting seamless designs that enhance functionality and aesthetics. From concept to completion.`,
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop' // Home renovation
    },
    {
      id: 'finishing',
      title: 'Finishing Work',
      icon: 'fa-paint-roller',
      description: `Our finishing work services in the construction industry are second to none. With meticulous attention to detail, our skilled craftsmen deliver exceptional outcomes that elevate the aesthetic appeal and functionality of any project. From flawless interior and exterior painting to expertly installed flooring, elegant tiling, and immaculate carpentry, we take pride in providing a comprehensive range of finishing services. Our commitment to quality ensures that each project is completed on time and to the highest standards.`,
      color: 'amber',
      image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&h=600&fit=crop' // Finishing work
    },
    {
      id: 'retrofitting',
      title: 'Retrofitting Services',
      icon: 'fa-cogs',
      description: `Our retrofitting services offer comprehensive solutions to upgrade and enhance existing structures, ensuring they meet modern standards of safety, efficiency, and sustainability. Whether it's a commercial building, residential complex, or industrial facility, our retrofitting services are designed to deliver cost-effective and long-term solutions. We prioritize minimal disruption to your daily operations and ensure that the retrofitting process is carried out efficiently and with the utmost care.`,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop' // Building retrofit
    },
    {
      id: 'safety',
      title: 'Safety Policy',
      icon: 'fa-shield-alt',
      description: `Our retrofitting services offer comprehensive solutions to upgrade and enhance existing structures, ensuring they meet modern standards of safety, efficiency, and sustainability. and the communities we serve. Our goal is to prevent accidents, injuries, and occupational illnesses through rigorous safety training, hazard identification, and risk assessments. We strictly adhere to local safety regulations and industry standards, continuously improving our safety practices through regular audits and feedback.`,
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop' // Construction safety
    }
  ]

  const getColorClasses = (color, index) => {
    const colorMap = {
      blue: {
        border: 'border-blue-500',
        hoverText: 'hover:text-blue-500',
        iconColor: 'text-blue-500',
        gradient: 'from-blue-500 to-teal-400',
        bgGradient: 'bg-gradient-to-br',
        afterBg: 'bg-blue-500'
      },
      teal: {
        border: 'border-teal-400',
        hoverText: 'hover:text-teal-400',
        iconColor: 'text-teal-400',
        gradient: 'from-teal-400 to-cyan-400',
        bgGradient: 'bg-gradient-to-br',
        afterBg: 'bg-teal-400'
      },
      amber: {
        border: 'border-amber-500',
        hoverText: 'hover:text-amber-500',
        iconColor: 'text-amber-500',
        gradient: 'from-amber-500 to-orange-400',
        bgGradient: 'bg-gradient-to-br',
        afterBg: 'bg-amber-500'
      }
    }
    
    // Cycle through colors based on index (3n+1, 3n+2, 3n+3)
    const colorIndex = (index % 3) + 1
    if (colorIndex === 1) return colorMap.blue
    if (colorIndex === 2) return colorMap.teal
    return colorMap.amber
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Header Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-20 p-12 md:p-16 bg-white rounded-3xl shadow-xl relative overflow-hidden">
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-teal-400"></div>
            
            <h4 className="text-blue-600 uppercase tracking-widest mb-4 text-base font-semibold">
              Construction Work
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 relative inline-block">
              Services Details
              {/* Underline */}
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></span>
            </h1>
          </div>

          {/* Services List */}
          <div className="space-y-6 md:space-y-8 pb-16 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color, index)
              const isEven = index % 2 === 0 // Even index (0, 2, 4, 6) = Image left, Text right
              
              return (
                <div key={service.id} id={service.id}>
                  <span className="block relative -top-24 invisible"></span>
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative group max-w-5xl mx-auto">
                    {/* Left Border on Hover */}
                    <div className={`absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b ${colors.gradient} transition-all duration-500 group-hover:h-full z-20`}></div>
                    
                    {/* Two Column Layout */}
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-stretch`}>
                      {/* Image Section - Full Height */}
                      <div className="lg:w-2/5 relative h-56 md:h-64 lg:h-auto lg:min-h-[320px] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:min-h-[320px]"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        {isEven ? (
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                      </div>

                      {/* Text Content Section */}
                      <div className="lg:w-3/5 p-4 md:p-6 lg:p-7 flex flex-col justify-center relative h-56 md:h-64 lg:h-auto lg:min-h-[320px]">
                        {/* Decorative Corner */}
                        <div className={`absolute ${isEven ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-16 h-16 bg-gradient-to-tl from-blue-50/50 to-transparent ${isEven ? 'rounded-tl-full' : 'rounded-tr-full'}`}></div>

                        <div className="relative z-10">
                          <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 md:mb-4 transition-all duration-300 group-hover:translate-x-1 ${colors.hoverText} flex items-center gap-3`}>
                            <i className={`fas ${service.icon} text-2xl md:text-3xl ${colors.iconColor}`}></i>
                            <span>{service.title}</span>
                          </h1>
                          
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
                            {service.description}
                          </p>

                          {/* Director Section */}
                          <div className={`mt-4 p-4 md:p-5 bg-gradient-to-r ${isEven ? 'from-gray-50 to-white' : 'from-white to-gray-50'} border-l-4 ${colors.border} rounded-r-lg transition-all duration-300 group-hover:shadow-md relative overflow-hidden`}>
                            {/* Background Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                            
                            <div className="relative z-10">
                              <h4 className="text-slate-600 text-xs md:text-sm uppercase tracking-wide mb-1.5">
                                Managing Director
                              </h4>
                              <h5 className="text-slate-800 text-lg md:text-xl font-bold relative inline-block">
                                Altin Oran
                                {/* Animated Underline */}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 w-0 ${colors.afterBg} transition-all duration-300 group-hover:w-full`}></span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
