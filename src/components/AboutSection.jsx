const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16" id="About">
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-16 bg-gradient-to-br from-white to-gray-50 p-16 rounded-2xl shadow-lg">
        <div className="flex-1">
          <h1 className="text-5xl text-primary mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-accent">
            ALTIN ORAN Construction
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Our team of skilled professionals—including architects, engineers, and craftsmen—collaborates to bring visionary concepts to life with precision and expertise. <br />
            We are officially registered with the Pakistan Engineering Council (PEC) and Securities & Exchange Commission of Pakistan (SECP), ensuring the highest standards in all our projects.
          </p>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl">
          <video controls loop muted autoPlay className="w-full h-96 object-cover">
            <source src="/about-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-primary mb-4 text-xl font-semibold">Experience</h3>
          <p className="text-gray-600">25+ Years of Industry Leadership, Completing Over 500 Successful Projects Nationwide</p>
        </div>
        <div className="bg-white p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-primary mb-4 text-xl font-semibold">Expertise</h3>
          <p className="text-gray-600">Comprehensive Construction Services Including Residential, Commercial, and Industrial Projects</p>
        </div>
        <div className="bg-white p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-primary mb-4 text-xl font-semibold">Innovation</h3>
          <p className="text-gray-600">Cutting-Edge Technologies and Sustainable Building Practices at the Forefront of Construction</p>
        </div>
      </section>

      {/* Mission & Vision Section - Separate Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Mission - Left Side */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fas fa-bullseye text-white"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p className="text-sm md:text-base">
              To be the construction industry's premier choice, renowned for delivering innovative, sustainable, and iconic projects that enrich communities, inspire progress, and leave a lasting legacy of excellence.
            </p>
          </div>
        </section>

        {/* Vision - Right Side */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fas fa-eye text-white"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p className="text-sm md:text-base font-semibold text-primary mb-2">
              Building a Sustainable Future!
            </p>
            <p className="text-sm md:text-base">
              Our Vision is to be the Leading Construction Company in Delivering Innovative and Eco-Friendly Solutions for a Better World.
            </p>
          </div>
        </section>
      </div>

      {/* Core Values Section */}
      <section className="mt-16 md:mt-20 relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden">
        {/* Background Image - Faded on Left */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-full md:w-1/3 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/image/new-house-construction-building-site_293060-52.jpg')`
          }}
        ></div>
        
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Title & Intro */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative pb-4">
                Core Values
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gray-300"></span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                These core values guide us in every decision we make and reflect our unwavering commitment to excellence, ethics, and responsible engineering and construction practices.
              </p>
            </div>

            {/* Right Side - Values List */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Integrity */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-primary flex-shrink-0 mt-2"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Integrity</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    We uphold the highest ethical standards in all our interactions, ensuring honesty, transparency, and accountability in every aspect of our work.
                  </p>
                </div>
              </div>

              {/* Safety */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-primary flex-shrink-0 mt-2"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Safety</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The well-being of our employees, partners, and communities is paramount. We prioritize safety in all construction practices, creating secure environments for everyone involved.
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-primary flex-shrink-0 mt-2"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Quality</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    We are committed to delivering exceptional craftsmanship and uncompromising quality in every project we undertake, meeting or exceeding industry standards.
                  </p>
                </div>
              </div>

              {/* Professionalism */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-primary flex-shrink-0 mt-2"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Professionalism</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Our commitment to professionalism shines through in every aspect of our work, from our appearance and conduct to the timely delivery of projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
