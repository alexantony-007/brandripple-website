import React from 'react';
import { CheckCircle2, Zap, Layout, BarChart3, Database, Cog, TrendingDown } from 'lucide-react';
import { content } from '../data/content';

const marketingIcons = [Zap, Layout, BarChart3, TrendingDown]; // TrendingDown was imported but maybe not right here, let's fix imports
// Using defined icons for mapping
const getIcon = (title) => {
    if (title.includes("Social")) return Zap;
    if (title.includes("Identity")) return Layout;
    if (title.includes("Content")) return BarChart3; // Placeholder
    if (title.includes("Ads")) return BarChart3;
    if (title.includes("ERPNext")) return Database;
    if (title.includes("Automation")) return Cog;
    return CheckCircle2;
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/20">
            <div className="container mx-auto px-6">

                {/* The Guide Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {content.guide.heading}
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            {content.guide.description}
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {content.guide.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                            alt="Team collaboration"
                            className="relative rounded-3xl border border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Marketing Column */}
                    <div className="bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400"><Zap size={24} /></span>
                            Digital Growth
                        </h3>
                        <div className="space-y-6">
                            {content.services.marketing.map((service, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 text-purple-400"><CheckCircle2 size={20} /></div>
                                    <div>
                                        <h4 className="font-semibold text-white">{service.title}</h4>
                                        <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operations Column */}
                    <div className="bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400"><Database size={24} /></span>
                            Operations & ERP
                        </h3>
                        <div className="space-y-6">
                            {content.services.operations.map((service, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 text-indigo-400"><CheckCircle2 size={20} /></div>
                                    <div>
                                        <h4 className="font-semibold text-white">{service.title}</h4>
                                        <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
