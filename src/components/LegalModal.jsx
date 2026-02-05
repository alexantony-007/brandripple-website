import React from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, content }) => {
    if (!isOpen || !content) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors z-50 sticky"
                >
                    <X size={24} className="text-slate-600" />
                </button>

                <div className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        {content.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-4">
                        Last Updated: {content.lastUpdated}
                    </p>

                    <div className="space-y-8">
                        {content.sections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{section.heading}</h3>
                                <p className="text-slate-600 leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
