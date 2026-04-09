import { useEffect } from 'react';
import { SEO_CONFIG } from '../constants/seo';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title 
      ? `${title} | Akademi Cilik` 
      : SEO_CONFIG.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || SEO_CONFIG.description);
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title ? `${title} | Akademi Cilik` : SEO_CONFIG.title);
    }
  }, [title, description]);

  return null;
}
