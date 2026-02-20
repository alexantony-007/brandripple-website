import React, { useEffect } from 'react';
import { content } from '../data/content';

const SEO = () => {
    useEffect(() => {
        const { meta, schema } = content.seo;

        // 1. Inject JSON-LD
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);

        // 2. Manage Meta Tags
        const metaTags = [
            { name: 'description', content: meta.description },
            { name: 'keywords', content: meta.keywords },
            // Open Graph
            { property: 'og:title', content: meta.title },
            { property: 'og:description', content: meta.description },
            { property: 'og:image', content: meta.ogImage },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://brandripple.click' },
            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: meta.title },
            { name: 'twitter:description', content: meta.description },
            { name: 'twitter:image', content: meta.ogImage },
            { name: 'twitter:site', content: meta.twitterHandle }
        ];

        const elements = metaTags.map(tag => {
            const el = document.createElement('meta');
            Object.entries(tag).forEach(([key, value]) => el.setAttribute(key, value));
            document.head.appendChild(el);
            return el;
        });

        // Update Title
        const oldTitle = document.title;
        document.title = meta.title;

        // Cleanup on unmount
        return () => {
            document.head.removeChild(script);
            elements.forEach(el => document.head.removeChild(el));
            document.title = oldTitle;
        };
    }, []);

    return null;
};

export default SEO;
