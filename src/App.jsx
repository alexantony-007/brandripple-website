import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import Addons from './components/Addons';
import Blog from './components/Blog';
import Plan from './components/Plan';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Testimonials from './components/Testimonials';
import SEO from './components/SEO';
import FAQ from './components/FAQ';

import LegalModal from './components/LegalModal';
import { legalContent } from './data/legal';
import BrandPage from './components/BrandPage';
import BioPage from './components/BioPage';

function App() {
  const [activeLegal, setActiveLegal] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <SEO />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      {currentPage === 'home' && (
        <>
          <Hero />
          <Explanation />
          <Services />
          <Addons />
          <Testimonials />
          <Plan />
          <Blog />
          <FAQ />
          <Contact />
        </>
      )}

      {currentPage === 'brand' && <BrandPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'bio' && <BioPage onBack={() => setCurrentPage('home')} />}

      <Footer
        onShowLegal={(type) => setActiveLegal(legalContent[type])}
        onNavigate={setCurrentPage}
      />

      <LegalModal
        isOpen={!!activeLegal}
        onClose={() => setActiveLegal(null)}
        content={activeLegal}
      />

      <WhatsAppFloat />
    </div>
  );
}

export default App;
