import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { HeroVideoSection } from '../components/home/HeroVideoSection';
import { ValueStrip } from '../components/home/ValueStrip';
import { InteractiveTechShowcase } from '../components/home/InteractiveTechShowcase';
import { ServicesEditorialGrid } from '../components/home/ServicesEditorialGrid';
import { TeciauraDifference } from '../components/home/TeciauraDifference';
import { PortfolioShowcaseSection } from '../components/home/PortfolioShowcaseSection';
import { HowWeWorkSection } from '../components/home/HowWeWorkSection';
import { FreeAuditSection } from '../components/home/FreeAuditSection';
import { CareersSection } from '../components/home/CareersSection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { HomeContactClosing } from '../components/home/HomeContactClosing';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { COMPANY_INFO } from '../data/companyInfo';
import { FAQS_DATA } from '../data/faqs';
import { ProjectItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Build Beyond What's Possible | Teciaura Technologies"
        description="We design and engineer beautiful digital experiences, intelligent applications, and scalable technology solutions that help ambitious businesses grow."
      />

      {/* SECTION 1: CINEMATIC FULL-SCREEN VIDEO HERO */}
      <HeroVideoSection />

      {/* SECTION 2: TRUST / VALUE STRIP */}
      <ValueStrip />

      {/* SECTION 3: INTERACTIVE TECHNOLOGY SHOWCASE: Exact User Requirement */}
      <InteractiveTechShowcase />

      {/* SECTION 4: SERVICES EDITORIAL ASYMMETRICAL GRID: Exact User Requirement */}
      <ServicesEditorialGrid />

      {/* SECTION 5: THE TECIAURA DIFFERENCE: Editorial Asymmetrical Layout */}
      <TeciauraDifference />

      {/* SECTION 6: PORTFOLIO SHOWCASE: Exact User Requirement */}
      <PortfolioShowcaseSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* SECTION 7: HOW WE WORK (PROCESS): Exact User Requirement */}
      <HowWeWorkSection />

      {/* SECTION 8: FREE WEBSITE AUDIT OFFER: Exact User Requirement */}
      <FreeAuditSection />

      {/* SECTION 9: CAREERS TEASER */}
      <CareersSection />

      {/* SECTION 10: FAQ */}
      <section className="py-24 bg-[#050B17] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Find direct answers to common questions about our capabilities, engagement models, and support structure."
            align="center"
            className="mb-14"
          />

          <FAQAccordion items={FAQS_DATA} />

          <div className="mt-14 text-center">
            <p className="text-sm text-slate-400">
              Have a specific question not addressed above?{' '}
              <a href="/contact" className="font-semibold text-brand-cyanAccent hover:underline">
                Contact our engineering team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CONTACT CLOSING: Exact User Requirement */}
      <HomeContactClosing />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

