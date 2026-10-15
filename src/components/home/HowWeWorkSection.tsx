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
      title: 'Discovery & Scope',
      subtitle: 'Clear Alignment Upfront',
      description: 'We dig deep into your product vision, commercial goals, and technical requirements to create an honest scope and transparent fixed-price proposal.',
      details: ['Technical requirements definition', 'Architecture recommendations', 'Fixed roadmap & milestones'],
      icon: PremiumCompassIcon,
      variant: 'cyan' as const,
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      subtitle: 'Modern UI & Clean Foundations',
      description: 'We draft high-fidelity UI designs and engineer clean database schemas and APIs before writing production code.',
      details: ['Responsive UI/UX design', 'Database & API specifications', 'Design system setup'],
      icon: PremiumCpuIcon,
      variant: 'blue' as const,
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Sprints & Live Demos',
      subtitle: 'Weekly Working Progress',
      description: 'We ship code in rapid 1-2 week sprints. You get weekly video walkthroughs and live staging access to test features in real-time.',
      details: ['Weekly video walkthroughs', 'Interactive staging environments', 'Direct WhatsApp & Slack channel'],
      icon: PremiumRocketIcon,
      variant: 'indigo' as const,
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Launch & Handoff',
      subtitle: 'Zero-Downtime & Long-Term Care',
      description: 'Production cutover with zero downtime, full code repository transfer, domain setup, and ongoing maintenance support.',
      details: ['Zero-downtime deployment', '100% Code & IP ownership', 'Ongoing updates & maintenance'],
      icon: PremiumGaugeIcon,
      variant: 'emerald' as const,
      tag: 'Step 4'
    }
  ];

  return (
    <section className="py-24 bg-[#070D1A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Process"
          title="How We Collaborate & Ship"
          description="A transparent, collaborative workflow designed for fast momentum, clear weekly milestones, and zero surprises."
          align="center"
        />

        {/* Progress Connector Lines */}
        <div className="relative mt-16">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-white/[0.06] -z-0">
            <div 
              className="h-full bg-white/[0.3] transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-white/[0.05] border-white/[0.2] shadow-xl -translate-y-1'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04]'
                  }`}
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all ${
                        isSelected
                          ? 'bg-white text-slate-950'
                          : 'bg-white/[0.04] border border-white/[0.08] text-slate-400'
                      }`}>
                        {item.step}
                      </div>

                      <PremiumIconBadge variant={item.variant} size="sm">
                        <Icon className="w-4 h-4" />
                      </PremiumIconBadge>
                    </div>

                    <div className="text-[11px] font-medium text-slate-400 mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-lg font-bold text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Step details checklist */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span>Milestone-Driven</span>
                    <span className="text-white font-medium">{item.tag}</span>
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
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white"
          >
            Start With a Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};
