import React from 'react';
import { content } from '../data/content';

const Plan = () => {
    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{content.plan.heading}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 border-t border-dashed border-slate-600 -z-0"></div>

                    {content.plan.steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8 shadow-xl shadow-indigo-900/20 group hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-slate-400 max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-block px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Plan;
