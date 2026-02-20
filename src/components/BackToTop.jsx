import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 left-8 z-[100] transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 text-indigo-400 p-4 rounded-full shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-400 transition-all group"
                aria-label="Back to Top"
            >
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    );
};

export default BackToTop;
