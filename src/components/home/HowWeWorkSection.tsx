import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { 
  PremiumCompassIcon, 
  PremiumCpuIcon, 
  PremiumRocketIcon, 
  PremiumGaugeIcon,
  PremiumIconBadge
} from '../common/PremiumIcons';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const HowWeWorkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Technical & Commercial Discovery',
      description: 'Deep dive into your technical vision, commercial objectives, user expectations, and architectural constraints through a structured intake.',
      details: ['Technical requirements intake', 'System & security discovery', 'Feasibility roadmap & scoping'],
      icon: PremiumCompassIcon,
      variant: 'cyan' as const,
      tag: 'Phase 1'
    },
    {
      step: '02',
      title: 'Design & Architect',
      subtitle: 'Systems & UI Architecture',
      description: 'Blueprint scalable system designs, design tokens, data models, and resilient cloud topographies before writing production code.',
      details: ['High-availability blueprints', 'UI/UX design & design systems', 'IaC & database schema planning'],
      icon: PremiumCpuIcon,
      variant: 'blue' as const,
      tag: 'Phase 2'
    },
    {
      step: '03',
      title: 'Build & Launch',
      subtitle: 'Agile Engineering & Cutover',
      description: 'Agile engineering sprints with automated CI/CD pipelines, containerized builds, rigorous QA, and zero-downtime production cutover.',
      details: ['Iterative sprint delivery', 'Automated QA & regression testing', 'Zero-downtime production cutover'],
      icon: PremiumRocketIcon,
      variant: 'indigo' as const,
      tag: 'Phase 3'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      subtitle: 'Continuous Telemetry & SLA',
      description: 'Continuous telemetry monitoring, cloud cost right-sizing, search performance improvements, and SLA support for seamless stability.',
      details: ['Observability & APM telemetry', 'Performance & resource tuning', 'Continuous engineering & support'],
      icon: PremiumGaugeIcon,
      variant: 'emerald' as const,
      tag: 'Phase 4'
    }
  ];

  return (
    <section className="py-24 bg-[#070F1E] border-y border-slate-800/80 relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-cyanAccent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Predictable Delivery Methodology"
          title="How We Work"
          description="Our structured four-phase engineering framework ensures architectural clarity, transparent progress, and dependable execution at every stage."
          align="center"
        />

        {/* Progress Connector Lines: Desktop Horizontal + Mobile/Tablet Vertical */}
        <div className="relative mt-16">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-slate-800 -z-0">
            <div 
              className="h-full bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-brand-cyanAccent transition-all duration-500 shadow-[0_0_12px_rgba(0,200,232,0.8)]"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Mobile & Tablet Vertical Connecting Line */}
          <div className="lg:hidden absolute top-10 bottom-10 left-9 w-0.5 bg-slate-800/80 -z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0E1E3C] to-[#071328] border-brand-cyanAccent/80 border-t-cyan-300 shadow-glow-cyan -translate-y-2'
                      : 'bg-[#09152C]/80 border-white/[0.08] border-t-white/[0.22] shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-brand-cyanAccent/50 hover:bg-[#09152C]'
                  }`}
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-base transition-all ${
                        isSelected
                          ? 'bg-gradient-to-tr from-brand-electricBlue to-brand-cyanAccent text-white shadow-glow-blue'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-brand-cyanAccent'
                      }`}>
                        {item.step}
                      </div>

                      <PremiumIconBadge variant={item.variant} size="sm">
                        <Icon className="w-5 h-5" />
                      </PremiumIconBadge>
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-wider text-brand-cyanAccent font-bold mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Step details checklist */}
                    <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isSelected ? 'text-brand-cyanAccent' : 'text-emerald-400'
                          }`} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>STATUS: DEPENDABLE</span>
                    <span className="text-brand-cyanAccent font-bold">READY</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Phase 01: Discover
          </Button>
        </div>

      </div>
    </section>
  );
};
