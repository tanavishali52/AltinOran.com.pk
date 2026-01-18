import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import WelcomeModal from './components/WelcomeModal'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'

function App() {
  return (
    <div className="App">
      <WelcomeModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  )
}

export default App
