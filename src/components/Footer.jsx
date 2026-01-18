import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative text-white py-16 px-5 overflow-hidden">
      {/* Background with Construction Theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/client-img/WC-BAnner-2-scaled.jpg')`
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo_design_final-removebg-preview.png" 
                alt="ALTIN ORAN Logo" 
                className="h-10 w-auto object-contain"
              />
              <h4 className="text-xl font-bold">ALTIN ORAN</h4>
            </div>
            <p className="text-gray-400">
              We are a company of highly qualified engineers & certified technicians dedicated to meet the diverse needs of our clients.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><a href="#About" className="hover:text-white">About</a></li>
              <li><a href="#services-2" className="hover:text-white">Services</a></li>
              <li><a href="#Project" className="hover:text-white">Projects</a></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white">Residential</a></li>
              <li><a href="/services" className="hover:text-white">Commercial</a></li>
              <li><a href="/services" className="hover:text-white">Renovation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ALTIN ORAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
