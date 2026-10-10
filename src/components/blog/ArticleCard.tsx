import React from 'react';
import { Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { BlogPost } from '../../types';
import { ArticleVisualBanner } from './ArticleVisualBanner';

interface ArticleCardProps {
  article: BlogPost;
  onRead: (article: BlogPost) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead, featured = false }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onRead(article);
    }
  };

  // FEATURED ARTICLE PRESENTATION
  if (featured) {
    return (
      <div 
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
        onClick={() => onRead(article)}
        className="group relative rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:shadow-card-hover hover:border-brand-cyanAccent/50 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
      >
        {/* Top accent beam */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-brand-primaryNavy z-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Visual Banner Graphic (5 cols on lg) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#061022]">
            <ArticleVisualBanner 
              articleId={article.id} 
              category={article.category} 
              variant="card" 
            />
            {/* Visual overlay tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B17]/90 border border-brand-cyanAccent/40 text-xs font-mono font-bold text-brand-cyanAccent shadow-md backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>FEATURED INSIGHT</span>
            </div>
          </div>

          {/* Right Column: Article Context (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap mb-3.5">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 text-brand-cyanAccent border border-slate-700/80 font-mono">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-brand-cyanAccent" />
                  {article.readTime}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  • {article.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-brand-cyanAccent transition-colors leading-tight tracking-tight">
                {article.title}
              </h3>

              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400 font-mono">
                <span className="font-semibold text-white">{article.author.name}</span>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-brand-cyanAccent">{article.author.role}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyanAccent group-hover:text-white transition-colors font-mono">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // STANDARD ARTICLE CARD (GRID)
  return (
    <div 
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyDown}
      onClick={() => onRead(article)}
      className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:shadow-card-hover hover:border-brand-electricBlue/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
    >
      <div>
        {/* Visual Banner Container */}
        <div className="relative overflow-hidden group-hover:brightness-105 transition-all">
          <ArticleVisualBanner 
            articleId={article.id} 
            category={article.category} 
            variant="card" 
          />
          {/* Category Tag pill */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#050B17]/90 text-brand-cyanAccent border border-brand-electricBlue/40 font-mono backdrop-blur-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-brand-cyanAccent" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-[11px] text-slate-400">
              {article.date.replace('Draft Content — ', '')}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors duration-200 line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 font-normal">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-mono truncate max-w-[150px]">
          {article.author.name}
        </span>

        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyanAccent group-hover:text-white transition-colors font-mono">
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
