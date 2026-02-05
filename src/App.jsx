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

import LegalModal from './components/LegalModal';
import { legalContent } from './data/legal';

function App() {
  const [activeLegal, setActiveLegal] = React.useState(null);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <Hero />
      <Explanation />
      <Services />
      <Addons />
      <Plan />
      <Blog />
      <Contact />
      <Footer onShowLegal={(type) => setActiveLegal(legalContent[type])} />

      <LegalModal
        isOpen={!!activeLegal}
        onClose={() => setActiveLegal(null)}
        content={activeLegal}
      />
    </div>
  );
}

export default App;
