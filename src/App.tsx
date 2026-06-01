import { Routes, Route } from 'react-router-dom';
import { Navbar, Hero } from './components/Header';
import { Features, HowItWorks, Showcase } from './components/Features';
import { Pricing } from './components/Pricing';
import { CTA, Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-200 selection:text-primary-900 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
