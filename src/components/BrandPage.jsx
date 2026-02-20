import React from 'react';
import { content } from '../data/content';
import { ArrowLeft, Type, Palette, Layout } from 'lucide-react';

const BrandPage = ({ onBack }) => {
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

                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Brand Identity</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        The visual and strategic foundation of {content.brand.shortName}. Our brand represents technical excellence, operational clarity, and creative growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Colors */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 text-2xl font-bold">
                            <Palette className="text-purple-400" />
                            <h2>Color Palette</h2>
                        </div>
                        <div className="grid gap-4">
                            {content.brandGuidelines.colors.map((color, i) => (
                                <div key={i} className="flex items-center gap-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                                    <div
                                        className={`w-16 h-16 rounded-xl shadow-lg`}
                                        style={{ backgroundColor: color.hex }}
                                    ></div>
                                    <div>
                                        <div className="font-bold">{color.name}</div>
                                        <div className="text-sm text-slate-500 font-mono mb-1">{color.hex}</div>
                                        <div className="text-sm text-slate-400">{color.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Typography & Logo */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-2xl font-bold">
                                <Type className="text-indigo-400" />
                                <h2>Typography</h2>
                            </div>
                            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                                <div className="mb-8">
                                    <div className="text-sm text-slate-400 mb-2">Primary Family</div>
                                    <div className="text-5xl font-extrabold font-sans leading-none">{content.brandGuidelines.typography.family}</div>
                                    <div className="text-sm text-slate-500 mt-2">Provider: {content.brandGuidelines.typography.provider}</div>
                                </div>
                                <div className="space-y-6">
                                    {content.brandGuidelines.typography.specimens.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-slate-800 pb-4">
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{spec.usage}</div>
                                                <div className={`text-xl ${spec.style}`}>{content.brand.shortName}</div>
                                            </div>
                                            <div className="text-sm text-slate-400">{spec.weight}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-2xl font-bold">
                                <Layout className="text-pink-400" />
                                <h2>Logo Details</h2>
                            </div>
                            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                                <div className="grid gap-6">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Concept</div>
                                        <p className="text-slate-300">{content.brandGuidelines.logo.concept}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Elements</div>
                                        <p className="text-slate-300">{content.brandGuidelines.logo.elements}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Usage</div>
                                        <p className="text-slate-300 italic text-sm">{content.brandGuidelines.logo.usage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandPage;
