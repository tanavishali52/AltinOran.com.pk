const MDMessageSection = () => {
  return (
    <section id="MD's Message" className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content - Left Side */}
            <div className="flex-1 p-4 md:p-6 lg:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">MD's Message</h2>
              
              {/* Message Content */}
              <div className="space-y-3 text-gray-700 leading-relaxed mb-4">
                <p className="text-sm md:text-base italic text-gray-800">
                  "I am delighted to address you as the CEO of Altin Oran.
                </p>
                
                <p className="text-xs md:text-sm">
                  It is an honor to lead this esteemed organization, which has earned a reputation for excellence and innovation in the construction industry. On behalf of our entire team, I extend my heartfelt gratitude for choosing Altin Oran as your partner in bringing your dreams to life.
                </p>
                
                <p className="text-xs md:text-sm">
                  We understand that each project represents a significant milestone for you. Whether it's your dream home, a commercial venture, or an industrial facility, we recognize the importance of these endeavors. Our mission is not just to build structures but to create spaces that inspire, uplift, and endure.
                </p>
                
                <p className="text-xs md:text-sm italic text-gray-800">
                  We are excited about the opportunity to work with you and look forward to building a brighter future together."
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-4 border-t-2 border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                      Managing Director
                    </p>
                    <p className="text-sm md:text-base font-bold text-primary">
                      Altin Oran
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration - Right Side */}
            <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary-dark/10 p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[280px] md:min-h-[320px] w-full lg:w-auto">
              <svg viewBox="0 0 400 500" className="w-full h-full max-w-md">
                {/* Background Circles */}
                <circle cx="200" cy="250" r="180" fill="none" stroke="#0099ff" strokeWidth="2" opacity="0.15" />
                <circle cx="200" cy="250" r="140" fill="none" stroke="#0099ff" strokeWidth="1.5" opacity="0.1" />
                
                {/* Central Leader/Person Icon */}
                <g transform="translate(150, 180)">
                  {/* Person Silhouette */}
                  <circle cx="50" cy="30" r="25" fill="#0099ff" opacity="0.8" />
                  <rect x="30" y="55" width="40" height="60" rx="20" fill="#0099ff" opacity="0.8" />
                  <rect x="25" y="90" width="50" height="15" rx="7" fill="#187cff" opacity="0.9" />
                  
                  {/* Leadership Badge */}
                  <circle cx="65" cy="25" r="8" fill="#ffa500" />
                  <polygon points="65,15 68,22 75,22 69,27 71,34 65,30 59,34 61,27 55,22 62,22" fill="white" />
                </g>

                {/* Leadership/Excellence Icon - Top */}
                <g transform="translate(280, 100)">
                  <circle cx="30" cy="30" r="25" fill="#0099ff" opacity="0.8" />
                  <polygon points="30,10 35,25 50,25 38,35 42,50 30,40 18,50 22,35 10,25 25,25" fill="white" />
                </g>

                {/* Partnership/Handshake Icon - Bottom */}
                <g transform="translate(80, 380)">
                  <circle cx="30" cy="30" r="25" fill="#0099ff" opacity="0.8" />
                  <path d="M15 35 Q20 25 25 35 Q30 25 35 35 Q40 25 45 35" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="20" cy="35" r="3" fill="white" />
                  <circle cx="30" cy="35" r="3" fill="white" />
                  <circle cx="40" cy="35" r="3" fill="white" />
                </g>

                {/* Trust/Checkmark Icon - Left */}
                <g transform="translate(80, 200)">
                  <circle cx="30" cy="30" r="25" fill="#ffa500" opacity="0.8" />
                  <path d="M20 30 L28 38 L40 22" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Connecting Lines */}
                <line x1="200" y1="210" x2="310" y2="130" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="200" y1="210" x2="110" y2="230" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="200" y1="270" x2="110" y2="410" stroke="#0099ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" />
                <line x1="310" y1="130" x2="200" y2="270" stroke="#ffa500" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MDMessageSection
