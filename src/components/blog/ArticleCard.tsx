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
        className="group relative rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Visual Banner Graphic (5 cols on lg) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#060B15]">
            <ArticleVisualBanner 
              articleId={article.id} 
              category={article.category} 
              variant="card" 
            />
            {/* Visual overlay tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/[0.12] text-xs font-medium text-slate-300 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>FEATURED INSIGHT</span>
            </div>
          </div>

          {/* Right Column: Article Context (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap mb-3.5">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readTime}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  • {article.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-100 transition-colors leading-tight tracking-tight">
                {article.title}
              </h3>

              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="text-xs text-slate-400 font-mono">
                <span className="font-semibold text-white">{article.author.name}</span>
                <span className="mx-2 text-slate-600">/</span>
                <span className="text-slate-400">{article.author.role}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
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
      className="group relative flex flex-col justify-between h-full rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none"
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
            <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/75 text-slate-300 border border-white/[0.1] backdrop-blur-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-[11px] text-slate-500">
              {article.date.replace('Draft Content — ', '')}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition-colors duration-200 line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 font-normal">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
          {article.author.name}
        </span>

        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
