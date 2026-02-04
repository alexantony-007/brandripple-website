import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { content } from '../data/content';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission logic
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Ripple the Market?</h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Book your free discovery call today. No pressure, just strategy.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 mb-8">
                            <a href={`tel:${content.brand.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                📞 {content.brand.contact.phone}
                            </a>
                            <a href={`mailto:${content.brand.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                ✉️ {content.brand.contact.email}
                            </a>
                        </div>
                    </div>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-slate-300">We'll be in touch within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Company Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Brandripple Ops" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">How can we help?</label>
                                <textarea required rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Tell us about your challenges..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2">
                                Send Message
                                <Send size={20} />
                            </button>

                            <p className="text-center text-xs text-slate-500 mt-4">
                                By submitting, you agree to our privacy policy. We hate spam too.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
