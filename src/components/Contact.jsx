import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { content } from '../data/content';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const form = e.target;
        const formData = new FormData(form);

        try {
            // Using the "clean" URL without /u/0/ to ensure public access
            const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSen0LoRNgh_U422wGjCUQccHaNICfjsXkHViqbZHUSY7dsEgQ/formResponse";

            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors', // Essential for Google Forms
                body: formData
            });

            // Since 'no-cors' returns an opaque response, we assume success if no network error occurred.
            setStatus('success');
            form.reset();

        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again or contact us directly.');
        }
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

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-slate-300">We'll be in touch within 24 hours.</p>
                            <button onClick={() => setStatus('idle')} className="mt-6 text-purple-400 hover:text-purple-300 underline">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === 'error' && (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 flex items-center gap-3 text-red-200">
                                    <AlertCircle size={24} />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input
                                        type="text"
                                        name="entry.2146784590"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        name="entry.1177185524"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">How can we help?</label>
                                <textarea
                                    name="entry.963217449"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Tell us about your challenges..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>Processing <Loader2 className="animate-spin" size={20} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
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
