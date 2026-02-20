import React from 'react';
import { content } from '../data/content';
import { ArrowLeft, Quote, MapPin, Target } from 'lucide-react';

const BioPage = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-white py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="container mx-auto px-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                                {content.about.title}
                            </h1>
                            <div className="space-y-6 text-xl text-slate-400 leading-relaxed font-light">
                                {content.about.bio.split('. ').map((para, i) => (
                                    <p key={i}>{para}.</p>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-slate-700/50 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                <div className="z-10 text-center p-8">
                                    <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6 text-purple-400">
                                        <Quote size={40} fill="currentColor" fillOpacity={0.1} />
                                    </div>
                                    <p className="text-2xl font-bold italic text-white mb-4">
                                        "{content.about.founder.statement}"
                                    </p>
                                    <div className="text-indigo-400 font-medium">{content.about.founder.name}</div>
                                    <div className="text-sm text-slate-500">{content.about.founder.role}</div>
                                </div>
                                {/* Decorative ripple animation */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-purple-500/10 rounded-full animate-ping"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-indigo-500/10 rounded-full animate-ping animation-delay-2000"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 pt-12 border-t border-slate-800">
                        <div className="flex items-start gap-4 p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Our Base</h3>
                                <p className="text-slate-400">Strategically located in Dubai, serving growth-minded businesses locally and abroad.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Our Focus</h3>
                                <p className="text-slate-400">Creating high-impact "Ripples" through precision marketing and efficient systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioPage;
