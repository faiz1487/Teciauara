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
    <section ref={ref} className="bg-[#070F1E] border-y border-slate-800/80 py-10 sm:py-12 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(22,119,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {COMPANY_INFO.valueStrip.map((item, index) => (
            <div 
              key={item.title} 
              className={`flex items-start gap-4 p-5 rounded-2xl bg-[#0B1528]/85 border border-slate-800 hover:border-brand-electricBlue/50 shadow-card hover:shadow-glow-blue transition-all duration-300 group scroll-reveal ${
                isInView ? 'is-visible' : ''
              }`}
              style={{
                transitionDelay: `${index * 90}ms`,
              }}
            >
              {badgeIcons[index % badgeIcons.length]}
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
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
