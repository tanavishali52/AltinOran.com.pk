import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 py-8 md:py-16 pt-24 md:pt-28">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Privacy Policy
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
              <i className="fas fa-shield-alt text-blue-500"></i>
              <span>1. Introduction</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                ALTIN ORAN Construction ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                We are registered with the Pakistan Engineering Council (PEC) and Securities & Exchange Commission of Pakistan (SECP), and we operate in accordance with applicable data protection laws in Pakistan.
              </p>
              <p>
                By using our website or services, you consent to the data practices described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-database text-teal-500"></i>
              <span>2. Information We Collect</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company name and business details</li>
                  <li>Project details and requirements</li>
                  <li>Financial information necessary for billing and payment processing</li>
                  <li>Identification documents (when required for contracts)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-cog text-amber-500"></i>
              <span>3. How We Use Your Information</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our construction and engineering services</li>
                <li>To process inquiries, requests, and project proposals</li>
                <li>To communicate with you about projects, services, and updates</li>
                <li>To process payments and manage billing</li>
                <li>To comply with legal and regulatory obligations (PEC, SECP requirements)</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To protect our rights, property, and safety, and that of our clients</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-share-alt text-blue-500"></i>
              <span>4. Information Sharing and Disclosure</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              
              <div className="space-y-3 mt-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">4.1 Service Providers</h3>
                  <p className="ml-4">
                    We may share information with trusted third-party service providers who assist us in operating our business (e.g., payment processors, IT services, subcontractors).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">4.2 Legal Requirements</h3>
                  <p className="ml-4">
                    We may disclose information when required by law, court order, or government regulation, or to protect our legal rights.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">4.3 Business Transfers</h3>
                  <p className="ml-4">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">4.4 With Your Consent</h3>
                  <p className="ml-4">
                    We may share information with third parties when you have given explicit consent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-lock text-teal-500"></i>
              <span>5. Data Security</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure data storage and encryption</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Secure transmission of data over encrypted connections</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-archive text-amber-500"></i>
              <span>6. Data Retention</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fulfill the purposes for which it was collected</li>
                <li>Comply with legal and regulatory requirements (including PEC and SECP record-keeping requirements)</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain project records and documentation</li>
              </ul>
              <p className="mt-4">
                Project-related documents and contracts may be retained for extended periods as required by law or for reference purposes.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-user-shield text-blue-500"></i>
              <span>7. Your Rights</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service provider</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-cookie-bite text-teal-500"></i>
              <span>8. Cookies and Tracking Technologies</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="mt-4">
                You can control cookie preferences through your browser settings. However, disabling cookies may limit some website functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-external-link-alt text-amber-500"></i>
              <span>9. Third-Party Websites</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-child text-blue-500"></i>
              <span>10. Children's Privacy</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-sync-alt text-teal-500"></i>
              <span>11. Changes to This Privacy Policy</span>
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notifications for material changes (when applicable)</li>
              </ul>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <i className="fas fa-envelope text-blue-500"></i>
              <span>12. Contact Us</span>
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>ALTIN ORAN Construction</strong></p>
                <p>Email: privacy@altinoran.com</p>
                <p>Phone: +92 XXX XXXXXXX</p>
                <p>Address: [Company Address], Pakistan</p>
                <p className="mt-3">
                  <strong>Data Protection Officer:</strong> [Name]<br />
                  Email: dpo@altinoran.com
                </p>
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

export default PrivacyPolicy
