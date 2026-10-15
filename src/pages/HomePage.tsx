import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { HeroVideoSection } from '../components/home/HeroVideoSection';
import { ValueStrip } from '../components/home/ValueStrip';
import { InteractiveTechShowcase } from '../components/home/InteractiveTechShowcase';
import { MeetTheTeamSection } from '../components/home/MeetTheTeamSection';
import { ServicesEditorialGrid } from '../components/home/ServicesEditorialGrid';
import { ClientTestimonialsSection } from '../components/home/ClientTestimonialsSection';
import { TeciauraDifference } from '../components/home/TeciauraDifference';
import { PortfolioShowcaseSection } from '../components/home/PortfolioShowcaseSection';
import { HowWeWorkSection } from '../components/home/HowWeWorkSection';
import { FreeAuditSection } from '../components/home/FreeAuditSection';
import { CareersSection } from '../components/home/CareersSection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { HomeContactClosing } from '../components/home/HomeContactClosing';
import { FloatingWhatsAppButton } from '../components/common/FloatingWhatsAppButton';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { COMPANY_INFO } from '../data/companyInfo';
import { FAQS_DATA } from '../data/faqs';
import { ProjectItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="bg-[#060B15] text-slate-300">
      <SEOHead
        title="Software & Cloud Engineering Studio | Teciaura"
        description="Independent software and cloud engineering studio based in Noida, India. We partner with ambitious founders to build high-converting websites, web apps, and reliable cloud systems."
      />

      {/* SECTION 1: CINEMATIC FULL-SCREEN VIDEO HERO */}
      <HeroVideoSection />

      {/* SECTION 2: TRUST / VALUE STRIP */}
      <ValueStrip />

      {/* SECTION 3: WHAT WE BUILD & PRACTICAL CAPABILITIES */}
      <InteractiveTechShowcase />

      {/* SECTION 4: THE REAL HUMANS BEHIND YOUR CODE */}
      <MeetTheTeamSection />

      {/* SECTION 5: SERVICES EDITORIAL ASYMMETRICAL GRID */}
      <ServicesEditorialGrid />

      {/* SECTION 6: CLIENT STORIES & FOUNDER TESTIMONIALS */}
      <ClientTestimonialsSection />

      {/* SECTION 7: THE TECIAURA DIFFERENCE */}
      <TeciauraDifference />

      {/* SECTION 8: PORTFOLIO SHOWCASE */}
      <PortfolioShowcaseSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* SECTION 9: HOW WE WORK (PROCESS) */}
      <HowWeWorkSection />

      {/* SECTION 10: FREE WEBSITE & ARCHITECTURE AUDIT */}
      <FreeAuditSection />

      {/* SECTION 11: CAREERS TEASER */}
      <CareersSection />

      {/* SECTION 12: FAQ */}
      <section className="py-24 bg-[#060B15] border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Find direct, honest answers about our pricing models, communication channels, and ongoing support structure."
            align="center"
            className="mb-14"
          />

          <FAQAccordion items={FAQS_DATA} />

          <div className="mt-14 text-center">
            <p className="text-sm text-slate-400">
              Have a specific question not addressed above?{' '}
              <a href="/contact" className="font-semibold text-amber-400 hover:underline">
                Chat directly with our lead developer
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CONTACT CLOSING */}
      <HomeContactClosing />

      {/* Floating Friendly WhatsApp Widget */}
      <FloatingWhatsAppButton />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

