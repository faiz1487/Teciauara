import React from 'react';
import { ArrowRight, CheckCircle2, Cloud, Layout, Code2, TrendingUp, Share2, Wrench, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA } from '../data/services';

export const ServicesPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-8 h-8 text-brand-cyanAccent" />;
      case 'Layout':
        return <Layout className="w-8 h-8 text-brand-electricBlue" />;
      case 'Code2':
        return <Code2 className="w-8 h-8 text-brand-cyanAccent" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-brand-electricBlue" />;
      case 'Share2':
        return <Share2 className="w-8 h-8 text-brand-cyanAccent" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-brand-electricBlue" />;
      default:
        return <Cloud className="w-8 h-8 text-brand-cyanAccent" />;
    }
  };

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Services & Capabilities"
        description="From your first website to cloud infrastructure and ongoing technical support, Teciaura Technologies provides practical services for businesses at every stage."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Services' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-card font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>Full-Cycle Technology Offerings</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology and Digital Services Built Around Your Business.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From your first website to cloud infrastructure and ongoing technical support, Teciaura Technologies provides practical services for businesses at every stage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Service Proposal
              </Button>
              <Button
                href="#service-list"
                variant="secondary"
                size="md"
              >
                Browse All 6 Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections List */}
      <section id="service-list" className="py-24 bg-[#050B17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#0B1528]/85 border border-slate-800 shadow-card hover:border-brand-electricBlue/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  
                  {/* Service Overview (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-card">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Features / Operational approach */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent font-mono">
                        Operational Approach
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent mb-2.5 font-mono">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((target, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-200"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </div>

                  {/* Service Deliverables Checklist Card (5 cols) */}
                  <div className="lg:col-span-5 bg-[#070F1E] rounded-2xl p-6 sm:p-8 border border-slate-800">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                      <ShieldCheck className="w-5 h-5 text-brand-cyanAccent" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        Included Deliverables
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-brand-cyanAccent flex-shrink-0 mt-2" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                        Deliverables are custom-scoped per engagement during our collaborative discovery and planning phase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Consultation CTA */}
      <CTASection
        headline="Need a Tailored Combination of Services?"
        text="Many businesses require both cloud modernization and web application development. Let’s structure a unified scope that meets your goals."
        buttonText="Book a Technical Consultation"
        buttonTo="/contact"
      />
    </div>
  );
};
