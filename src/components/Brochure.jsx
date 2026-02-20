import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import {
    ArrowLeft,
    CheckCircle2,
    ArrowRight,
    Zap,
    Target,
    Users,
    Shield,
    MessageSquare,
    Globe,
    Monitor,
    Layout,
    Database,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const Brochure = ({ onBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = 10;

    const nextSlide = () => {
        if (currentIndex < totalPages - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const Page = ({ children, className = "" }) => (
        <section className={`w-screen h-screen flex-shrink-0 flex flex-col p-12 relative overflow-hidden print:w-full print:h-auto print:min-h-[1100px] print:p-8 print:block ${className}`}>
            {children}
        </section>
    );

    return (
        <div className="bg-slate-950 text-white font-sans selection:bg-purple-500/30 overflow-hidden h-screen print:h-auto print:overflow-visible">
            {/* Control Bar (Hidden on Print) */}
            <div className="fixed top-0 left-0 w-full z-50 p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center print:hidden">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Bio</span>
                </button>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-2 bg-slate-950/50 px-4 py-1.5 rounded-full border border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="opacity-30">/</span>
                        <span>{totalPages}</span>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows (Desktop) */}
            <div className="fixed inset-y-0 left-0 w-20 flex items-center justify-center z-40 print:hidden pointer-events-none">
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-all pointer-events-auto"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}
            </div>
            <div className="fixed inset-y-0 right-0 w-20 flex items-center justify-center z-40 print:hidden pointer-events-none">
                {currentIndex < totalPages - 1 && (
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-all pointer-events-auto"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>

            {/* Main Slider Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full print:flex-col print:transition-none print:transform-none"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* PAGE 1: COVER */}
                <Page className="justify-center items-center text-center bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950">
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20 blur-3xl w-96 h-96 bg-purple-600 rounded-full"></div>
                    <img src="/logo.png" alt="Logo" className="w-32 mb-12 relative z-10" />
                    <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 relative z-10 leading-none">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Growth</span><br />
                        Architects
                    </h1>
                    <div className="w-24 h-2 bg-purple-500 mb-8 mx-auto"></div>
                    <p className="text-xl text-slate-400 max-w-2xl mb-12 uppercase tracking-widest font-bold">
                        Company Profile & Service Overview
                    </p>
                    <div className="text-sm font-black uppercase tracking-[0.3em] text-indigo-400">
                        {content.about.location} | {new Date().getFullYear()}
                    </div>
                </Page>

                {/* PAGE 2: THE PROBLEM */}
                <Page className="bg-slate-950">
                    <div className="max-w-4xl mx-auto py-20">
                        <span className="text-purple-500 font-black uppercase tracking-[0.2em] mb-4 block">01. The Problem</span>
                        <h2 className="text-5xl font-black mb-12 leading-tight">Growth shouldn't feel like <span className="text-slate-500">Chaos.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {content.problem.points.map((point, i) => (
                                <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-slate-400">0{i + 1}</div>
                                    <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-10 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-3xl">
                            <p className="text-2xl font-bold text-slate-300 italic text-center">
                                "Disconnected systems and invisible branding are the silent killers of modern business."
                            </p>
                        </div>
                    </div>
                </Page>

                {/* PAGE 3: THE GUIDE */}
                <Page className="bg-black">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20">
                        <div className="flex-1">
                            <span className="text-indigo-500 font-black uppercase tracking-[0.2em] mb-4 block">02. The Guide</span>
                            <h2 className="text-5xl font-black mb-8">We build the <span className="text-indigo-400">Bridge.</span></h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {content.guide.description}
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {content.guide.stats.map((stat, i) => (
                                    <div key={i} className="border-l-4 border-indigo-500 pl-6">
                                        <div className="text-4xl font-black text-white">{stat.value}</div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-900/30 p-12 rounded-3xl border border-slate-800">
                            <Shield size={48} className="text-indigo-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-6 italic">"{content.about.founder.statement}"</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold">BR</div>
                                <div>
                                    <div className="font-bold">{content.about.founder.name}</div>
                                    <div className="text-xs text-slate-500">{content.about.founder.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Page>

                {/* PAGE 4: SERVICES OVERVIEW */}
                <Page className="bg-slate-950">
                    <div className="max-w-5xl mx-auto py-20 text-center">
                        <span className="text-purple-500 font-black uppercase tracking-[0.2em] mb-4 block">03. What We Do</span>
                        <h2 className="text-5xl font-black mb-16">Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Solutions</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { title: "Social Media", icon: <MessageSquare />, color: "border-pink-500" },
                                { title: "Creative Design", icon: <Layout />, color: "border-purple-500" },
                                { title: "Brand Identity", icon: <Target />, color: "border-indigo-500" },
                                { title: "Operations/ERP", icon: <Database />, color: "border-blue-500" }
                            ].map((s, i) => (
                                <div key={i} className={`p-10 bg-slate-900 border-b-8 ${s.color} rounded-2xl flex flex-col items-center shadow-xl`}>
                                    <div className="mb-6 text-slate-300">{s.icon}</div>
                                    <h3 className="font-black uppercase tracking-widest text-xs">{s.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </Page>

                {/* PAGE 5: SOCIAL SPOTLIGHT */}
                <Page className="bg-slate-950">
                    <div className="max-w-4xl mx-auto py-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-pink-600/20 text-pink-500 rounded-xl flex items-center justify-center">
                                <Globe />
                            </div>
                            <h2 className="text-4xl font-black uppercase tracking-tight">Social <span className="text-pink-500">Reach</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <p className="text-xl text-slate-400 leading-relaxed font-light">
                                    We optimize your profile and strategy for peak performance on high-value platforms.
                                </p>
                                <ul className="space-y-4">
                                    {content.services.social.map((s, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-pink-500 mt-1 shrink-0" size={18} />
                                            <div>
                                                <div className="font-bold text-white">{s.title}</div>
                                                <div className="text-sm text-slate-500">{s.desc}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900/50 p-8 rounded-3xl border border-pink-500/10 flex flex-col justify-between">
                                <div className="text-xs font-black text-pink-500 uppercase tracking-widest mb-12">Key Platforms</div>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                                        <span className="font-bold text-2xl uppercase">LinkedIn</span>
                                        <span className="text-pink-500 font-bold">Growth Focus</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                                        <span className="font-bold text-2xl uppercase">Instagram</span>
                                        <span className="text-pink-500 font-bold">Visual Impact</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                                        <span className="font-bold text-2xl uppercase">Facebook</span>
                                        <span className="text-pink-500 font-bold">Community</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Page>

                {/* PAGE 6: DESIGN SPOTLIGHT */}
                <Page className="bg-black">
                    <div className="max-w-4xl mx-auto py-20">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-purple-600/20 text-purple-500 rounded-xl flex items-center justify-center">
                                <Monitor />
                            </div>
                            <h2 className="text-4xl font-black uppercase tracking-tight text-white">Visual <span className="text-purple-500">Identity</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="grid grid-cols-2 gap-4">
                                {content.services.design.map((s, i) => (
                                    <div key={i} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
                                        <h4 className="font-bold text-xs uppercase tracking-widest mb-2">{s.title}</h4>
                                        <div className="w-8 h-1 bg-purple-500"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-10 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-3xl border border-purple-500/20 flex flex-col justify-center">
                                <h3 className="text-3xl font-black mb-6 uppercase leading-none">Design that<br />converts.</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Our creative team blends high-end aesthetics with psychology-driven design principles to capture attention instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </Page>

                {/* PAGE 7: ERPNEXT SPOTLIGHT */}
                <Page className="bg-slate-950">
                    <div className="max-w-4xl mx-auto py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center">
                                        <Database />
                                    </div>
                                    <h2 className="text-4xl font-black uppercase tracking-tight text-white">Operational <span className="text-blue-500">Scale</span></h2>
                                </div>
                                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                    Lead generation is only half the battle. We implement **ERPNext** to bridge the gap between marketing and operations.
                                </p>
                                <div className="space-y-4">
                                    {['CRM & Sales', 'Inventory Management', 'Financial Accounting', 'HR & Payroll'].map((m, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-[10px] font-black text-blue-400">✓</div>
                                            <span className="font-bold text-sm uppercase tracking-wide">{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="p-12 bg-slate-900 rounded-full border border-blue-500/20 aspect-square flex flex-col justify-center items-center text-center">
                                    <div className="text-5xl font-black text-white mb-2">100%</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-blue-400">Integrated</div>
                                    <div className="mt-8 text-xs text-slate-500 max-w-[150px]">
                                        Real-time dashboard for your entire business ecosystem.
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Page>

                {/* PAGE 8: THE ROADMAP */}
                <Page className="bg-slate-950">
                    <div className="max-w-4xl mx-auto py-20">
                        <span className="text-purple-500 font-black uppercase tracking-[0.2em] mb-4 block text-center">04. The Success Plan</span>
                        <h2 className="text-5xl font-black mb-16 text-center">Your <span className="text-indigo-400">Roadmap.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {content.plan.steps.map((step, i) => (
                                <div key={i} className="flex gap-6 items-start pb-6 border-b border-slate-900">
                                    <span className="text-2xl font-black text-slate-700">{step.number}</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Page>

                {/* PAGE 9: SUCCESS STORIES */}
                <Page className="bg-black">
                    <div className="max-w-5xl mx-auto py-20">
                        <h2 className="text-5xl font-black mb-16 text-center uppercase tracking-tight">Proven <span className="text-purple-500 underline decoration-indigo-500 decoration-4 underline-offset-8">Results</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {content.testimonials.slice(0, 4).map((t, i) => (
                                <div key={i} className="p-10 bg-slate-900/50 border border-slate-800 rounded-3xl relative">
                                    <QuoteIcon className="absolute top-10 right-10 text-slate-800" size={40} />
                                    <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10 italic">"{t.content}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                                        <div>
                                            <div className="font-bold text-white uppercase text-sm">{t.name}</div>
                                            <div className="text-xs text-slate-500">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Page>

                {/* PAGE 10: CALL TO ACTION */}
                <Page className="bg-slate-950 justify-center items-center text-center">
                    <div className="max-w-2xl px-6">
                        <img src="/logo.png" alt="Logo" className="w-24 mb-12 mx-auto" />
                        <h2 className="text-6xl font-black mb-8 leading-none uppercase tracking-tighter">Ready to Start<br />Your <span className="text-indigo-400">Ripple?</span></h2>
                        <p className="text-xl text-slate-400 mb-12">
                            Contact our lead strategist to book your 15-minute discovery alignment call.
                        </p>
                        <div className="p-10 bg-white text-black rounded-3xl shadow-2xl mb-12">
                            <div className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-400">Direct Contact</div>
                            <div className="text-3xl font-black mb-2">{content.brand.contact.phone}</div>
                            <div className="text-lg font-bold text-indigo-600">{content.brand.contact.email}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-4 opacity-50">&copy; {new Date().getFullYear()} {content.brand.name}</div>
                            <div className="flex gap-4 opacity-50">
                                <Monitor size={16} />
                                <Globe size={16} />
                                <Target size={16} />
                            </div>
                        </div>
                    </div>
                </Page>
            </div>

            {/* Dots Indicator (Mobile) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50 print:hidden sm:hidden">
                {[...Array(totalPages)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? 'bg-indigo-500 w-4' : 'bg-slate-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const QuoteIcon = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C20.1217 16 21.0171 15.1046 21.0171 14V9C21.0171 7.89543 20.1217 7 19.0171 7H15.0171C13.9125 7 13.0171 7.89543 13.0171 9V15C13.0171 15.5523 12.5694 16 12.0171 16H11.0171C10.4648 16 10.0171 15.5523 10.0171 15V9C10.0171 7.89543 9.12165 7 8.01709 7H4.01709C2.91252 7 2.01709 7.89543 2.01709 9V14C2.01709 15.1046 2.91252 16 4.01709 16H7.01709C8.12166 16 9.01709 16.8954 9.01709 18V21H14.0172L14.017 21Z" />
    </svg>
);

export default Brochure;
