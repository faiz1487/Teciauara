import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Lightbulb, CheckCircle2, RefreshCw, Users, Shield, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/companyInfo';
import { EngineeringMetricsStrip } from '../components/about/EngineeringMetricsStrip';
import { EngineeringStackMatrix } from '../components/about/EngineeringStackMatrix';

export const AboutPage: React.FC = () => {
  const getValueIcon = (title: string) => {
    switch (title) {
      case 'Transparency':
        return <Eye className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Practical Innovation':
        return <Lightbulb className="w-6 h-6 text-brand-electricBlue" />;
      case 'Reliability':
        return <CheckCircle2 className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Continuous Improvement':
        return <RefreshCw className="w-6 h-6 text-brand-electricBlue" />;
      case 'Customer Partnership':
        return <Users className="w-6 h-6 text-brand-cyanAccent" />;
      default:
        return <Shield className="w-6 h-6 text-brand-electricBlue" />;
    }
  };

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="About Us | Engineering Culture & Architecture"
        description="Learn about Teciaura Technologies, our mission, core engineering standards, multi-AZ cloud architecture, and disciplined milestone delivery."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-electricBlue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-card font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>PRACTICE IDENTITY • NOIDA, INDIA & GLOBAL CLIENTS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology with Purpose.{' '}
              <span className="bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-white bg-clip-text text-transparent">
                Growth with Direction.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Metrics Strip (Instant Credibility) */}
      <section className="py-12 bg-[#050B17] border-b border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EngineeringMetricsStrip />
        </div>
      </section>

      {/* Company Story & Mission/Vision Section */}
      <section className="py-20 sm:py-24 bg-[#050B17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-cyanAccent font-mono">
                  Our Purpose
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Building Resilient Technology for Growing Businesses
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Teciaura Technologies brings together technology and digital growth services to help businesses establish a strong online presence, improve operations, and build scalable digital foundations.
              </p>
              <p className="text-base text-slate-400 leading-relaxed font-normal">
                In an era where technology choices can feel overwhelming, we champion practical engineering. We avoid overcomplicating systems for the sake of buzzwords and instead focus on what creates genuine, measurable operational stability and commercial clarity.
              </p>
            </div>

            {/* Mission & Vision Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Mission Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-electricBlue/50 hover:border-t-brand-cyanAccent/80 transition-all">
                <div className="flex items-center gap-2 text-brand-cyanAccent font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Accessible, Practical Technology
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  To make reliable technology and practical digital solutions accessible to growing businesses without prohibitive corporate complexity.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0B1528] to-[#071329] text-white border border-white/[0.10] border-t-white/[0.24] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.14)] hover:border-brand-electricBlue/60 hover:border-t-brand-cyanAccent/80 transition-all">
                <div className="flex items-center gap-2 text-brand-electricBlue font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  A Trusted Global Partner
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  To become a trusted technology and digital growth partner for startups and enterprises in India and internationally.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE ENGINEERING STACK MATRIX */}
      <section className="py-20 sm:py-24 bg-[#070F1E] border-y border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technical Standards"
            title="How We Engineer Modern Systems"
            description="Explore the standardized technology stacks, architectural blueprints, and reliability commitments powering our production deployments."
            align="center"
            className="mb-14"
          />

          <EngineeringStackMatrix />
        </div>
      </section>

      {/* How We Work Section (Operating Principles) */}
      <section className="py-20 sm:py-24 bg-[#050B17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How We Work"
            description="We begin by understanding the business problem, define a clear scope, deliver in structured milestones, and communicate throughout the project."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-electricBlue/50 hover:border-t-brand-cyanAccent/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-brand-cyanAccent mb-5 font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Problem-First Discovery
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Before writing any code or configuring servers, we dig into the specific operational bottleneck. We ensure technical solutions directly address business requirements.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-electricBlue/50 hover:border-t-brand-cyanAccent/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-brand-cyanAccent mb-5 font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Defined Scope & Milestones
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Every project is structured into clear phases with concrete deliverables. You know exactly what is being built, when it will be delivered, and how it will be verified.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-electricBlue/50 hover:border-t-brand-cyanAccent/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-brand-cyanAccent mb-5 font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Continuous Communication
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                No black-box handoffs. We maintain transparent status updates, staging review links, and clear documentation so your internal team is fully empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-24 bg-[#070F1E] border-t border-slate-800/80 relative">
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
                className="p-6 sm:p-7 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-electricBlue/50 hover:border-t-brand-cyanAccent/80 hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center mb-4">
                  {getValueIcon(val.title)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}

            {/* Join Our Team Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0B1528] to-[#0E1E38] border border-white/[0.10] border-t-white/[0.24] flex flex-col justify-between shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.14)] hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyanAccent/15 border border-brand-cyanAccent/30 text-xs font-semibold text-brand-cyanAccent font-mono mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-pulse" />
                  <span>Careers</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyanAccent transition-colors">
                  Join The Teciaura Team
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We are hiring engineers, cloud architects, and designers who thrive on high autonomy and shipping great products.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyanAccent group-hover:text-white transition-colors font-mono"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
    </div>
  );
};
