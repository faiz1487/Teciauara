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
      title: 'Honest, Right-Sized Engineering',
      description: 'We never push bloated frameworks or expensive cloud add-ons when a simpler, faster solution does the job better. We treat your budget like our own.',
      takeaways: ['No unnecessary server costs', 'Clean, maintainable codebases', 'Focus on real business ROI'],
      icon: PremiumTargetIcon,
      variant: 'cyan' as const,
      highlightColor: 'from-amber-400 to-amber-200'
    },
    {
      number: '02',
      title: 'Zero-Stress, Direct Communication',
      description: 'You get a shared WhatsApp or Slack channel directly with your developer. Fast answers, weekly video staging walkthroughs, and clear sprint milestones.',
      takeaways: ['Weekly live video demos', 'Direct developer access', 'No non-technical middlemen'],
      icon: PremiumShieldCheckIcon,
      variant: 'blue' as const,
      highlightColor: 'from-emerald-400 to-teal-300'
    },
    {
      number: '03',
      title: 'Built for Real Commercial Growth',
      description: 'We architect systems designed to expand gracefully — from your first 100 users to high-volume spikes without needing an expensive emergency rewrite.',
      takeaways: ['High-speed performance', 'Automated daily backups', 'Seamless cloud scalability'],
      icon: PremiumTrendingIcon,
      variant: 'indigo' as const,
      highlightColor: 'from-blue-400 to-indigo-300'
    },
    {
      number: '04',
      title: 'We Don\'t Disappear After Launch',
      description: 'Launching is just Day 1. We stick around to help you monitor performance, patch security dependencies, and roll out new features as your company expands.',
      takeaways: ['100% Code ownership from Day 1', 'Rapid SLA response times', 'Dedicated long-term care'],
      icon: PremiumLayersIcon,
      variant: 'emerald' as const,
      highlightColor: 'from-purple-400 to-pink-300'
    }
  ];

  return (
    <section className="py-24 bg-[#060B15] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Statement (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>The Teciaura Difference</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              How working with us feels refreshingly different.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Most clients come to us after being disappointed by slow agencies, confusing invoices, or disappearing contractors. We built Teciaura to be the transparent engineering partner we would want to hire ourselves.
            </p>

            {/* Core Commitments Box */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 font-normal text-sm text-slate-300">
              <div className="text-xs font-semibold text-white uppercase tracking-wider pb-2 border-b border-white/[0.06]">
                Our Promises To Every Client
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct engineer collaboration (no non-technical middlemen)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Weekly live video demos &amp; staging links</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% code &amp; repository ownership from Day 1</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Honest advice on what NOT to waste budget on</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-white hover:bg-slate-100 text-slate-950 font-semibold border-white shadow-sm"
              >
                Schedule a 20-Min Conversation
              </Button>
            </div>
          </div>

          {/* Right Column: Connected Value Pillars (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3.5">
                      <PremiumIconBadge variant={pillar.variant} size="md">
                        <Icon className="w-5 h-5" />
                      </PremiumIconBadge>
                      <div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                          Principle {pillar.number}
                        </div>
                        <h3 className="text-lg font-bold text-white transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Takeaways */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {pillar.takeaways.map((item, tIdx) => (
                      <span 
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
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
