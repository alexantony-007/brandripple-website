import React from 'react';
import { Check, X, Info } from 'lucide-react';
import { content } from '../data/content';

const ComparisonTable = () => {
    const { heading, subheading, tiers } = content.socialMediaPackages;

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight italic">
                        {heading}
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-2">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${tier.recommended
                                ? 'bg-indigo-600/10 border-indigo-500 shadow-2xl shadow-indigo-500/10'
                                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                                }`}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-6">
                                <div className="text-xs font-black uppercase tracking-[.2em] text-slate-500 mb-2">{tier.level}</div>
                                <h3 className="text-2xl font-black text-white uppercase italic">{tier.name}</h3>
                                <div className="text-sm font-bold text-indigo-400 mt-2 bg-indigo-500/10 px-3 py-1.5 rounded-lg inline-block">{tier.price}</div>
                            </div>

                            <div className="space-y-4">
                                {tier.features.map((feature, fi) => (
                                    <div key={fi} className="flex flex-col gap-1 pb-4 border-b border-slate-800/50 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 mt-0.5">
                                                {(feature.included || feature.value) ? (
                                                    <div className="bg-emerald-500/20 p-1 rounded-full">
                                                        <Check size={12} className="text-emerald-500" strokeWidth={3} />
                                                    </div>
                                                ) : (
                                                    <div className="bg-rose-500/20 p-1 rounded-full">
                                                        <X size={12} className="text-rose-500" strokeWidth={3} />
                                                    </div>
                                                )}
                                            </div>
                                            <span className={`flex-1 text-sm font-bold uppercase tracking-wide ${(feature.included || feature.value) ? 'text-slate-200' : 'text-slate-600'} break-words whitespace-normal leading-snug`}>
                                                {feature.label}
                                            </span>
                                        </div>
                                        {feature.value && (
                                            <div className="ml-9 text-[10.5px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded inline-block w-fit max-w-[calc(100%-2.25rem)] break-words whitespace-normal text-left">
                                                {feature.value}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 ${tier.recommended
                                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}>
                                    Select Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Local Business Note */}
                <div className="mt-20 text-center">
                    <p className="flex items-center justify-center gap-2 text-slate-500 text-sm italic">
                        <Info size={16} className="text-indigo-500 shrink-0" />
                        All packages require a minimum 6-month retainer. UAE National Events posts are complimentary.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
