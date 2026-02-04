import React from 'react';
import { AlertCircle, FileWarning, TrendingDown } from 'lucide-react';
import { content } from '../data/content';

const icons = [AlertCircle, FileWarning, TrendingDown];

const Explanation = () => {
    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {content.problem.heading}
                    </h2>
                    <p className="text-xl text-slate-400">
                        {content.problem.subheading}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.problem.points.map((point, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10">
                                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Explanation;
