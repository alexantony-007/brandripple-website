import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import Blog from './components/Blog';
import Plan from './components/Plan';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <Hero />
      <Explanation />
      <Services />
      <Plan />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
