import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-1.5 mb-6 border border-slate-700/50">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm text-slate-300 font-medium">Accepting New Clients</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Digital Presence</span> & Operations
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                            {content.hero.subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-900/25">
                                {content.hero.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#process" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 bg-slate-900/50 backdrop-blur-2xl rounded-2xl p-8 border border-slate-700 shadow-2xl">
                            {/* Decorative UI Elements illustrating marketing/ERP */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <TrendingUp />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Social Reach</div>
                                        <div className="text-2xl font-bold text-white">+1,240%</div>
                                    </div>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[85%] rounded-full"></div>
                                </div>

                                <div className="border-t border-slate-700/50 my-4"></div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                                        <ShieldCheck />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">System Uptime</div>
                                        <div className="text-2xl font-bold text-white">99.9%</div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-800/50 rounded-lg mt-4 border border-slate-700/30">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs text-slate-400">Campaign Efficiency</span>
                                        <span className="text-xs text-green-400">+45%</span>
                                    </div>
                                    <div className="flex space-x-1">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className={`h-8 w-full rounded-sm ${i > 8 ? 'bg-slate-700/30' : 'bg-indigo-500/40'}`}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract shapes behind */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
