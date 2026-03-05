import React, { useState, useEffect } from 'react';
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
import Brochure from './components/Brochure';
import NotFoundPage from './components/NotFoundPage';
import BackToTop from './components/BackToTop';

function App() {
  const [activeLegal, setActiveLegal] = useState(null);

  // Initialize state from URL path
  const getInitialPage = () => {
    const path = window.location.pathname.replace('/', '');
    return ['brand', 'bio', 'brochure'].includes(path) ? path : 'home';
  };

  const [currentPage, setPage] = useState(getInitialPage());

  // Navigation wrapper that updates state AND browser history
  const navigate = (page) => {
    setPage(page);
    const url = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== url) {
      window.history.pushState({ page }, '', url);
    }
  };

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const page = event.state?.page || getInitialPage();
      setPage(page);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <SEO />
      <Navbar onNavigate={navigate} currentPage={currentPage} />

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

      {currentPage === 'brand' && <BrandPage onBack={() => navigate('home')} />}
      {currentPage === 'bio' && (
        <BioPage
          onBack={() => navigate('home')}
          onNavigate={navigate}
        />
      )}
      {currentPage === 'brochure' && <Brochure onBack={() => navigate('bio')} />}

      {!['home', 'brand', 'bio', 'brochure'].includes(currentPage) && (
        <NotFoundPage onHome={() => navigate('home')} />
      )}

      <Footer
        onShowLegal={(type) => setActiveLegal(legalContent[type])}
        onNavigate={navigate}
      />

      <LegalModal
        isOpen={!!activeLegal}
        onClose={() => setActiveLegal(null)}
        content={activeLegal}
      />

      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;
