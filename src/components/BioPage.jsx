import React, { useState } from 'react';
import { content } from '../data/content';
import {
    ArrowLeft,
    MessageCircle,
    MapPin,
    Globe,
    Star,
    BookOpen,
    Users,
    Plus,
    Minus,
    Instagram,
    Linkedin,
    Facebook,
    Youtube
} from 'lucide-react';

const BioPage = ({ onBack }) => {
    const [expandedTeams, setExpandedTeams] = useState({ service: false, backend: false });

    // Icon Mapping Helper
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'whatsapp': return <MessageCircle size={20} />;
            case 'map-pin': return <MapPin size={20} />;
            case 'globe': return <Globe size={20} />;
            case 'star': return <Star size={20} />;
            case 'book-open': return <BookOpen size={20} />;
            case 'users': return <Users size={20} />;
            default: return <Plus size={20} />;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center animate-in fade-in duration-700 font-sans">
            {/* Back Button */}
            <div className="w-full max-w-md mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm font-medium">Back to Home</span>
                </button>
            </div>

            {/* Profile Info */}
            <div className="w-full max-w-md text-center mb-10">
                <div className="mb-6 flex justify-center">
                    <img
                        src="/logo.png"
                        alt={content.brand.name}
                        className="h-16 w-auto object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
                <h1 className="text-lg font-bold uppercase tracking-wider mb-2">{content.brand.name}</h1>
                <p className="text-slate-400 text-sm mb-6">{content.about.location}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 px-4">
                    {content.about.bio}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-12">
                    <a href={content.brand.contact.socials.facebook} className="text-slate-400 hover:text-white transition-colors"><Facebook size={22} /></a>
                    <a href={content.brand.contact.socials.instagram} className="text-slate-400 hover:text-white transition-colors"><Instagram size={22} /></a>
                    <a href={content.brand.contact.socials.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={22} /></a>
                </div>

                <h2 className="text-base font-black uppercase tracking-widest mb-6">Quick Links</h2>

                {/* Vertical Button Stack */}
                <div className="space-y-4">
                    {content.about.bioLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href === 'home' ? '#' : link.href}
                            onClick={(e) => {
                                if (link.href === 'home') {
                                    e.preventDefault();
                                    onBack();
                                }
                            }}
                            className={`flex items-center justify-center gap-3 w-full py-4 rounded-lg font-black text-xs tracking-widest uppercase transition-all transform active:scale-95 ${link.type === 'primary'
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg'
                                    : link.type === 'outline'
                                        ? 'border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10'
                                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800/50 shadow-sm'
                                }`}
                        >
                            <span className="opacity-80">{getIcon(link.icon)}</span>
                            {link.label}
                        </a>
                    ))}

                    {/* Team Expandables (Matching requested style) */}
                    <div className="space-y-4">
                        <button
                            onClick={() => setExpandedTeams(prev => ({ ...prev, service: !prev.service }))}
                            className="flex items-center justify-between w-full py-4 px-6 rounded-lg bg-slate-900 border border-slate-800/50 text-xs font-black tracking-widest uppercase hover:bg-slate-800 transition-colors"
                        >
                            <span>Service Team</span>
                            {expandedTeams.service ? <Minus size={16} /> : <Plus size={16} />}
                        </button>
                        {expandedTeams.service && (
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-400 animate-in slide-in-from-top-2 duration-300">
                                Contact our specialized service advisors for expert vehicle consulting.
                            </div>
                        )}

                        <button
                            onClick={() => setExpandedTeams(prev => ({ ...prev, backend: !prev.backend }))}
                            className="flex items-center justify-between w-full py-4 px-6 rounded-lg bg-slate-900 border border-slate-800/50 text-xs font-black tracking-widest uppercase hover:bg-slate-800 transition-colors"
                        >
                            <span>Backend Team</span>
                            {expandedTeams.backend ? <Minus size={16} /> : <Plus size={16} />}
                        </button>
                        {expandedTeams.backend && (
                            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-400 animate-in slide-in-from-top-2 duration-300">
                                Our support and operations team ensuring seamless business flow.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} {content.brand.name}
            </div>
        </div>
    );
};

export default BioPage;
