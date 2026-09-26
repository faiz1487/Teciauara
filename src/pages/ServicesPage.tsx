import React from 'react';
import { ArrowRight, CheckCircle2, Cloud, Layout, Code2, TrendingUp, Share2, Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA } from '../data/services';

export const ServicesPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-8 h-8 text-brand-electricBlue" />;
      case 'Layout':
        return <Layout className="w-8 h-8 text-brand-electricBlue" />;
      case 'Code2':
        return <Code2 className="w-8 h-8 text-brand-electricBlue" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-brand-electricBlue" />;
      case 'Share2':
        return <Share2 className="w-8 h-8 text-brand-electricBlue" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-brand-electricBlue" />;
      default:
        return <Cloud className="w-8 h-8 text-brand-electricBlue" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Services & Capabilities"
        description="From your first website to cloud infrastructure and ongoing technical support, Teciaura Technologies provides practical services for businesses at every stage."
      />

      {/* Hero Section */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-4 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
              <span>Full-Cycle Technology Offerings</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primaryNavy tracking-tight leading-tight">
              Technology and Digital Services Built Around Your Business.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-brand-bodyText leading-relaxed">
              From your first website to cloud infrastructure and ongoing technical support, Teciaura Technologies provides practical services for businesses at every stage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
      <section id="service-list" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Service Overview (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-brand-lightBg border border-brand-border flex items-center justify-center shadow-subtle">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-mutedText">
                          Service 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primaryNavy tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-brand-bodyText leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features / Operational approach */}
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primaryNavy">
                        Operational Approach
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-sm text-brand-bodyText">
                            <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primaryNavy mb-2">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((target, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-brand-lightBg border border-brand-border text-xs font-medium text-brand-primaryNavy"
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
                  <div className="lg:col-span-5 bg-brand-lightBg rounded-2xl p-6 sm:p-7 border border-brand-border">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-brand-border">
                      <ShieldCheck className="w-5 h-5 text-brand-electricBlue" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primaryNavy">
                        Included Deliverables
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-sm text-brand-secondaryNavy">
                          <span className="w-2 h-2 rounded-full bg-brand-cyanAccent flex-shrink-0 mt-2" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-brand-border/80">
                      <p className="text-[11px] text-brand-mutedText leading-relaxed">
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
    </>
  );
};
