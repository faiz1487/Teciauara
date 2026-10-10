import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonicalPath, 
  jsonLd 
}) => {
  useEffect(() => {
    const fullTitle = `${title} | Teciaura Technologies`;
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    if (canonicalPath) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://teciaura.com${canonicalPath}`);
    }

    // Dynamic JSON-LD script injection for route-specific rich snippets
    let scriptElement = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'dynamic-jsonld';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      const el = document.getElementById('dynamic-jsonld');
      if (el) el.remove();
    };
  }, [title, description, canonicalPath, jsonLd ? JSON.stringify(jsonLd) : '']);

  return null;
};
