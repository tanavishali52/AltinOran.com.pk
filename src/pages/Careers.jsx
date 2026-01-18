import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('View all')

  const jobCategories = [
    'View all',
    'Engineering',
    'Management',
    'Architecture',
    'Administration',
    'Safety',
    'Technical',
    'Operations'
  ]

  const jobs = [
    {
      id: 1,
      title: 'Senior Civil Engineer',
      description: "We're looking for an experienced senior civil engineer to join our team.",
      category: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      id: 2,
      title: 'Project Manager',
      description: "We're looking for a skilled project manager to oversee construction projects.",
      category: 'Management',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Management'
    },
    {
      id: 3,
      title: 'Principal Architect',
      description: "We're looking for a creative principal architect to lead our design team.",
      category: 'Architecture',
      location: 'On-site',
      type: 'Full-time',
      department: 'Architecture'
    },
    {
      id: 4,
      title: 'Site Engineer',
      description: "We're looking for a qualified site engineer to manage on-site operations.",
      category: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      id: 5,
      title: 'Safety Officer',
      description: "We're looking for a certified safety officer to ensure workplace safety.",
      category: 'Safety',
      location: 'On-site',
      type: 'Full-time',
      department: 'Safety'
    },
    {
      id: 6,
      title: 'Construction Manager',
      description: "We're looking for an experienced construction manager to lead site operations.",
      category: 'Management',
      location: 'On-site',
      type: 'Full-time',
      department: 'Management'
    },
    {
      id: 7,
      title: 'Quantity Surveyor',
      description: "We're looking for a detail-oriented quantity surveyor for cost estimation.",
      category: 'Technical',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Technical'
    },
    {
      id: 8,
      title: 'Site Supervisor',
      description: "We're looking for a dedicated site supervisor to coordinate daily activities.",
      category: 'Operations',
      location: 'On-site',
      type: 'Full-time',
      department: 'Operations'
    },
    {
      id: 9,
      title: 'Structural Designer',
      description: "We're looking for a skilled structural designer for engineering solutions.",
      category: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Engineering'
    },
    {
      id: 10,
      title: 'Business Development Manager',
      description: "We're looking for a strategic business development manager for growth.",
      category: 'Management',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'Management'
    },
    {
      id: 11,
      title: 'HR Administrator',
      description: "We're looking for an efficient HR administrator for office operations.",
      category: 'Administration',
      location: 'On-site',
      type: 'Full-time',
      department: 'Administration'
    },
    {
      id: 12,
      title: 'CAD Technician',
      description: "We're looking for a skilled CAD technician for technical drawings.",
      category: 'Technical',
      location: 'On-site',
      type: 'Full-time',
      department: 'Technical'
    }
  ]

  const filteredJobs = selectedCategory === 'View all' 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 px-5">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 via-orange-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* We're Hiring Button */}
          <div className="mb-6">
            <button className="px-4 py-2 rounded-lg border border-black text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300">
              We're hiring!
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Be part of our mission
          </h1>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            We're looking for passionate people to join us on our mission. We value flat hierarchies, 
            clear communication, and full ownership and responsibility.
          </p>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-4xl mx-auto px-5 pb-16 md:pb-24">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-black hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 mb-8 md:mb-12"></div>

        {/* Job Listings */}
        <div className="space-y-8 md:space-y-12">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 md:pb-12 border-b border-gray-200 last:border-b-0 last:pb-0"
            >
              {/* Left Side - Job Info */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.location !== '100% remote' && (
                    <span className="px-3 py-1 rounded-full border border-black text-sm text-gray-700 flex items-center gap-1.5">
                      <i className="fas fa-map-marker-alt text-xs"></i>
                      {job.location}
                    </span>
                  )}
                  {job.location === '100% remote' && (
                    <span className="px-3 py-1 rounded-full border border-black text-sm text-gray-700 flex items-center gap-1.5">
                      <i className="fas fa-home text-xs"></i>
                      {job.location}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full border border-black text-sm text-gray-700 flex items-center gap-1.5">
                    <i className="far fa-clock text-xs"></i>
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Right Side - Apply Button */}
              <div className="md:flex-shrink-0">
                <button className="text-gray-900 font-medium text-lg md:text-xl hover:text-gray-700 transition-colors duration-300 flex items-center gap-2 group">
                  <span>Apply</span>
                  <i className="fas fa-arrow-up text-sm transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No job openings in this category at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon or browse other categories.</p>
          </div>
        )}
      </div>

      {/* Back to Home Link */}
      <div className="py-8 text-center border-t border-gray-200">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Careers
