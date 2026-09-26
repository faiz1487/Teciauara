import React from 'react';
import { Cpu, Target, Layers, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const ValueStrip: React.FC = () => {
  const icons = [
    <Cpu className="w-5 h-5 text-brand-electricBlue" />,
    <Target className="w-5 h-5 text-brand-cyanAccent" />,
    <Layers className="w-5 h-5 text-brand-electricBlue" />,
    <Headphones className="w-5 h-5 text-brand-cyanAccent" />,
  ];

  return (
    <section className="bg-brand-lightBg border-y border-brand-border py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INFO.valueStrip.map((item, index) => (
            <div 
              key={item.title} 
              className="flex items-start gap-4 p-4 rounded-xl bg-white border border-brand-border/70 shadow-subtle hover:shadow-card transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-lightBg border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                {icons[index % icons.length]}
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-primaryNavy tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-bodyText mt-1 leading-relaxed">
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
