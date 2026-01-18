import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 py-8 md:py-16 pt-24 md:pt-28">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-file-contract text-blue-500"></i>
              <span>1. Introduction</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Welcome to ALTIN ORAN Construction. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p>
                ALTIN ORAN Engineering / Architectural / Interiors / Town Planning Consultants ("we," "us," or "our") is a construction company registered with the Pakistan Engineering Council (PEC) and Securities & Exchange Commission of Pakistan (SECP). We operate in Pakistan and provide comprehensive construction, architectural, and engineering services.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-briefcase text-teal-500"></i>
              <span>2. Services Offered</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>ALTIN ORAN provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Architectural Engineering</li>
                <li>Civil Construction Work</li>
                <li>Steel Fabrication</li>
                <li>Interior Design & Work</li>
                <li>Renovation Services</li>
                <li>Finishing Work</li>
                <li>Retrofitting Services</li>
                <li>Safety Policy Implementation</li>
              </ul>
              <p className="mt-4">
                All services are subject to availability and will be provided in accordance with industry standards, applicable regulations, and our contractual agreements.
              </p>
            </div>
          </section>

          {/* Agreements and Contracts */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-handshake text-amber-500"></i>
              <span>3. Service Agreements</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                All construction projects and services provided by ALTIN ORAN require a formal written agreement or contract. The terms of each project will be detailed in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project proposals and quotations</li>
                <li>Formal construction contracts</li>
                <li>Service agreements</li>
                <li>Change orders (if applicable)</li>
              </ul>
              <p className="mt-4">
                By accepting our services, you agree to the terms outlined in these documents, including payment schedules, project timelines, and scope of work.
              </p>
            </div>
          </section>

          {/* Payments */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-money-bill-wave text-blue-500"></i>
              <span>4. Payment Terms</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>Payment terms will be specified in your service agreement or contract. Generally:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payments are due according to the schedule agreed upon in the contract</li>
                <li>Late payments may incur additional charges as specified in the agreement</li>
                <li>Work may be suspended if payments are not received as scheduled</li>
                <li>All prices are in Pakistani Rupees (PKR) unless otherwise stated</li>
                <li>Payments should be made through methods agreed upon in the contract</li>
              </ul>
            </div>
          </section>

          {/* Project Timeline and Delays */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-calendar-alt text-teal-500"></i>
              <span>5. Project Timeline and Delays</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We strive to complete all projects within the agreed timeframe. However, project timelines are estimates and may be affected by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Weather conditions and natural disasters</li>
                <li>Permit and approval delays from local authorities</li>
                <li>Material availability and supply chain issues</li>
                <li>Changes requested by the client</li>
                <li>Unforeseen site conditions</li>
                <li>Force majeure events</li>
              </ul>
              <p className="mt-4">
                ALTIN ORAN is not liable for delays caused by factors beyond our reasonable control.
              </p>
            </div>
          </section>

          {/* Warranties and Guarantees */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-shield-alt text-amber-500"></i>
              <span>6. Warranties and Guarantees</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                ALTIN ORAN provides warranties on our workmanship as specified in individual contracts. Our warranties:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cover defects in workmanship for a specified period (typically 1-2 years)</li>
                <li>Do not cover damage caused by misuse, accidents, or natural wear and tear</li>
                <li>Require prompt notification of any issues</li>
                <li>Are subject to the terms and conditions of each specific contract</li>
              </ul>
              <p className="mt-4">
                Material warranties are provided by manufacturers and suppliers, not by ALTIN ORAN.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-balance-scale text-blue-500"></i>
              <span>7. Limitation of Liability</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                To the maximum extent permitted by law, ALTIN ORAN's liability is limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The value of the services provided under the specific contract</li>
                <li>Direct damages only (indirect, consequential, or incidental damages are excluded)</li>
                <li>Our obligation to repair or replace defective work under warranty</li>
              </ul>
              <p className="mt-4">
                ALTIN ORAN carries appropriate insurance coverage as required by law. Clients are encouraged to maintain their own insurance for property and liability coverage.
              </p>
            </div>
          </section>

          {/* Safety and Compliance */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-hard-hat text-teal-500"></i>
              <span>8. Safety and Compliance</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                ALTIN ORAN is committed to maintaining the highest safety standards:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We strictly adhere to all applicable safety regulations and building codes</li>
                <li>Our team undergoes regular safety training</li>
                <li>We maintain comprehensive safety policies and procedures</li>
                <li>All work is performed in compliance with local, provincial, and federal regulations</li>
                <li>We comply with PEC (Pakistan Engineering Council) standards and requirements</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-copyright text-amber-500"></i>
              <span>9. Intellectual Property</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                All architectural drawings, designs, plans, and specifications created by ALTIN ORAN remain our intellectual property unless otherwise agreed in writing. Upon full payment, clients typically receive:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usage rights for the specific project</li>
                <li>Copies of final drawings and documentation</li>
              </ul>
              <p className="mt-4">
                ALTIN ORAN retains the right to use project images and completed work for marketing and portfolio purposes unless otherwise specified in the contract.
              </p>
            </div>
          </section>

          {/* Cancellation and Termination */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-times-circle text-blue-500"></i>
              <span>10. Cancellation and Termination</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Either party may terminate a contract under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By mutual agreement</li>
                <li>Upon breach of contract by either party</li>
                <li>If payment terms are not met (by client)</li>
                <li>If services are not delivered as agreed (by ALTIN ORAN)</li>
              </ul>
              <p className="mt-4">
                Upon termination, payment is due for all work completed up to the termination date, plus any cancellation fees specified in the contract.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-gavel text-teal-500"></i>
              <span>11. Dispute Resolution</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                In the event of disputes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Parties agree to first attempt resolution through good faith negotiation</li>
                <li>If negotiation fails, disputes will be resolved through mediation or arbitration as specified in the contract</li>
                <li>These Terms are governed by the laws of Pakistan</li>
                <li>Jurisdiction for legal proceedings shall be in the courts of Pakistan</li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-edit text-amber-500"></i>
              <span>12. Changes to Terms</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                ALTIN ORAN reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
              <p>
                Existing contracts will continue to be governed by the Terms in effect at the time the contract was executed.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-envelope text-blue-500"></i>
              <span>13. Contact Us</span>
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>ALTIN ORAN Construction</strong></p>
                <p>Email: info@altinoran.com</p>
                <p>Phone: +92 XXX XXXXXXX</p>
                <p>Address: [Company Address], Pakistan</p>
              </div>
            </div>
          </section>

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

export default TermsOfService
