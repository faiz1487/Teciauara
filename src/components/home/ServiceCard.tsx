import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Layout, Code2, TrendingUp, Share2, Wrench, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-electricBlue" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-cyanAccent" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-electricBlue" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-brand-cyanAccent" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-electricBlue" />;
      default:
        return <Cloud className="w-6 h-6 text-brand-cyanAccent" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl bg-[#0B1528]/80 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-brand-electricBlue/60 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      
      {/* Top subtle hover glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyanAccent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top: Icon container */}
        <div className="w-13 h-13 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:border-brand-electricBlue/50 group-hover:shadow-glow-cyan transition-all duration-300">
          {getIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-cyanAccent transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Deliverables snippet (first 3) */}
        <div className="mt-5 pt-4 border-t border-slate-800/80">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-2 font-mono">
            Key Scope Elements
          </p>
          <ul className="space-y-2">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent flex-shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Action Link */}
      <div className="mt-6 pt-4 border-t border-slate-800/60">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-electricBlue group-hover:text-brand-cyanAccent transition-colors"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
