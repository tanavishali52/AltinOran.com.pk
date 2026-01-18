import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsMobileDropdownOpen(false)
    setIsMobileCompanyDropdownOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
      isScrolled ? 'py-2 px-4 md:px-10' : 'py-2.5 md:py-3 px-4 md:px-10'
    } bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <img 
            src="/logo_design_final-removebg-preview.png" 
            alt="ALTIN ORAN Logo" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
       
        </Link>

        <ul className={`hidden md:flex items-center list-none ${
          isMenuOpen ? 'fixed top-0 left-0 w-[70%] max-w-[300px] h-screen bg-white flex-col pt-20 px-8 pb-8 shadow-lg z-[999]' : ''
        }`}>
          <li className="md:ml-8">
            <Link 
              to="/" 
              className={`text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5 ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
              onClick={closeMenu}
            >
              <i className="fas fa-home text-sm"></i>
              Home
            </Link>
          </li>
          <li 
            className="md:ml-8 relative"
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <button 
              className={`text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5 ${
                ['/team', '/careers'].includes(location.pathname) || location.hash === '#About' ? 'text-primary' : ''
              }`}
            >
              <i className="fas fa-building text-sm"></i>
              Company
              <i className={`fas fa-chevron-${isCompanyDropdownOpen ? 'up' : 'down'} text-xs transition-transform duration-300`}></i>
            </button>
            
            {/* Company Dropdown Menu */}
            {isCompanyDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {location.pathname === '/' ? (
                  <a 
                    href="#About" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                    About
                  </a>
                ) : (
                  <Link
                    to="/#About"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                    About
                  </Link>
                )}
                <Link
                  to="/team"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === '/team'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-users mr-2 text-green-500"></i>
                  Our Team
                </Link>
                <Link
                  to="/careers"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === '/careers'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-briefcase mr-2 text-purple-500"></i>
                  Careers
                </Link>
              </div>
            )}
          </li>
          <li 
            className="md:ml-8 relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5 ${
                ['/privacy-policy', '/terms-of-service', '/faq'].includes(location.pathname) ? 'text-primary' : ''
              }`}
            >
              <i className="fas fa-balance-scale text-sm"></i>
              Legal & Support
              <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'} text-xs transition-transform duration-300`}></i>
            </button>
            
            {/* Legal & Support Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <Link
                  to="/privacy-policy"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === '/privacy-policy'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-shield-alt mr-2 text-blue-500"></i>
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === '/terms-of-service'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-file-contract mr-2 text-teal-500"></i>
                  Terms of Service
                </Link>
                <Link
                  to="/faq"
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === '/faq'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-question-circle mr-2 text-amber-500"></i>
                  FAQ
                </Link>
              </div>
            )}
          </li>
          <li className="md:ml-8">
            <Link 
              to="/services" 
              className={`text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5 ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
              onClick={closeMenu}
            >
              <i className="fas fa-briefcase text-sm"></i>
              Services
            </Link>
          </li>
          <li className="md:ml-8">
            {location.pathname === '/' ? (
              <a 
                href="#Project" 
                className="text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5"
                onClick={closeMenu}
              >
                <i className="fas fa-project-diagram text-sm"></i>
                Projects
              </a>
            ) : (
              <Link
                to="/#Project"
                className="text-gray-800 font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1.5"
                onClick={closeMenu}
              >
                <i className="fas fa-project-diagram text-sm"></i>
                Projects
              </Link>
            )}
          </li>
          <li className="md:ml-8">
            {location.pathname === '/' ? (
              <a 
                href="#Contact" 
                className="bg-primary text-white px-5 py-2.5 rounded font-semibold transition-colors duration-300 hover:bg-primary-dark flex items-center gap-1.5"
                onClick={closeMenu}
              >
                <i className="fas fa-envelope text-sm"></i>
                Contact Us
              </a>
            ) : (
              <Link
                to="/#Contact"
                className="bg-primary text-white px-5 py-2.5 rounded font-semibold transition-colors duration-300 hover:bg-primary-dark flex items-center gap-1.5"
                onClick={closeMenu}
              >
                <i className="fas fa-envelope text-sm"></i>
                Contact Us
              </Link>
            )}
          </li>
        </ul>

        {/* Hamburger Button */}
        <button 
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-[1001] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1'
          }`}></span>
          <span className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1'
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <ul className={`md:hidden fixed top-0 left-0 w-[80%] max-w-[320px] h-screen bg-white flex flex-col pt-24 px-6 pb-8 shadow-2xl z-[999] transition-transform duration-300 ease-in-out overflow-y-auto ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <li className="mb-4 w-full">
          <Link 
            to="/" 
            className={`flex items-center py-3 px-4 text-base font-medium rounded-lg transition-colors ${
              location.pathname === '/' 
                ? 'bg-primary text-white' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            <i className="fas fa-home mr-3"></i>
            Home
          </Link>
        </li>
        <li className="mb-4 w-full">
          <button
            onClick={() => setIsMobileCompanyDropdownOpen(!isMobileCompanyDropdownOpen)}
            className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <i className="fas fa-building mr-3 text-blue-500"></i>
              <span>Company</span>
            </div>
            <i className={`fas fa-chevron-${isMobileCompanyDropdownOpen ? 'up' : 'down'} text-xs transition-transform duration-300`}></i>
          </button>
          {isMobileCompanyDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
              <li>
                {location.pathname === '/' ? (
                  <a 
                    href="#About" 
                    className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                    About
                  </a>
                ) : (
                  <Link
                    to="/#About"
                    className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    <i className="fas fa-info-circle mr-2 text-blue-500"></i>
                    About
                  </Link>
                )}
              </li>
              <li>
                <Link
                  to="/team"
                  className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                    location.pathname === '/team'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-users mr-2 text-green-500"></i>
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                    location.pathname === '/careers'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-briefcase mr-2 text-purple-500"></i>
                  Careers
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4 w-full">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <i className="fas fa-balance-scale mr-3 text-purple-500"></i>
              <span>Legal & Support</span>
            </div>
            <i className={`fas fa-chevron-${isMobileDropdownOpen ? 'up' : 'down'} text-xs transition-transform duration-300`}></i>
          </button>
          {isMobileDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
              <li>
                <Link
                  to="/privacy-policy"
                  className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                    location.pathname === '/privacy-policy'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-shield-alt mr-2 text-blue-500"></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                    location.pathname === '/terms-of-service'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-file-contract mr-2 text-teal-500"></i>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                    location.pathname === '/faq'
                      ? 'bg-blue-50 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-question-circle mr-2 text-amber-500"></i>
                  FAQ
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4 w-full">
          <Link 
            to="/services" 
            className={`flex items-center py-3 px-4 text-base font-medium rounded-lg transition-colors ${
              location.pathname === '/services' 
                ? 'bg-primary text-white' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            onClick={closeMenu}
          >
            <i className="fas fa-briefcase mr-3"></i>
            Services
          </Link>
        </li>
        <li className="mb-4 w-full">
          {location.pathname === '/' ? (
            <a 
              href="#Project" 
              className="flex items-center py-3 px-4 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
            >
              <i className="fas fa-project-diagram mr-3 text-orange-500"></i>
              Projects
            </a>
          ) : (
            <Link
              to="/#Project"
              className="flex items-center py-3 px-4 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
            >
              <i className="fas fa-project-diagram mr-3 text-orange-500"></i>
              Projects
            </Link>
          )}
        </li>
        <li className="mb-4 w-full mt-4">
          {location.pathname === '/' ? (
            <a 
              href="#Contact" 
              className="flex items-center justify-center w-full bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
              onClick={closeMenu}
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </a>
          ) : (
            <Link
              to="/#Contact"
              className="flex items-center justify-center w-full bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
              onClick={closeMenu}
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
