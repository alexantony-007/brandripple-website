import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { content } from '../data/content';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Quick answers to common questions about our services and process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {content.faq.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center group"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {item.question}
                                </span>
                                <div className="text-slate-500 group-hover:text-purple-400 transition-colors">
                                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                            </button>

                            <div
                                className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <p className="text-slate-400 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-400 mb-6 flex items-center justify-center gap-2">
                        <MessageSquare size={20} className="text-purple-400" />
                        Still have questions? We're here to help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700"
                    >
                        Talk to Our Team
                    </a>
                </div>
            </div>

            {/* Background blur effects */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default FAQ;
