import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <img src="/logo.png" alt={content.brand.name} className="h-10 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.classList.remove('hidden'); }} />
                    <span className="hidden text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        {content.brand.shortName}
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {content.footer.links.map((link) => (
                        <a key={link.label} href={link.href} className="text-slate-300 hover:text-white transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-900/50">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-6 flex flex-col space-y-4">
                    {content.footer.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-lg text-slate-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
