import React, { useState } from 'react';
import { Sparkles, Filter } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/common/CTASection';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectItem } from '../types';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI & Web Platform', 'Cloud & DevOps', 'Backend & Cloud', 'DevOps & Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Portfolio & Practical Solutions"
        description="Explore technical architecture blueprints and verified demo implementations created by Teciaura Technologies across cloud, web, and automation."
      />

      {/* Hero Section */}
      <section className="bg-[#070C18] border-b border-white/[0.08] pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Portfolio' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Architectures & Implementation Reference</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Selected projects and practical solutions.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore reference blueprints, containerized deployments, and web architectures engineered with modern, maintainable stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 sm:py-24 bg-[#060B15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparent Notice Banner */}
          <div className="mb-12 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Reference Blueprints Notice: </span>
              The projects featured below are verified concept and demo architectures engineered by Teciaura to demonstrate our stack standards, IaC patterns, and code design. We do not display fabricated client names or unsupported statistics.
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-400 mr-2 flex-shrink-0">
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
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex-shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white text-slate-950 font-semibold shadow-sm'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-slate-900 text-white' : 'bg-white/[0.06] text-slate-400'
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
    </div>
  );
};
