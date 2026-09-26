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
        return <Target className="w-6 h-6 text-brand-electricBlue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-electricBlue" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-electricBlue" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-electricBlue" />;
      default:
        return <Target className="w-6 h-6 text-brand-electricBlue" />;
    }
  };

  return (
    <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card hover:border-brand-electricBlue/30 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center">
          {getIcon()}
        </div>
        <span className="text-xs font-mono font-bold text-brand-mutedText/70">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-lg font-bold text-brand-primaryNavy tracking-tight">
        {title}
      </h3>

      <p className="mt-2.5 text-sm text-brand-bodyText leading-relaxed">
        {description}
      </p>
    </div>
  );
};
