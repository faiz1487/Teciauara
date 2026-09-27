import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/common/CTASection';
import { ArticleCard } from '../components/blog/ArticleCard';
import { ArticleModal } from '../components/blog/ArticleModal';
import { BLOG_POSTS_DATA } from '../data/blogPosts';
import { BlogPost } from '../types';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Cloud & DevOps', 'Web Development', 'Automation', 'Digital Marketing'];

  const filteredArticles = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = BLOG_POSTS_DATA[0];
  const gridArticles = filteredArticles.filter((p) => searchQuery || selectedCategory !== 'All' ? true : p.id !== featuredArticle.id);

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Insights & Engineering Blog"
        description="Practical guides, cloud optimization patterns, web engineering best practices, and digital growth perspectives from Teciaura Technologies."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Insights & Blog' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-card font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>Technology & Growth Perspectives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Insights, Guides, and Practical Notes.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore educational guides covering modern cloud infrastructure, website performance, CI/CD automation, and digital presence strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="py-20 sm:py-24 bg-[#050B17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 mb-14">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by topic or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-700/80 text-sm focus:outline-none focus:border-brand-cyanAccent focus:ring-2 focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500 shadow-card"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-brand-electricBlue text-white shadow-glow-blue border border-blue-400/30'
                      : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article Area (shown when not actively searching) */}
          {!searchQuery && selectedCategory === 'All' && (
            <div className="mb-14">
              <ArticleCard
                article={featuredArticle}
                onRead={(art) => setActiveArticle(art)}
                featured={true}
              />
            </div>
          )}

          {/* Articles Grid */}
          {gridArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={(art) => setActiveArticle(art)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 p-8 rounded-3xl bg-[#0B1528] border border-slate-800">
              <p className="text-base font-semibold text-white">No articles found matching "{searchQuery}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "DevOps", "AWS", "CI/CD", or "SEO".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-brand-cyanAccent hover:bg-slate-800 transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Looking to Implement These Practices?"
        text="From setting up your first CI/CD pipeline to optimizing AWS hosting costs, our engineers are here to help."
        buttonText="Speak with an Engineer"
        buttonTo="/contact"
      />

      {/* Reading Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
};
