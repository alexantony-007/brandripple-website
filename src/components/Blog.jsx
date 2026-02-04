import React, { useState } from 'react';
import { BookOpen, Calendar, ChevronRight, X } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section id="blog" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Latest Insights</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Trends, strategies, and deep dives into the world of digital growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full text-indigo-600">
                                    {blog.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                    <Calendar size={16} />
                                    {blog.date}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                                    {blog.content}
                                </p>
                                <button
                                    onClick={() => setSelectedBlog(blog)}
                                    className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group-hover:translate-x-2 duration-300"
                                >
                                    Read Article <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Modal for Full Article Reading */}
            {selectedBlog && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedBlog(null)}>
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors z-50 sticky"
                        >
                            <X size={24} className="text-slate-600" />
                        </button>

                        <div className="h-64 w-full relative">
                            <img src={selectedBlog.image} className="w-full h-full object-cover" alt={selectedBlog.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div>
                                    <span className="text-white/90 font-medium px-3 py-1 bg-indigo-600/80 rounded-full text-sm mb-3 inline-block">
                                        {selectedBlog.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                        {selectedBlog.title}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-2 text-slate-500 mb-8 border-b border-slate-100 pb-4">
                                <Calendar size={18} /> {selectedBlog.date}
                                <span className="mx-2">•</span>
                                <span className="flex items-center gap-1"><BookOpen size={18} /> 2 min read</span>
                            </div>
                            <div className="prose prose-lg text-slate-700 leading-loose">
                                <p className="whitespace-pre-wrap">{selectedBlog.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
