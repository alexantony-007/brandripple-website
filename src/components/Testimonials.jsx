import React from 'react';
import { Quote } from 'lucide-react';
import { content } from '../data/content';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Growth-Minded Brands</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We don't just provide services; we build partnerships that deliver measurable impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
                                    <Quote size={32} fill="currentColor" fillOpacity={0.1} />
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            <div>
                                <div className="h-px bg-slate-200 w-full mb-6"></div>
                                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                <p className="text-sm text-indigo-600 font-medium uppercase tracking-wider">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
        </section>
    );
};

export default Testimonials;
