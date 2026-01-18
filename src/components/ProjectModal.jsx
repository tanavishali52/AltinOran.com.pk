import { useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative">
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a5f7a] mb-4">
            {project.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                Location
              </h3>
              <p className="text-gray-600">{project.location || 'Lahore, Pakistan'}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <i className="fas fa-calendar text-primary mr-2"></i>
                {project.status === 'ongoing' ? 'Expected Completion' : 'Completion Date'}
              </h3>
              <p className="text-gray-600">{project.date || '2024'}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <i className="fas fa-tag text-primary mr-2"></i>
                Category
              </h3>
              <p className="text-gray-600">{project.category || 'Construction'}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <i className="fas fa-ruler-combined text-primary mr-2"></i>
                Area
              </h3>
              <p className="text-gray-600">{project.area || 'N/A'}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-info-circle text-primary mr-2"></i>
              Project Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description || `This project represents our commitment to excellence in construction and design. ${project.title} showcases our expertise in delivering high-quality construction solutions that meet and exceed client expectations. Our team of skilled professionals worked diligently to ensure every aspect of this project was completed to the highest standards.`}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-check-circle text-primary mr-2"></i>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#1a5f7a] text-white rounded-lg font-semibold hover:bg-[#1a5f7a]/90 transition-colors"
            >
              Close
            </button>
            <a
              href="#Contact"
              onClick={onClose}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us About This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
