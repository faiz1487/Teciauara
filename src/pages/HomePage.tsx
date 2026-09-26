import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { HeroVisual } from '../components/home/HeroVisual';
import { ValueStrip } from '../components/home/ValueStrip';
import { ServiceCard } from '../components/home/ServiceCard';
import { WhyChooseCard } from '../components/home/WhyChooseCard';
import { ProcessStep } from '../components/home/ProcessStep';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { FAQS_DATA } from '../data/faqs';
import { COMPANY_INFO } from '../data/companyInfo';
import { ProjectItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <SEOHead
        title="Build Your Digital Future"
        description="Teciaura Technologies helps businesses build digital experiences, modernize infrastructure, automate deployments, improve online visibility, and maintain reliable technology systems."
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#DCE6F2_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightBg border border-brand-border text-xs font-semibold text-brand-electricBlue shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
                <span className="tracking-widest uppercase">TECHNOLOGY + DIGITAL GROWTH</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primaryNavy tracking-tight leading-[1.12]">
                Build Your Digital Future with{' '}
                <span className="text-brand-electricBlue">Teciaura Technologies.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-brand-bodyText leading-relaxed max-w-2xl font-normal">
                From cloud infrastructure and software development to digital marketing and IT support, we help businesses build, launch, and grow with confidence.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
                <Button
                  to="/services"
                  variant="secondary"
                  size="lg"
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Bottom Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-mutedText">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-cyanAccent flex-shrink-0" />
                  <span>Cloud & DevOps Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-electricBlue flex-shrink-0" />
                  <span>Modern Web & App Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-cyanAccent flex-shrink-0" />
                  <span>Measurable Growth Strategy</span>
                </div>
              </div>
            </div>

            {/* Right Abstract Visual (5 cols on lg) */}
            <div className="lg:col-span-5 w-full">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST / VALUE STRIP */}
      <ValueStrip />

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Technology and Digital Services for Every Stage of Growth"
            description="Explore our services designed to help businesses build stronger digital foundations and reach more customers."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Services Breakdown
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE TECIAURA */}
      <section className="py-20 bg-brand-lightBg border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Teciaura Difference"
            title="Your Technology Partner for What Comes Next."
            description="We bridge the gap between technical complexity and real commercial impact through transparent, disciplined engineering."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.whyChooseProps.map((prop, index) => (
              <WhyChooseCard
                key={prop.title}
                title={prop.title}
                description={prop.description}
                icon={prop.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED WORK / PORTFOLIO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-electricBlue">
                  Proven Architectures
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primaryNavy tracking-tight">
                Selected Projects and Practical Solutions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-brand-bodyText max-w-xl">
                Explore reference blueprints and demo implementations built to demonstrate how we structure modular, reliable systems.
              </p>
            </div>

            <Button
              to="/portfolio"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="py-20 bg-brand-lightBg border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Predictable Delivery"
            title="A Clear Process from Idea to Launch"
            description="Our structured four-step methodology ensures alignment, clarity, and dependable execution at every phase."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.processSteps.map((step, idx) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                details={step.details}
                isLast={idx === COMPANY_INFO.processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <CTASection
        headline="Have a Project in Mind?"
        text="Let’s discuss how Teciaura Technologies can help you build, improve, or grow your digital presence."
        buttonText="Talk to Our Team"
        buttonTo="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonTo="/services"
      />

      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-brand-lightBg border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Find direct answers to common questions about our capabilities, engagement models, and support structure."
            align="center"
            className="mb-12"
          />

          <FAQAccordion items={FAQS_DATA} />

          <div className="mt-12 text-center">
            <p className="text-sm text-brand-bodyText">
              Have a specific question not addressed above?{' '}
              <a href="/contact" className="font-semibold text-brand-electricBlue hover:underline">
                Contact our engineering team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CONTACT CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-brand-primaryNavy via-brand-secondaryNavy to-brand-primaryNavy p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-card border border-brand-electricBlue/20">
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Let’s Build Something That Moves Your Business Forward.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need a modern web presence, automated cloud deployments, or reliable ongoing IT support, we are here to partner with you.
              </p>
              <div className="pt-2 flex justify-center">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
