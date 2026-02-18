import React, { useEffect } from 'react';
import { content } from '../data/content';

const SEO = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(content.seo.schema);

        // Add to head
        document.head.appendChild(script);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null; // This component doesn't render anything UI-wise
};

export default SEO;
