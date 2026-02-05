import React from 'react';
import { content } from '../data/content';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = ({ onShowLegal }) => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-6">
                            {content.brand.name}
                        </h2>
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                            {content.hero.subheadline}
                        </p>
                        <div className="text-slate-400 mb-6 space-y-2">
                            <a href={`tel:${content.brand.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                📞 {content.brand.contact.phone}
                            </a>
                            <a href={`mailto:${content.brand.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                ✉️ {content.brand.contact.email}
                            </a>
                            <a href={content.brand.contact.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                💬 WhatsApp Chat
                            </a>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={content.brand.contact.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={content.brand.contact.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={content.brand.contact.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={content.brand.contact.socials.google}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500 transition-all"
                            >
                                <span className="font-bold text-lg">G</span>
                            </a>
                            <a
                                href={content.brand.contact.socials.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-green-500 transition-all"
                            >
                                <span className="text-xl">💬</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Services</h3>
                        <ul className="space-y-4">
                            {['social', 'design', 'branding', 'digital'].map((key) => (
                                <li key={key}>
                                    <a href="#services" className="capitalize text-slate-400 hover:text-purple-400 transition-colors">
                                        {key} Services
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            {content.footer.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors">{link.label}</a>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => onShowLegal('privacy')}
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-left"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onShowLegal('terms')}
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-left"
                                >
                                    Terms of Service
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} {content.brand.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
