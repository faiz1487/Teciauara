import React from 'react';
import { 
  ArrowRight, CheckCircle2, Sparkles, Terminal
} from 'lucide-react';
import { 
  PremiumTargetIcon, 
  PremiumShieldCheckIcon, 
  PremiumTrendingIcon, 
  PremiumLayersIcon,
  PremiumIconBadge
} from '../common/PremiumIcons';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyInfo';

export const TeciauraDifference: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Practical Engineering',
      description: 'We focus on solutions that solve genuine business bottlenecks without pushing bloated frameworks or unnecessary cloud services.',
      takeaways: ['Right-sized architectures', 'Zero gratuitous complexity', 'Measurable business ROI'],
      icon: PremiumTargetIcon,
      variant: 'cyan' as const,
      highlightColor: 'from-brand-cyanAccent to-brand-electricBlue'
    },
    {
      number: '02',
      title: 'Reliable, Transparent Delivery',
      description: 'Clear sprint cadence, defined milestone roadmaps, and direct engineer communication so you always know exactly where your project stands.',
      takeaways: ['Weekly staging demos', 'Fixed-scope predictability', 'Direct Slack/Teams channel access'],
      icon: PremiumShieldCheckIcon,
      variant: 'blue' as const,
      highlightColor: 'from-brand-electricBlue to-indigo-500'
    },
    {
      number: '03',
      title: 'Scalable Digital Foundations',
      description: 'We architect systems designed to expand gracefully — from your first 1,000 users to high-concurrency production spikes without rewrite.',
      takeaways: ['Multi-AZ auto-scaling', 'Stateless container services', 'Decoupled caching layers'],
      icon: PremiumTrendingIcon,
      variant: 'indigo' as const,
      highlightColor: 'from-indigo-500 to-emerald-400'
    },
    {
      number: '04',
      title: 'Unified Technology Partner',
      description: 'Access cloud architecture, frontend design, custom software engineering, and technical SEO through one accountable, multidisciplinary team.',
      takeaways: ['Single point of ownership', 'Continuous SLA maintenance', 'End-to-end lifecycle care'],
      icon: PremiumLayersIcon,
      variant: 'emerald' as const,
      highlightColor: 'from-emerald-400 to-brand-cyanAccent'
    }
  ];

  return (
    <section className="py-24 bg-[#070F1E] border-y border-slate-800/80 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-brand-electricBlue/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Statement (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-brand-electricBlue/40 text-xs font-semibold text-brand-cyanAccent font-mono shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>THE TECIAURA DIFFERENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Built for What Comes Next —{' '}
              <span className="bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-white bg-clip-text text-transparent">
                Without the Bloat.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We bridge the gap between technical complexity and real commercial impact through disciplined engineering, clear milestones, and zero architectural debt.
            </p>

            {/* Core Commitments Box */}
            <div className="p-5 rounded-2xl bg-[#0B1528]/90 border border-slate-800 space-y-3 font-normal text-sm text-slate-300">
              <div className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 pb-2 border-b border-slate-800">
                Our Operating Commitments
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct engineer collaboration (no sales layers)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent flex-shrink-0" />
                <span>100% code ownership & open standard stacks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0" />
                <span>Documented IaC blueprints & handover</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow-blue"
              >
                Start an Architecture Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Connected Value Pillars (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative rounded-3xl bg-[#09152C]/80 border border-slate-800 p-6 sm:p-8 hover:border-brand-electricBlue/60 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle hover gradient indicator */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <PremiumIconBadge variant={pillar.variant} size="md">
                        <Icon className="w-6 h-6" />
                      </PremiumIconBadge>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                          Pillar {pillar.number}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Takeaways */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {pillar.takeaways.map((item, tIdx) => (
                      <span 
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
