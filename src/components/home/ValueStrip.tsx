import React from 'react';
import { 
  PremiumIconBadge, 
  PremiumCpuIcon, 
  PremiumTargetIcon, 
  PremiumLayersIcon, 
  PremiumSupportIcon 
} from '../common/PremiumIcons';
import { COMPANY_INFO } from '../../data/companyInfo';
import { useInView } from '../../hooks/useInView';

export const ValueStrip: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  const badgeIcons = [
    <PremiumIconBadge key="cpu" variant="blue" size="md">
      <PremiumCpuIcon className="w-5 h-5" />
    </PremiumIconBadge>,
    <PremiumIconBadge key="target" variant="cyan" size="md">
      <PremiumTargetIcon className="w-5 h-5" />
    </PremiumIconBadge>,
    <PremiumIconBadge key="layers" variant="indigo" size="md">
      <PremiumLayersIcon className="w-5 h-5" />
    </PremiumIconBadge>,
    <PremiumIconBadge key="support" variant="emerald" size="md">
      <PremiumSupportIcon className="w-5 h-5" />
    </PremiumIconBadge>,
  ];

  return (
    <section ref={ref} className="bg-[#070D1A] border-y border-white/[0.06] py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {COMPANY_INFO.valueStrip.map((item, index) => (
            <div 
              key={item.title} 
              className={`flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300 group scroll-reveal ${
                isInView ? 'is-visible' : ''
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {badgeIcons[index % badgeIcons.length]}
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
