import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import Plan from './components/Plan';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Simple scroll reveal effect hook could go here or using a library like AOS/Framer Motion
  // For now, we rely on the clean CSS structure.

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <Hero />
      <Explanation />
      <Services />
      <Plan />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
