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
        return <Cloud className="w-6 h-6 text-brand-electricBlue" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-electricBlue" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-electricBlue" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-electricBlue" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-brand-electricBlue" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-electricBlue" />;
      default:
        return <Cloud className="w-6 h-6 text-brand-electricBlue" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card-hover hover:border-brand-electricBlue/40 transition-all duration-300">
      <div>
        {/* Top: Icon container */}
        <div className="w-12 h-12 rounded-xl bg-brand-lightBg border border-brand-border flex items-center justify-center mb-5 group-hover:bg-brand-electricBlue/10 group-hover:border-brand-electricBlue/30 transition-colors duration-200">
          {getIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-primaryNavy group-hover:text-brand-electricBlue transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-brand-bodyText leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Deliverables snippet (first 3) */}
        <div className="mt-5 pt-4 border-t border-brand-border/60">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-brand-mutedText mb-2">
            Key Scope Elements
          </p>
          <ul className="space-y-1.5">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-brand-bodyText flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent flex-shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Action Link */}
      <div className="mt-6 pt-4">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-electricBlue group-hover:text-brand-electricHover transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
