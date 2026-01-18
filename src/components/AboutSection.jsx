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

      {/* Mission Section */}
      <section className="mb-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content - Left Side */}
          <div className="flex-1 p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-sm md:text-base">
                To deliver exceptional construction solutions that exceed client expectations, emphasizing quality, safety, and innovation.
              </p>
              <p className="text-xs md:text-sm">
                We are committed to transforming landscapes and improving communities through sustainable and precise engineering.
              </p>
            </div>
          </div>

          {/* Illustration - Right Side */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-primary/10 p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[250px] md:min-h-[280px]">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
              {/* Background Circles */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="#0099ff" strokeWidth="2" opacity="0.2" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#0099ff" strokeWidth="1.5" opacity="0.15" />
              
              {/* Construction Icons */}
              {/* Building/Structure Icon */}
              <g transform="translate(150, 100)">
                <rect x="0" y="40" width="100" height="80" fill="#0099ff" opacity="0.8" rx="4" />
                <rect x="15" y="60" width="20" height="25" fill="white" rx="2" />
                <rect x="50" y="60" width="20" height="25" fill="white" rx="2" />
                <rect x="65" y="85" width="20" height="25" fill="white" rx="2" />
                <polygon points="0,40 50,10 100,40" fill="#187cff" opacity="0.9" />
              </g>

              {/* Checkmark/Quality Icon */}
              <g transform="translate(80, 280)">
                <circle cx="30" cy="30" r="25" fill="#0099ff" />
                <path d="M20 30 L28 38 L40 22" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Gear/Innovation Icon */}
              <g transform="translate(280, 80)">
                <circle cx="30" cy="30" r="25" fill="#0099ff" opacity="0.8" />
                <circle cx="30" cy="30" r="12" fill="white" />
                <rect x="28" y="10" width="4" height="12" fill="white" rx="2" />
                <rect x="28" y="38" width="4" height="12" fill="white" rx="2" />
                <rect x="10" y="28" width="12" height="4" fill="white" rx="2" />
                <rect x="38" y="28" width="12" height="4" fill="white" rx="2" />
                <rect x="18" y="18" width="6" height="6" fill="white" rx="1" transform="rotate(45 21 21)" />
                <rect x="36" y="18" width="6" height="6" fill="white" rx="1" transform="rotate(45 39 21)" />
                <rect x="18" y="36" width="6" height="6" fill="white" rx="1" transform="rotate(45 21 39)" />
                <rect x="36" y="36" width="6" height="6" fill="white" rx="1" transform="rotate(45 39 39)" />
              </g>

              {/* Connecting Lines */}
              <line x1="200" y1="180" x2="110" y2="290" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
              <line x1="310" y1="110" x2="200" y2="180" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
              <line x1="310" y1="110" x2="110" y2="290" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          {/* Text Content - Right Side (visual left) */}
          <div className="flex-1 p-4 md:p-6 lg:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Vision</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-sm md:text-base">
                To be the leading construction company in Pakistan, recognized for unparalleled craftsmanship, technological innovation, and a relentless commitment to client satisfaction.
              </p>
              <p className="text-xs md:text-sm">
                We aim to shape the future of urban and rural infrastructure.
              </p>
            </div>
          </div>

          {/* Illustration - Left Side (visual right) */}
          <div className="flex-1 bg-gradient-to-bl from-orange-50 to-yellow-50 p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[250px] md:min-h-[280px]">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
              {/* Background Pattern */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0099ff" strokeWidth="1" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />

              {/* Vision/Eye Icon - Central */}
              <g transform="translate(200, 150)">
                <circle cx="0" cy="0" r="60" fill="#ffa500" opacity="0.2" />
                <circle cx="0" cy="0" r="40" fill="none" stroke="#ffa500" strokeWidth="3" opacity="0.4" />
                <path d="M-30,-10 Q-15,-25 0,-10 Q15,-25 30,-10 Q15,10 0,15 Q-15,10 -30,-10" fill="#ffa500" opacity="0.6" />
                <circle cx="0" cy="0" r="12" fill="#ff6600" />
                <circle cx="0" cy="0" r="6" fill="white" />
              </g>

              {/* Growth/Arrow Icon */}
              <g transform="translate(100, 280)">
                <path d="M0 40 L20 20 L15 20 L15 0 L25 0 L25 20 L30 20 Z" fill="#0099ff" opacity="0.8" />
                <circle cx="5" cy="35" r="3" fill="#ffa500" />
                <circle cx="25" cy="15" r="3" fill="#ffa500" />
              </g>

              {/* Star/Excellence Icon */}
              <g transform="translate(280, 100)">
                <polygon points="30,5 35,20 50,20 38,30 42,45 30,35 18,45 22,30 10,20 25,20" fill="#ffa500" opacity="0.8" />
                <circle cx="30" cy="25" r="8" fill="white" />
              </g>

              {/* Connecting Lines */}
              <line x1="200" y1="150" x2="130" y2="300" stroke="#ffa500" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
              <line x1="310" y1="120" x2="200" y2="150" stroke="#ffa500" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
              <line x1="310" y1="120" x2="130" y2="300" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
