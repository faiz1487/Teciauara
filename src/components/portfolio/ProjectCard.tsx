import React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';
import { 
  PremiumIconBadge, 
  PremiumCloudIcon, 
  PremiumWorkflowIcon, 
  PremiumCpuIcon, 
  PremiumTerminalIcon 
} from '../common/PremiumIcons';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getProjectVisuals = (projectId: string) => {
    switch (projectId) {
      case 'intervixa-ai-platform':
        return {
          icon: <PremiumCpuIcon className="w-5 h-5" />,
          variant: 'purple' as const,
          statusText: 'In-House Live Product',
          statusColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
          isLive: true,
          liveUrl: 'https://intervixa.online',
        };
      case 'aws-infrastructure-automation':
        return {
          icon: <PremiumCloudIcon className="w-5 h-5" />,
          variant: 'cyan' as const,
          statusText: 'Multi-AZ IaC Blueprint',
          statusColor: 'text-brand-cyanAccent bg-cyan-950/60 border-cyan-500/30',
          isLive: false,
        };
      case 'dockerized-microservices-deployment':
        return {
          icon: <PremiumWorkflowIcon className="w-5 h-5" />,
          variant: 'indigo' as const,
          statusText: 'Decoupled Service Mesh',
          statusColor: 'text-indigo-300 bg-indigo-950/60 border-indigo-500/30',
          isLive: false,
        };
      case 'ci-cd-pipeline-automation':
        return {
          icon: <PremiumTerminalIcon className="w-5 h-5" />,
          variant: 'emerald' as const,
          statusText: 'Zero-Downtime Pipeline',
          statusColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30',
          isLive: false,
        };
      default:
        return {
          icon: <PremiumCloudIcon className="w-5 h-5" />,
          variant: 'cyan' as const,
          statusText: 'Verified Specification',
          statusColor: 'text-brand-cyanAccent bg-cyan-950/60 border-cyan-500/30',
          isLive: false,
        };
    }
  };

  const visuals = getProjectVisuals(project.id);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div 
      tabIndex={0}
      role="button"
      aria-label={`View architecture details for ${project.title}`}
      onKeyDown={handleKeyDown}
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#081326]/90 border border-white/[0.08] border-t-white/[0.24] shadow-[0_16px_45px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:shadow-[0_0_45px_rgba(0,200,232,0.22)] hover:border-brand-cyanAccent/60 hover:border-t-brand-cyanAccent/80 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden backdrop-blur-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
    >
      {/* Specular laser highlight line on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyanAccent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
      
      {/* Top Graphic Header */}
      <div className="relative h-44 bg-gradient-to-br from-[#060F1F] via-[#091730] to-[#050D1C] p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,200,232,0.12)_1px,transparent_1px)] [background-size:18px_18px] opacity-40 pointer-events-none" />
        
        {/* Badges Row */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-cyanAccent/10 text-brand-cyanAccent border border-brand-cyanAccent/30">
            {project.category}
          </span>
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1.5 ${visuals.statusColor}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {visuals.statusText}
          </span>
        </div>

        {/* Abstract blueprint schematic row */}
        <div className="relative z-10 flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <PremiumIconBadge size="sm" variant={visuals.variant}>
              {visuals.icon}
            </PremiumIconBadge>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block truncate max-w-[170px]">
                teciaura//{project.id}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                {project.type}
              </span>
            </div>
          </div>

          {visuals.isLive && visuals.liveUrl && (
            <a
              href={visuals.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-400 hover:text-white transition-all shadow-sm"
              title="Open live website"
            >
              <span>Live Site</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-white group-hover:text-brand-cyanAccent transition-colors duration-200 tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-4 pt-4 border-t border-slate-800/80">
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-2 font-mono">
              Verified Stack Standard
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-[#050D1C] border border-slate-700/80 text-[11px] font-mono text-brand-cyanAccent font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded-md bg-[#050D1C] border border-slate-800 text-[10px] font-mono text-slate-400">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-6 pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="w-full justify-center group-hover:border-brand-cyanAccent/60 group-hover:bg-[#0B1A38] group-hover:text-white font-mono text-xs"
            icon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
          >
            Explore Architecture
          </Button>
        </div>
      </div>
    </div>
  );
};
