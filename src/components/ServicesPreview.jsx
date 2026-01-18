const ServicesPreview = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Build your dream home with our expert residential construction services. We handle everything from design to final touches.',
      image: '/image/new-house-construction-building-site_293060-52.jpg'
    },
    {
      title: 'Commercial Projects',
      description: 'From office buildings to retail spaces, we create commercial structures that are both functional and impressive.',
      image: '/image/residential-commercial-construction-slowdown-continues-in-higher-interest-rate-environment-key.jpg'
    },
    {
      title: 'Renovation Services',
      description: 'Transform your existing space with our professional renovation services, combining modern design with quality craftsmanship.',
      image: '/image/Whats-the-Difference-Between-Remodeling-and-Renovating.jpg'
    }
  ]

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of construction services tailored to meet your specific needs and requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div 
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <a href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                  Learn More <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
