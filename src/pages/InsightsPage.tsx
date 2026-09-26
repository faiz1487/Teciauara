import React, { useState } from 'react';
import { Search, BookOpen, Clock, Tag, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
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
    <>
      <SEOHead
        title="Insights & Engineering Blog"
        description="Practical guides, cloud optimization patterns, web engineering best practices, and digital growth perspectives from Teciaura Technologies."
      />

      {/* Hero Section */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Insights & Blog' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-4 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
              <span>Technology & Growth Perspectives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primaryNavy tracking-tight leading-tight">
              Insights, Guides, and Practical Notes.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-brand-bodyText leading-relaxed">
              Explore educational guides covering modern cloud infrastructure, website performance, CI/CD automation, and digital presence strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by topic or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-electricBlue focus:ring-2 focus:ring-brand-electricBlue/20 bg-brand-lightBg/50 placeholder:text-slate-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-brand-primaryNavy text-white'
                      : 'bg-brand-lightBg text-brand-bodyText hover:bg-slate-200 border border-brand-border'
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
            <div className="text-center py-16 p-8 rounded-2xl bg-brand-lightBg border border-brand-border">
              <p className="text-base font-semibold text-brand-primaryNavy">No articles found matching "{searchQuery}"</p>
              <p className="text-xs text-brand-mutedText mt-1">Try searching for "DevOps", "AWS", "CI/CD", or "SEO".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-white border border-brand-border rounded-lg text-xs font-semibold text-brand-electricBlue hover:bg-slate-50"
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
    </>
  );
};
