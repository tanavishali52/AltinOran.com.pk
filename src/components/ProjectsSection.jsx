import { useState } from 'react'
import ProjectModal from './ProjectModal'

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('architectural')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'architectural', label: 'Architectural & Structural Designing', icon: 'fa-drafting-compass' },
    { id: 'completed', label: 'Completed Projects', icon: 'fa-building' },
    { id: 'ongoing', label: 'Ongoing Projects', icon: 'fa-hard-hat' }
  ]

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const projects = {
    architectural: [
      {
        title: '1 Kanal House - DHA Phase 8, Lahore',
        image: '/image/new-house-construction-building-site_293060-52.jpg',
        location: 'DHA Phase 8, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '1 Kanal',
        status: 'completed',
        description: 'A luxurious 1 Kanal residential house featuring modern architectural design with premium finishes. This project includes complete structural design, architectural planning, and construction management.',
        features: [
          'Modern architectural design',
          'Premium quality materials',
          'Complete structural engineering',
          'Landscaping and exterior finishing'
        ]
      },
      {
        title: '1 Kanal House - DHA Phase 7, Lahore',
        image: '/image/310fe6_004310e4aff248d4afc04d12d0e869ac~mv2.jpg',
        location: 'DHA Phase 7, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '1 Kanal',
        status: 'completed',
        description: 'Elegant 1 Kanal house with contemporary design elements, featuring spacious interiors and modern amenities.',
        features: [
          'Contemporary design',
          'Spacious floor plan',
          'Modern amenities',
          'Quality construction'
        ]
      },
      {
        title: '5 Marla House - DHA Phase 9, Lahore',
        image: '/image/ID-2068-Featured-768x575.jpg',
        location: 'DHA Phase 9, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '5 Marla',
        status: 'completed',
        description: 'Compact and efficient 5 Marla house design maximizing space utilization with modern architectural solutions.',
        features: [
          'Space-efficient design',
          'Modern architecture',
          'Complete construction',
          'Quality finishes'
        ]
      },
      {
        title: '10 Marla House - Dream Garden, Lahore',
        image: '/image/5754781-800x600.jpeg',
        location: 'Dream Garden, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '10 Marla',
        status: 'completed',
        description: 'Beautiful 10 Marla residential project with elegant design and premium construction quality.',
        features: [
          'Elegant design',
          'Premium construction',
          'Modern facilities',
          'Landscaped exterior'
        ]
      },
      {
        title: 'Beauty and Hair Salon - Gujranwala',
        image: '/image/Hair-Salon-.jpg',
        location: 'Gujranwala',
        date: '2023',
        category: 'Commercial Construction',
        area: 'N/A',
        status: 'completed',
        description: 'Modern beauty and hair salon with contemporary interior design and functional layout.',
        features: [
          'Modern interior design',
          'Functional layout',
          'Commercial construction',
          'Premium finishes'
        ]
      },
      {
        title: 'Call Center Quid-E-Azam Industrial State Lahore',
        image: '/image/call center.png',
        location: 'Quid-E-Azam Industrial State, Lahore',
        date: '2023',
        category: 'Commercial Construction',
        area: 'N/A',
        status: 'completed',
        description: 'State-of-the-art call center facility with modern infrastructure and efficient workspace design.',
        features: [
          'Modern infrastructure',
          'Efficient workspace',
          'Commercial facility',
          'Quality construction'
        ]
      }
    ],
    completed: [
      {
        title: 'Grey Structure of 5 Marla House - DHA Phase 9, Lahore',
        image: '/image/31864146-800x600.jpeg',
        location: 'DHA Phase 9, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '5 Marla',
        status: 'completed',
        description: 'Completed grey structure for 5 Marla house with reinforced concrete framework and quality construction standards.',
        features: [
          'Reinforced concrete structure',
          'Quality materials',
          'Structural engineering',
          'Completed on time'
        ]
      },
      {
        title: 'Grey Structure of 10 Marla House - Dream Garden, Lahore',
        image: '/image/Render_01.jpg',
        location: 'Dream Garden, Lahore',
        date: '2023',
        category: 'Residential Construction',
        area: '10 Marla',
        status: 'completed',
        description: 'Completed grey structure for 10 Marla house with excellent structural integrity and modern design.',
        features: [
          'Strong foundation',
          'Quality framework',
          'Modern design',
          'Completed structure'
        ]
      },
      {
        title: 'Grey Structure of 2 Kanal House - DHA Phase 2, Islamabad',
        image: '/image/30326618-800x600.jpeg',
        location: 'DHA Phase 2, Islamabad',
        date: '2023',
        category: 'Residential Construction',
        area: '2 Kanal',
        status: 'completed',
        description: 'Luxurious 2 Kanal house grey structure completed with premium construction standards.',
        features: [
          'Premium construction',
          'Large scale project',
          'Quality materials',
          'Structural excellence'
        ]
      },
      {
        title: 'Interior Works of Cafeteria - CCL Pharmaceutical, Lahore',
        image: '/image/interior-of-cafe.jpg',
        location: 'CCL Pharmaceutical, Lahore',
        date: '2023',
        category: 'Interior Design',
        area: 'N/A',
        status: 'completed',
        description: 'Modern cafeteria interior design with functional layout and contemporary aesthetics for pharmaceutical facility.',
        features: [
          'Modern interior design',
          'Functional layout',
          'Quality finishes',
          'Commercial interior'
        ]
      },
      {
        title: 'Grey Structure of HT-LT & Transformer Room - Dynatis Pharma',
        image: '/image/e-house-Container-ISO-Marine-e1684998690599.jpg',
        location: 'Dynatis Pharma, Lahore',
        date: '2023',
        category: 'Industrial Construction',
        area: 'N/A',
        status: 'completed',
        description: 'Electrical infrastructure construction including HT-LT and transformer room with safety compliance.',
        features: [
          'Electrical infrastructure',
          'Safety compliance',
          'Industrial construction',
          'Quality standards'
        ]
      },
      {
        title: 'Finishing Works of HT-LT & Transformer Room - Dynatis Pharma',
        image: '/image/e-house-Container-ISO-Marine-e1684998690599.jpg',
        location: 'Dynatis Pharma, Lahore',
        date: '2023',
        category: 'Industrial Construction',
        area: 'N/A',
        status: 'completed',
        description: 'Complete finishing works for HT-LT and transformer room including painting, flooring, and final touches.',
        features: [
          'Complete finishing',
          'Quality materials',
          'Professional execution',
          'Final touches'
        ]
      },
      {
        title: 'Renovation & Finishing Works of Factory Building - Dynatis Pharma',
        image: '/image/PICHARCHITECTS_SEDATEX_01_SolQuiñones.jpg',
        location: 'Dynatis Pharma, Lahore',
        date: '2023',
        category: 'Industrial Renovation',
        area: 'N/A',
        status: 'completed',
        description: 'Comprehensive renovation and finishing works for factory building including structural improvements and modern finishes.',
        features: [
          'Complete renovation',
          'Structural improvements',
          'Modern finishes',
          'Industrial facility'
        ]
      },
      {
        title: 'Prefabricated PU Sandwich Panels Office Building - Curexa Pharma',
        image: '/image/20200519160745_11591.jpg',
        location: 'Curexa Pharma, Lahore',
        date: '2023',
        category: 'Industrial Construction',
        area: 'N/A',
        status: 'completed',
        description: 'Modern prefabricated PU sandwich panels office building with energy-efficient design and quick installation.',
        features: [
          'Prefabricated construction',
          'Energy efficient',
          'Quick installation',
          'Modern design'
        ]
      },
      {
        title: 'Development of Pathways for Warehouse - Dynamic Spinning Mill',
        image: '/image/Pedestrian-Walkways.jpg',
        location: 'Dynamic Spinning Mill, Lahore',
        date: '2023',
        category: 'Infrastructure Development',
        area: 'N/A',
        status: 'completed',
        description: 'Development of pedestrian pathways and walkways for warehouse facility with durable construction.',
        features: [
          'Durable construction',
          'Infrastructure development',
          'Quality materials',
          'Functional design'
        ]
      }
    ],
    ongoing: [
      {
        title: 'Finishing Works of 5 Marla House - DHA Phase 9, Lahore',
        image: '/image/Construction-Cost-For-5-Marla-Houses-In-Pakistan1-1.jpg',
        location: 'DHA Phase 9, Lahore',
        date: '2024 (Expected)',
        category: 'Residential Construction',
        area: '5 Marla',
        status: 'ongoing',
        description: 'Ongoing finishing works including painting, flooring, tiling, and final touches for 5 Marla house.',
        features: [
          'Interior finishing',
          'Exterior finishing',
          'Quality materials',
          'Professional execution'
        ]
      },
      {
        title: 'Finishing Works of 10 Marla House - Dream Garden, Lahore',
        image: '/image/IMG-20211011-WA0009.jpg',
        location: 'Dream Garden, Lahore',
        date: '2024 (Expected)',
        category: 'Residential Construction',
        area: '10 Marla',
        status: 'ongoing',
        description: 'In-progress finishing works for 10 Marla house with premium finishes and modern amenities.',
        features: [
          'Premium finishes',
          'Modern amenities',
          'Quality workmanship',
          'Ongoing project'
        ]
      },
      {
        title: 'Construction of RCC Nullah (Drain) - DHA Phase 7, Islamabad',
        image: '/image/product-jpeg.jpg',
        location: 'DHA Phase 7, Islamabad',
        date: '2024 (Expected)',
        category: 'Infrastructure Construction',
        area: 'N/A',
        status: 'ongoing',
        description: 'Ongoing construction of reinforced concrete nullah (drain) for proper water drainage system.',
        features: [
          'RCC construction',
          'Infrastructure project',
          'Water management',
          'Quality engineering'
        ]
      },
      {
        title: 'Renovation of Factory Building - Himont Pharma, Lahore',
        image: '/image/Alfonso_Quiroga_2.jpg',
        location: 'Himont Pharma, Lahore',
        date: '2024 (Expected)',
        category: 'Industrial Renovation',
        area: 'N/A',
        status: 'ongoing',
        description: 'Ongoing renovation of factory building including structural improvements and modern upgrades.',
        features: [
          'Structural improvements',
          'Modern upgrades',
          'Industrial renovation',
          'Quality standards'
        ]
      },
      {
        title: 'Finishing Works of QC Floor - Dynatis Pharma, Lahore',
        image: '/image/Raised_Floor_Factory_Saudi_Arabia.jpg',
        location: 'Dynatis Pharma, Lahore',
        date: '2024 (Expected)',
        category: 'Industrial Construction',
        area: 'N/A',
        status: 'ongoing',
        description: 'Ongoing finishing works for Quality Control floor with specialized requirements and quality standards.',
        features: [
          'Specialized requirements',
          'Quality standards',
          'Industrial finishing',
          'Professional execution'
        ]
      }
    ]
  }

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <section id="Project" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a5f7a] mb-4 relative pb-4">
          Our Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#57c5b6]"></span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          A Brief introduction to Our Projects
        </p>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-full text-base font-semibold transition-all duration-300 w-full md:w-auto md:max-w-[300px] text-center ${
                activeCategory === category.id
                  ? 'bg-[#1a5f7a] text-white'
                  : 'bg-white text-[#1a5f7a] border-2 border-[#1a5f7a] hover:bg-[#1a5f7a]/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`w-full ${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white bg-[#1a5f7a] px-5 py-4 rounded mb-8 flex items-center">
                <i className={`fas ${category.icon} mr-2.5 text-xl`}></i>
                {category.label}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects[category.id].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl h-full"
                  >
                    <div
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
                      <h4 className="text-lg font-semibold mb-4 text-gray-800 leading-snug">
                        {project.title}
                      </h4>
                      <button
                        onClick={() => handleViewDetails({ ...project, category: category.label })}
                        className="inline-flex items-center text-primary font-semibold mt-auto transition-all duration-300 hover:text-[#0077cc] group text-left"
                      >
                        View Details{' '}
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default ProjectsSection
