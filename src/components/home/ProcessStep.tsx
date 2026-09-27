import React from 'react';
import { Search, Compass, Hammer, Rocket } from 'lucide-react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  details?: string[];
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  details,
}) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-5 h-5 text-brand-cyanAccent" />;
      case '02':
        return <Compass className="w-5 h-5 text-brand-electricBlue" />;
      case '03':
        return <Hammer className="w-5 h-5 text-brand-cyanAccent" />;
      case '04':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Search className="w-5 h-5 text-brand-cyanAccent" />;
    }
  };

  return (
    <div className="relative flex flex-col h-full p-6 sm:p-7 rounded-3xl bg-[#0B1528]/80 border border-slate-800 shadow-card hover:border-brand-electricBlue/50 hover:shadow-glow-blue transition-all duration-300 group">
      {/* Top Number & Icon */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-electricBlue/50 transition-all">
            {getStepIcon(step)}
          </div>
          <span className="text-2xl font-extrabold font-mono text-white">
            {step}
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-brand-cyanAccent border border-slate-800 font-mono">
          Phase {step}
        </span>
      </div>

      {/* Step Title */}
      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Micro deliverables */}
      {details && details.length > 0 && (
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <ul className="space-y-1.5">
            {details.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
