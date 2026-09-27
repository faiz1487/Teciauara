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
    <section className="bg-[#070F1E] border-y border-slate-800/80 py-10 sm:py-12 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(22,119,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {COMPANY_INFO.valueStrip.map((item, index) => (
            <div 
              key={item.title} 
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B1528]/85 border border-slate-800 hover:border-brand-electricBlue/50 shadow-card hover:shadow-glow-blue transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-brand-electricBlue/50 transition-all">
                {icons[index % icons.length]}
              </div>
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
