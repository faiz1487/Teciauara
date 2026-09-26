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
  isLast = false,
}) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-5 h-5 text-brand-electricBlue" />;
      case '02':
        return <Compass className="w-5 h-5 text-brand-cyanAccent" />;
      case '03':
        return <Hammer className="w-5 h-5 text-brand-electricBlue" />;
      case '04':
        return <Rocket className="w-5 h-5 text-emerald-500" />;
      default:
        return <Search className="w-5 h-5 text-brand-electricBlue" />;
    }
  };

  return (
    <div className="relative flex flex-col h-full p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-subtle hover:border-brand-electricBlue/30 hover:shadow-card transition-all duration-200">
      {/* Top Number & Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center">
            {getStepIcon(step)}
          </div>
          <span className="text-xl font-extrabold font-mono text-brand-primaryNavy">
            {step}
          </span>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-lightBg text-brand-mutedText border border-brand-border">
          Phase {step}
        </span>
      </div>

      {/* Step Title */}
      <h3 className="text-lg font-bold text-brand-primaryNavy tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-brand-bodyText leading-relaxed flex-grow">
        {description}
      </p>

      {/* Micro deliverables */}
      {details && details.length > 0 && (
        <div className="mt-4 pt-3.5 border-t border-brand-border/60">
          <ul className="space-y-1">
            {details.map((item, idx) => (
              <li key={idx} className="text-xs text-brand-mutedText flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-electricBlue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
