import React from 'react';
import { Zap, Layout, Camera, Search, PenTool, Share2, Layers, BarChart3, ChevronRight } from 'lucide-react';
import { content } from '../data/content';

const Services = () => {
    // Helper to render a category column
    const renderCategory = (title, items, icon, colorClass, borderClass) => (
        <div className={`bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 transition-all hover:-translate-y-1 hover:shadow-xl ${borderClass}`}>
            <h3 className={`text-2xl font-bold text-white mb-8 flex items-center gap-3`}>
                <span className={`p-2 rounded-lg bg-slate-800 border border-slate-700 ${colorClass}`}>{icon}</span>
                {title}
            </h3>
            <div className="space-y-8">
                {items.map((service, i) => (
                    <div key={i} className="group/item">
                        <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2 group-hover/item:text-purple-400 transition-colors">
                            {service.title}
                            <ChevronRight size={16} className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Comprehensive solutions to build your brand and scale your operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {renderCategory(
                        "SOCIAL",
                        content.services.social,
                        <Share2 size={24} />,
                        "text-pink-400",
                        "hover:border-pink-500/30 hover:shadow-pink-900/10"
                    )}
                    {renderCategory(
                        "DESIGN",
                        content.services.design,
                        <PenTool size={24} />,
                        "text-purple-400",
                        "hover:border-purple-500/30 hover:shadow-purple-900/10"
                    )}
                    {renderCategory(
                        "BRANDING",
                        content.services.branding,
                        <Layers size={24} />,
                        "text-indigo-400",
                        "hover:border-indigo-500/30 hover:shadow-indigo-900/10"
                    )}
                    {renderCategory(
                        "DIGITAL",
                        content.services.digital,
                        <Search size={24} />,
                        "text-blue-400",
                        "hover:border-blue-500/30 hover:shadow-blue-900/10"
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
