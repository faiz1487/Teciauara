import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface ArticleCardProps {
  article: BlogPost;
  onRead: (article: BlogPost) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead, featured = false }) => {
  if (featured) {
    return (
      <div className="relative rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:shadow-glow-blue hover:border-brand-electricBlue/50 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
        {/* Subtle accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-brand-primaryNavy" />

        <div>
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent border border-brand-electricBlue/30 font-mono">
              Featured Insight
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-cyanAccent" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-brand-cyanAccent transition-colors cursor-pointer" onClick={() => onRead(article)}>
            {article.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            <span className="font-semibold text-white">{article.author.name}</span>
            <span className="mx-1.5">•</span>
            <span>{article.date}</span>
          </div>

          <button
            onClick={() => onRead(article)}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyanAccent hover:text-white transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card hover:shadow-card-hover hover:border-brand-electricBlue/60 hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent border border-brand-electricBlue/30 font-mono">
            {article.category}
          </span>
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3 text-brand-cyanAccent" />
            {article.readTime}
          </span>
        </div>

        <h3 
          onClick={() => onRead(article)}
          className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors duration-200 cursor-pointer line-clamp-2"
        >
          {article.title}
        </h3>

        <p className="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-3 font-normal">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-[11px] text-slate-500 font-medium">
          {article.date}
        </span>

        <button
          onClick={() => onRead(article)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-electricBlue group-hover:text-brand-cyanAccent transition-colors"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
