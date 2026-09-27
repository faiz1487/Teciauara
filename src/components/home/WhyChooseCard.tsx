import React from 'react';
import { Target, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ title, description, icon, index }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Target':
        return <Target className="w-6 h-6 text-brand-cyanAccent" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-electricBlue" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-electricBlue" />;
      default:
        return <Target className="w-6 h-6 text-brand-cyanAccent" />;
    }
  };

  return (
    <div className="relative p-6 sm:p-7 rounded-3xl bg-[#0B1528]/80 border border-slate-800 shadow-card hover:shadow-glow-blue hover:border-brand-electricBlue/50 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-cyanAccent/50 transition-all">
          {getIcon()}
        </div>
        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
        {title}
      </h3>

      <p className="mt-2.5 text-sm text-slate-400 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
};
