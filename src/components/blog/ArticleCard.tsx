import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../../types';

interface ArticleCardProps {
  article: BlogPost;
  onRead: (article: BlogPost) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead, featured = false }) => {
  if (featured) {
    return (
      <div className="relative rounded-3xl bg-white border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-electricBlue/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
        {/* Subtle accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gradient" />

        <div>
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-electricBlue/10 text-brand-electricBlue border border-brand-electricBlue/20">
              Featured Insight
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-lightBg text-brand-mutedText border border-brand-border">
              {article.category}
            </span>
            <span className="text-xs text-brand-mutedText flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-primaryNavy hover:text-brand-electricBlue transition-colors cursor-pointer" onClick={() => onRead(article)}>
            {article.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-brand-bodyText leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-brand-border/60 flex items-center justify-between">
          <div className="text-xs text-brand-mutedText">
            <span className="font-semibold text-brand-primaryNavy">{article.author.name}</span>
            <span className="mx-1.5">•</span>
            <span>{article.date}</span>
          </div>

          <button
            onClick={() => onRead(article)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-electricBlue hover:text-brand-electricHover transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card-hover hover:border-brand-electricBlue/40 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/10 text-brand-electricBlue border border-brand-electricBlue/20">
            {article.category}
          </span>
          <span className="text-[11px] text-brand-mutedText flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        <h3 
          onClick={() => onRead(article)}
          className="text-lg font-bold text-brand-primaryNavy group-hover:text-brand-electricBlue transition-colors duration-200 cursor-pointer line-clamp-2"
        >
          {article.title}
        </h3>

        <p className="mt-2 text-sm text-brand-bodyText leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between">
        <span className="text-[11px] text-brand-mutedText font-medium">
          {article.date}
        </span>

        <button
          onClick={() => onRead(article)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-electricBlue group-hover:text-brand-electricHover transition-colors"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
