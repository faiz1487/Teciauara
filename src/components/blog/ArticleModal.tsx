import React, { useEffect } from 'react';
import { X, Clock, ArrowLeft, Share2, Check } from 'lucide-react';
import { BlogPost } from '../../types';
import { Button } from '../common/Button';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1528] shadow-elevated border border-slate-700 overflow-hidden z-10 max-h-[90vh] flex flex-col text-white">
        
        {/* Modal Top Nav Bar */}
        <div className="px-6 py-4 sm:px-8 border-b border-slate-800 bg-[#070F1E] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-brand-cyanAccent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white hover:border-brand-cyanAccent transition-colors"
              title="Copy page link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-10 overflow-y-auto">
          {/* Category & Status */}
          <div className="flex items-center gap-2.5 mb-3.5 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent border border-brand-electricBlue/30 font-mono">
              {article.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {article.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 py-3 border-y border-slate-800 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-brand-cyanAccent flex items-center justify-center font-bold text-sm">
              TA
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {article.author.name}
              </p>
              <p className="text-xs text-slate-400">
                {article.author.role}
              </p>
            </div>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed mb-6 italic border-l-4 border-brand-cyanAccent pl-4 py-1 bg-slate-900/60 rounded-r-lg">
            {article.excerpt}
          </p>

          {/* Body Content */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {article.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">
                Have questions about implementing this in your stack?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Our engineering team is ready to evaluate your existing architecture.
              </p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              onClick={onClose}
            >
              Consult an Engineer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
