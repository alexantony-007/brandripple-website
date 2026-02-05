import React from 'react';
import { content } from '../data/content';
import { PlusCircle } from 'lucide-react';

const Addons = () => {
    return (
        <section className="py-20 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Add-on Services We Provide</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        In addition to our core packages, we offer specialized services to help your brand excel in every digital avenue.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                    {content.addons.map((addon, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group cursor-default"
                        >
                            <PlusCircle size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{addon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Addons;
