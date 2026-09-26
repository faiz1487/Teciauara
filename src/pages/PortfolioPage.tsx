import React, { useState } from 'react';
import { Sparkles, Layers, Filter } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectItem } from '../types';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Cloud & DevOps', 'Web Development', 'Software', 'Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Portfolio & Practical Solutions"
        description="Explore technical architecture blueprints and verified demo implementations created by Teciaura Technologies across cloud, web, and automation."
      />

      {/* Hero Section */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Portfolio' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-4 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
              <span>Architectures & Implementation Reference</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primaryNavy tracking-tight leading-tight">
              Selected Projects and Practical Solutions.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-brand-bodyText leading-relaxed">
              Explore reference blueprints, containerized deployments, and web architectures engineered with modern, maintainable stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparent Notice Banner */}
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-brand-lightBg border border-brand-border flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-brand-electricBlue flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-brand-secondaryNavy leading-relaxed">
              <span className="font-bold text-brand-primaryNavy">Reference Blueprints Notice: </span>
              The projects featured below are verified concept and demo architectures engineered by Teciaura to demonstrate our stack standards, IaC patterns, and code design. We do not display fabricated client names or unsupported statistics.
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-mutedText mr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const count = category === 'All' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex-shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-brand-primaryNavy text-white shadow-sm'
                      : 'bg-brand-lightBg text-brand-bodyText hover:bg-slate-200/60 border border-brand-border'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-brand-electricBlue text-white' : 'bg-white text-brand-mutedText border border-brand-border'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have a Custom Architecture in Mind?"
        text="Whether you need automated cloud provisioning, high-performance web development, or modern microservices, we can build it."
        buttonText="Discuss Your Architecture"
        buttonTo="/contact"
      />

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
};
