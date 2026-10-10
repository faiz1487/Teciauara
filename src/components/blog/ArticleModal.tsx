import React, { useEffect, useState, useRef } from 'react';
import { 
  X, Clock, ArrowLeft, Share2, Check, Sparkles, 
  ArrowRight, ShieldCheck, BookmarkCheck 
} from 'lucide-react';
import { BlogPost } from '../../types';
import { Button } from '../common/Button';
import { ArticleVisualBanner } from './ArticleVisualBanner';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setScrollProgress(0);
      // Auto-focus close button for screen reader & keyboard accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll > 0) {
        const progress = (scrollTop / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    }
  };

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1528] shadow-elevated border border-slate-700/80 overflow-hidden z-10 max-h-[90vh] flex flex-col text-white backdrop-blur-xl">
        
        {/* Dynamic Reading Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-30">
          <div 
            className="h-full bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-emerald-400 transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Modal Top Nav Bar */}
        <div className="px-6 py-4 sm:px-8 border-b border-slate-800 bg-[#070F1E] flex items-center justify-between gap-4 z-20">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-brand-cyanAccent transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              {Math.round(scrollProgress)}% read
            </span>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-brand-cyanAccent transition-colors"
              title="Copy page link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-brand-cyanAccent" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-y-auto scroll-smooth"
        >
          {/* Hero Visual Banner */}
          <ArticleVisualBanner 
            articleId={article.id} 
            category={article.category} 
            variant="hero" 
          />

          <div className="p-6 sm:p-10">
            {/* Category & Status */}
            <div className="flex items-center gap-2.5 mb-4 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent border border-brand-electricBlue/30 font-mono">
                {article.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700 font-mono">
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-brand-cyanAccent" />
                <span>{article.readTime}</span>
              </span>
            </div>

            {/* Title */}
            <h1 
              id="article-modal-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-5"
            >
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 py-3.5 border-y border-slate-800 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 text-brand-cyanAccent flex items-center justify-center font-bold text-sm font-mono shadow-sm">
                TA
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  {article.author.name}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {article.author.role}
                </p>
              </div>
            </div>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed mb-6 italic border-l-4 border-brand-cyanAccent pl-4 py-2 bg-slate-900/60 rounded-r-xl">
              {article.excerpt}
            </p>

            {/* Body Content */}
            <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {article.content.map((paragraph, index) => {
                // Special formatting for Key Takeaways
                if (paragraph.startsWith('Key Takeaways:')) {
                  const items = paragraph.replace('Key Takeaways:', '').split(/\d+\.\s+/).filter(Boolean);
                  return (
                    <div 
                      key={index} 
                      className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/40 shadow-card"
                    >
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3 font-mono">
                        <BookmarkCheck className="w-4 h-4" />
                        <span>Key Engineering Takeaways</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/90 font-normal">
                        {items.length > 0 ? (
                          items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                              <span>{item.trim()}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                            <span>{paragraph.replace('Key Takeaways:', '').trim()}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                }

                return (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Article Footer CTA */}
            <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#061022] border border-brand-electricBlue/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-card">
              <div>
                <div className="flex items-center gap-2 text-brand-cyanAccent font-mono text-xs font-bold uppercase mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engineering Consultation</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Have questions about implementing this architecture?
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Discuss your stack directly with Teciaura's cloud & software engineering team.
                </p>
              </div>
              <Button
                to={`/contact?service=${encodeURIComponent(article.category)}`}
                variant="primary"
                size="md"
                onClick={onClose}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-glow-blue font-bold font-mono text-xs whitespace-nowrap"
              >
                Discuss Technical Scope
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
