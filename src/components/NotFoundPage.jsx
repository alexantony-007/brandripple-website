import React from 'react';
import { content } from '../data/content';
import { ArrowLeft, Home, Zap } from 'lucide-react';

const NotFoundPage = ({ onHome }) => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-md w-full text-center relative z-10">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 opacity-20 leading-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center translate-y-4">
                            <Zap size={80} className="text-purple-500 animate-pulse" />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-4">The Ripple Went Too Far.</h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                    The page you're looking for has vanished into the digital void. Don't worry, we can guide you back to the main flow.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={onHome}
                        className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold uppercase tracking-widest text-xs hover:from-purple-500 hover:to-indigo-500 transition-all shadow-xl shadow-purple-900/30 group"
                    >
                        <Home size={18} />
                        Back to Mainland
                    </button>

                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} />
                        Try Refreshing
                    </button>
                </div>

                <div className="mt-16 text-[10px] text-slate-700 uppercase tracking-widest font-bold">
                    &copy; {new Date().getFullYear()} {content.brand.name}
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
