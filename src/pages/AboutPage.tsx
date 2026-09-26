import React from 'react';
import { ArrowRight, Eye, Lightbulb, CheckCircle2, RefreshCw, Users, Shield, Compass, FileCheck, Layers } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/companyInfo';

export const AboutPage: React.FC = () => {
  const getValueIcon = (title: string) => {
    switch (title) {
      case 'Transparency':
        return <Eye className="w-6 h-6 text-brand-electricBlue" />;
      case 'Practical Innovation':
        return <Lightbulb className="w-6 h-6 text-brand-electricBlue" />;
      case 'Reliability':
        return <CheckCircle2 className="w-6 h-6 text-brand-electricBlue" />;
      case 'Continuous Improvement':
        return <RefreshCw className="w-6 h-6 text-brand-electricBlue" />;
      case 'Customer Partnership':
        return <Users className="w-6 h-6 text-brand-electricBlue" />;
      default:
        return <Shield className="w-6 h-6 text-brand-electricBlue" />;
    }
  };

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Teciaura Technologies, our mission, vision, core values, and collaborative milestone-driven approach to engineering digital solutions."
      />

      {/* Hero Section */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-4 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primaryNavy tracking-tight leading-tight">
              Technology with Purpose. Growth with Direction.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-brand-bodyText leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Mission/Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-electricBlue">
                  Our Purpose
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primaryNavy tracking-tight">
                Building Resilient Technology for Growing Businesses
              </h2>
              <p className="text-base text-brand-bodyText leading-relaxed">
                Teciaura Technologies brings together technology and digital growth services to help businesses establish a strong online presence, improve operations, and build scalable digital foundations.
              </p>
              <p className="text-base text-brand-bodyText leading-relaxed">
                In an era where technology choices can feel overwhelming, we champion practical engineering. We avoid overcomplicating systems for the sake of buzzwords and instead focus on what creates genuine, measurable operational stability and commercial clarity.
              </p>
            </div>

            {/* Mission & Vision Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Mission Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-brand-lightBg border border-brand-border shadow-subtle">
                <div className="flex items-center gap-2 text-brand-electricBlue font-bold text-xs uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-lg font-bold text-brand-primaryNavy mb-2">
                  Accessible, Practical Technology
                </h3>
                <p className="text-sm text-brand-bodyText leading-relaxed">
                  To make reliable technology and practical digital solutions accessible to growing businesses.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-brand-primaryNavy text-white border border-brand-electricBlue/20 shadow-card">
                <div className="flex items-center gap-2 text-brand-cyanAccent font-bold text-xs uppercase tracking-wider mb-2">
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  A Trusted Global Partner
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To become a trusted technology and digital growth partner for businesses in India and around the world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-brand-lightBg border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How We Work"
            description="We begin by understanding the business problem, define a clear scope, deliver in structured milestones, and communicate throughout the project."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-subtle">
              <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue mb-5 font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-brand-primaryNavy mb-2">
                Problem-First Discovery
              </h3>
              <p className="text-sm text-brand-bodyText leading-relaxed">
                Before writing any code or configuring servers, we dig into the specific operational bottleneck. We ensure technical solutions directly address business requirements.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-subtle">
              <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue mb-5 font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-brand-primaryNavy mb-2">
                Defined Scope & Milestones
              </h3>
              <p className="text-sm text-brand-bodyText leading-relaxed">
                Every project is structured into clear phases with concrete deliverables. You know exactly what is being built, when it will be delivered, and how it will be verified.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-subtle">
              <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue mb-5 font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-brand-primaryNavy mb-2">
                Continuous Communication
              </h3>
              <p className="text-sm text-brand-bodyText leading-relaxed">
                No black-box handoffs. We maintain transparent status updates, staging review links, and clear documentation so your internal team is fully empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Culture"
            title="Core Values"
            description="These principles define our standards of work, our communication, and our long-term client relationships."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle hover:border-brand-electricBlue/30 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center mb-4">
                  {getValueIcon(val.title)}
                </div>
                <h3 className="text-lg font-bold text-brand-primaryNavy mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-brand-bodyText leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}

            {/* Note on Information Placeholders */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col justify-center">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Company Details Placeholder
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Founder profiles, office registrations, and corporate disclosures can be updated here as official corporate filings are formalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Partner with a Dedicated Technology Team"
        text="Whether launching your first platform or automating your cloud workflows, we are ready to discuss your goals."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
};
