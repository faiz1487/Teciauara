import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Sparkles, Zap, Shield, Cpu } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { SERVICES_DATA } from '../data/services';
import { 
  PremiumIconBadge, 
  PremiumCloudIcon, 
  PremiumGlobeIcon, 
  PremiumWorkflowIcon, 
  PremiumCpuIcon, 
  PremiumZapIcon, 
  PremiumShieldCheckIcon 
} from '../components/common/PremiumIcons';

export const ServicesPage: React.FC = () => {
  const getServiceVisuals = (serviceId: string) => {
    switch (serviceId) {
      case 'cloud-devops':
        return {
          icon: <PremiumCloudIcon className="w-8 h-8" />,
          variant: 'cyan' as const,
          categoryTag: 'INFRASTRUCTURE & DEVOPS',
          sla: '99.9% Production SLA • Automated Zero-Downtime Deployments',
        };
      case 'website-development':
        return {
          icon: <PremiumGlobeIcon className="w-8 h-8" />,
          variant: 'blue' as const,
          categoryTag: 'HIGH-PERFORMANCE FRONTEND',
          sla: 'Sub-Second FCP • 100/100 Core Web Vitals Performance',
        };
      case 'software-app-development':
        return {
          icon: <PremiumWorkflowIcon className="w-8 h-8" />,
          variant: 'indigo' as const,
          categoryTag: 'CUSTOM SAAS & MICROSERVICES',
          sla: 'Modular Component Architecture • Documented OpenAPI Endpoints',
        };
      case 'ai-intelligent-automation':
        return {
          icon: <PremiumCpuIcon className="w-8 h-8" />,
          variant: 'purple' as const,
          categoryTag: 'INTELLIGENT AGENTS & RAG PIPELINES',
          sla: 'Low-Latency Telemetry • Enterprise RAG Guardrails & Privacy',
        };
      case 'digital-marketing-seo':
        return {
          icon: <PremiumZapIcon className="w-8 h-8" />,
          variant: 'amber' as const,
          categoryTag: 'TECHNICAL SEARCH ENGINE ARCHITECTURE',
          sla: 'Verified Crawlability • Commercial Intent Indexation Roadmap',
        };
      case 'it-support-maintenance':
        return {
          icon: <PremiumShieldCheckIcon className="w-8 h-8" />,
          variant: 'emerald' as const,
          categoryTag: 'SYSTEM CONTINUITY & HARDENING',
          sla: '24/7 Monitoring • Proactive Security Hardening & Rapid Triage',
        };
      default:
        return {
          icon: <PremiumCloudIcon className="w-8 h-8" />,
          variant: 'cyan' as const,
          categoryTag: 'ENTERPRISE CAPABILITY',
          sla: 'Engineered for Performance, Security & Scale',
        };
    }
  };

  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Services & Capabilities | Teciaura Technologies"
        description="Explore production-ready engineering capabilities across cloud infrastructure, DevOps automation, bespoke software, high-performance web applications, and autonomous AI systems."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        {/* Ambient tech lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-electricBlue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,200,232,0.035)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Services' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full-Cycle Engineering Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineering capabilities built for speed, scale, and reliability.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From automated cloud infrastructure and high-performance web platforms to autonomous AI workflows, we engineer production-ready systems tailored to ambitious businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-white text-slate-950 hover:bg-slate-100 font-semibold"
              >
                Request a Service Proposal
              </Button>
              <Button
                href="#service-list"
                variant="secondary"
                size="md"
                className="border-white/[0.12] hover:bg-white/[0.06] text-white"
              >
                Browse All 6 Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections List */}
      <section id="service-list" className="py-20 lg:py-24 bg-[#050B17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Quick Jump Navigation Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mr-2 flex-shrink-0 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-cyanAccent" />
              Jump To Capability:
            </span>
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-[#0B1A38] border border-slate-800 hover:border-brand-cyanAccent/50 text-xs font-mono text-slate-300 hover:text-brand-cyanAccent transition-all flex-shrink-0"
              >
                {service.title}
              </a>
            ))}
          </div>

          {/* Service Cards */}
          {SERVICES_DATA.map((service, index) => {
            const visuals = getServiceVisuals(service.id);

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative scroll-mt-28 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
                  
                  {/* Service Overview (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-start gap-4">
                      {/* Premium Custom SVG Badge */}
                      <PremiumIconBadge size="lg" variant={visuals.variant} className="mt-0.5">
                        {visuals.icon}
                      </PremiumIconBadge>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                            Service 0{index + 1}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">
                            {visuals.categoryTag}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Operational Approach / Standards */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Operational Approach & Engineering Standards
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For Target */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 font-mono">
                        Ideal For Workload Profile:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((target, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-[#050B17] border border-slate-700/80 text-xs font-mono text-slate-300"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inquire CTA */}
                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm"
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </div>

                  {/* Technical Deliverables Blueprint Card (5 cols) */}
                  <div className="lg:col-span-5 bg-white/[0.02] rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between space-y-5">
                    <div>
                      {/* Deliverables Header */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] text-xs">
                        <span className="flex items-center gap-2 font-semibold text-white tracking-wider uppercase">
                          <ShieldCheck className="w-4 h-4 text-slate-400" />
                          Technical Deliverables
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Spec Ready
                        </span>
                      </div>

                      {/* Deliverables Items */}
                      <ul className="space-y-2.5 mt-4">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            <span className="text-xs font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SLA / Quality Guarantee Note */}
                    <div className="pt-4 border-t border-white/[0.08] bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.06]">
                      <div className="text-[11px] text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        SLA & Architectural Standard
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {visuals.sla}
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
        text="Many modern enterprises require synchronized cloud infrastructure, automated CI/CD pipelines, and high-performance software. Let’s architect a unified scope tailored to your business."
        buttonText="Book Technical Consultation"
        buttonTo="/contact"
      />
    </div>
  );
};
