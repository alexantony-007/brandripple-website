import React from 'react';
import { content } from '../data/content';

const Plan = () => {
    return (
        <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl mix-blend-screen opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {content.plan.heading}
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A structured approach to ensure consistency, quality, and measurable results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.plan.steps.map((step, index) => (
                        <div key={index} className="relative group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10">
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300">
                                {step.number}
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Connector Line (Visual only, hidden on mobile/last item) */}
                            {index < content.plan.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-800 z-0"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Plan;
