import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1500)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setSubmitMessage('Copied to clipboard!')
    setTimeout(() => setSubmitMessage(''), 2000)
  }

  return (
    <section id="Contact" className="py-16 md:py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-12 rounded-t-xl relative overflow-hidden mb-0">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url(/image/new-house-construction-building-site_293060-52.jpg)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Ready to start your project? Have questions about our services? Our team is ready to hear from you and provide the solutions you need.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="bg-white rounded-b-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="flex-1 p-6 md:p-10 lg:p-12">
              <div className="mb-8 pb-4 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 relative inline-block">
                  Send Us a Message
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary"></span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.name
                        ? 'top-[-12px] text-sm text-primary bg-white px-2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.email
                        ? 'top-[-12px] text-sm text-primary bg-white px-2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.phone
                        ? 'top-[-12px] text-sm text-primary bg-white px-2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                  </select>
                  <label
                    htmlFor="service"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.service
                        ? 'top-[-12px] text-sm text-primary bg-white px-2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Service Needed
                  </label>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.message
                        ? 'top-[-12px] text-sm text-primary bg-white px-2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex-1 bg-gray-50 p-6 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">103-A Block, Faisal Town Lahore.</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
                    <div className="flex items-center gap-2">
                      <a href="tel:+923062557657" className="text-gray-600 hover:text-primary transition-colors">
                        (+92)-3062557657
                      </a>
                      <button
                        onClick={() => copyToClipboard('+923062557657')}
                        className="text-primary hover:text-primary-dark text-sm"
                        title="Copy to clipboard"
                      >
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
                    <div className="flex items-center gap-2">
                      <a href="mailto:rizwan.arshad@altinoran.com.pk" className="text-gray-600 hover:text-primary transition-colors">
                        rizwan.arshad@altinoran.com.pk
                      </a>
                      <button
                        onClick={() => copyToClipboard('rizwan.arshad@altinoran.com.pk')}
                        className="text-primary hover:text-primary-dark text-sm"
                        title="Copy to clipboard"
                      >
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="border-t border-gray-200">
            <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-600">Map Location</p>
                <p className="text-sm text-gray-500 mt-1">103-A Block, Faisal Town Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
