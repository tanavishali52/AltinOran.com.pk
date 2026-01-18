import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const categoryRefs = useRef([])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToCategory = (index) => {
    setActiveCategory(index)
    if (categoryRefs.current[index]) {
      categoryRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const faqs = [
    {
      category: 'General',
      icon: 'fa-info-circle',
      questions: [
        {
          q: 'What services does ALTIN ORAN Construction provide?',
          a: 'ALTIN ORAN provides comprehensive construction services including Architectural Engineering, Civil Construction Work, Steel Fabrication, Interior Design & Work, Renovation Services, Finishing Work, Retrofitting Services, and Safety Policy implementation. We serve residential, commercial, and industrial sectors.'
        },
        {
          q: 'Where is ALTIN ORAN located?',
          a: 'ALTIN ORAN Construction is based in Pakistan. We are registered with the Pakistan Engineering Council (PEC) and Securities & Exchange Commission of Pakistan (SECP), and we serve clients nationwide.'
        },
        {
          q: 'How long has ALTIN ORAN been in business?',
          a: 'ALTIN ORAN has over 25 years of industry leadership, having completed more than 500 successful projects across Pakistan. We have extensive experience in various construction sectors.'
        },
        {
          q: 'What certifications does ALTIN ORAN have?',
          a: 'ALTIN ORAN is officially registered with the Pakistan Engineering Council (PEC) and Securities & Exchange Commission of Pakistan (SECP), ensuring the highest standards in all our projects. Our team includes qualified engineers and certified technicians.'
        }
      ]
    },
    {
      category: 'Services',
      icon: 'fa-briefcase',
      questions: [
        {
          q: 'What is included in Architectural Engineering services?',
          a: 'Our Architectural Engineering services include concept development, detailed blueprints, design consultation, structural planning, and seamless integration of aesthetics, functionality, and sustainability. We handle residential, commercial, and industrial projects.'
        },
        {
          q: 'Do you provide interior design services?',
          a: 'Yes, we offer comprehensive Interior Design & Work services. Our team creates bespoke solutions that reflect your unique style and needs, handling everything from conceptualization to execution with meticulous attention to detail.'
        },
        {
          q: 'What is steel fabrication?',
          a: 'Our steel fabrication services involve shaping raw steel into tailored solutions for diverse industries. This includes structural frameworks, intricate components for commercial buildings, industrial structures, and architectural elements with precision and durability.'
        },
        {
          q: 'Do you handle renovation projects?',
          a: 'Yes, we specialize in Renovation Services for both interiors and exteriors. We revitalize residential homes and commercial establishments with creativity and precision, enhancing functionality and aesthetics while maintaining quality.'
        }
      ]
    },
    {
      category: 'Project Process',
      icon: 'fa-project-diagram',
      questions: [
        {
          q: 'How do I start a project with ALTIN ORAN?',
          a: 'To start a project, contact us through our website, email, or phone. We will schedule a consultation to understand your requirements, provide a detailed proposal, and discuss project timelines and budget. Once you approve, we will prepare a formal contract.'
        },
        {
          q: 'How long does a typical construction project take?',
          a: 'Project timelines vary based on scope, size, and complexity. Residential projects typically take 6-18 months, while commercial projects may take 12-36 months. We provide detailed timelines in our project proposals and keep you updated throughout the process.'
        },
        {
          q: 'Do you provide project estimates?',
          a: 'Yes, we provide detailed estimates and quotations based on your project requirements. Our estimates include cost breakdowns, material specifications, labor costs, and timelines. All estimates are subject to final contract terms.'
        },
        {
          q: 'Can I make changes to the project after it starts?',
          a: 'Yes, changes can be made during the project through formal change orders. These will include updated costs and timelines. We recommend finalizing major decisions before construction begins to minimize delays and additional costs.'
        },
        {
          q: 'Who will oversee my project?',
          a: 'Each project is assigned a dedicated project manager who coordinates all aspects of construction. Our team of qualified engineers, architects, and site supervisors ensures quality and adherence to timelines. You will have direct contact with your project manager.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      icon: 'fa-dollar-sign',
      questions: [
        {
          q: 'How is pricing determined?',
          a: 'Pricing is based on project scope, materials, labor, complexity, and location. We provide transparent, detailed quotations that break down all costs. Prices may vary based on market conditions, material availability, and specific project requirements.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept various payment methods including bank transfers, checks, and other methods as agreed in the contract. Payment schedules are typically structured with milestones (e.g., initial deposit, progress payments, final payment upon completion).'
        },
        {
          q: 'Do you offer financing options?',
          a: 'We primarily work with direct payments as specified in contracts. Financing may be available through third-party providers or as arranged individually. Please discuss financing needs during your consultation.'
        },
        {
          q: 'What happens if the project goes over budget?',
          a: 'Any budget overruns due to changes requested by the client or unforeseen conditions will be discussed and approved through formal change orders before proceeding. We strive to stay within the agreed budget and communicate any potential cost increases promptly.'
        }
      ]
    },
    {
      category: 'Quality & Warranty',
      icon: 'fa-award',
      questions: [
        {
          q: 'What warranty do you provide on your work?',
          a: 'We provide warranties on our workmanship, typically covering defects for 1-2 years from project completion, as specified in individual contracts. Material warranties are provided by manufacturers. Warranty terms are detailed in your contract.'
        },
        {
          q: 'How do you ensure quality in your projects?',
          a: 'We ensure quality through: qualified and certified professionals, adherence to building codes and PEC standards, regular inspections and quality control, use of high-quality materials, comprehensive safety protocols, and continuous training of our team.'
        },
        {
          q: 'Do you use licensed and certified professionals?',
          a: 'Yes, all our engineers are registered with the Pakistan Engineering Council (PEC), and our technicians are certified. We maintain professional standards and comply with all regulatory requirements.'
        },
        {
          q: 'What if I find issues after project completion?',
          a: 'Contact us immediately if you discover any issues. Issues covered under warranty will be addressed promptly at no additional cost. For issues outside warranty, we will provide solutions and estimates for repairs.'
        }
      ]
    },
    {
      category: 'Safety & Compliance',
      icon: 'fa-hard-hat',
      questions: [
        {
          q: 'What safety measures do you follow?',
          a: 'We maintain comprehensive safety policies including: rigorous safety training for all workers, hazard identification and risk assessments, adherence to local safety regulations and industry standards, proper safety equipment and protocols, regular safety audits, and continuous improvement of safety practices.'
        },
        {
          q: 'Are you insured?',
          a: 'Yes, ALTIN ORAN carries appropriate insurance coverage as required by law and industry standards. We recommend that clients maintain their own property and liability insurance as well.'
        },
        {
          q: 'Do you comply with building codes and regulations?',
          a: 'Absolutely. We strictly adhere to all applicable local, provincial, and federal building codes, regulations, and PEC standards. All projects are designed and executed in full compliance with regulatory requirements.'
        },
        {
          q: 'Do you obtain necessary permits?',
          a: 'We assist clients in obtaining necessary permits and approvals from local authorities. Permit acquisition is typically coordinated during the project planning phase, though timelines can vary based on local government processing times.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-16 pt-24 md:pt-28">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Find answers to common questions about ALTIN ORAN Construction services, processes, and policies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <i className="fas fa-list text-blue-500"></i>
                <span>Categories</span>
              </h3>
              <nav className="space-y-2">
                {faqs.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCategory(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      activeCategory === index
                        ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <i className={`fas ${category.icon} ${activeCategory === index ? 'text-white' : 'text-blue-500'}`}></i>
                      <span className="font-medium text-sm">{category.category}</span>
                    </div>
                    <i className={`fas fa-chevron-right text-xs ${activeCategory === index ? 'text-white' : 'text-gray-400 group-hover:text-blue-500'}`}></i>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* FAQ Content - Show Only Active Category */}
          <div className="flex-1">
            {faqs.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                ref={(el) => (categoryRefs.current[categoryIndex] = el)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden scroll-mt-24 transition-all duration-300 ${
                  activeCategory === categoryIndex ? 'block' : 'hidden'
                }`}
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <i className={`fas ${category.icon} text-2xl`}></i>
                    <span>{category.category}</span>
                  </h2>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, index) => {
                    const faqIndex = categoryIndex * 100 + index
                    const isOpen = openIndex === faqIndex
                    
                    return (
                      <div key={index} className="transition-colors hover:bg-gray-50">
                        <button
                          onClick={() => toggleFAQ(faqIndex)}
                          className="w-full text-left p-5 md:p-6 flex items-center justify-between focus:outline-none"
                        >
                          <span className="text-base md:text-lg font-semibold text-slate-800 pr-4 flex-1">
                            {faq.q}
                          </span>
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full transition-all duration-300 hover:bg-blue-100">
                            <i className={`fas fa-${isOpen ? 'minus' : 'plus'} text-blue-500 text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-in-up">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl shadow-lg p-6 md:p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-white/90 mb-6 text-base md:text-lg">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <Link
            to="/#Contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-envelope mr-2"></i>
            Contact Us
          </Link>
        </div>

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FAQ
