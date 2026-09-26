import React from 'react';
import { ArrowRight, Cpu, Layers, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative flex flex-col justify-between h-full rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card-hover hover:border-brand-electricBlue/40 transition-all duration-300 overflow-hidden">
      
      {/* Top Graphic Header */}
      <div className="relative h-44 bg-gradient-to-br from-brand-primaryNavy via-brand-secondaryNavy to-slate-900 p-5 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(22,119,255,0.2)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        
        {/* Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/30 text-brand-cyanAccent border border-brand-electricBlue/40">
            {project.category}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/20">
            {project.type} Specification
          </span>
        </div>

        {/* Abstract blueprint schematic icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-brand-cyanAccent">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono text-slate-300 truncate max-w-[180px]">
              teciaura//{project.id}
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
            Verified Stack
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-brand-primaryNavy group-hover:text-brand-electricBlue transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-brand-bodyText leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-4 pt-4 border-t border-brand-border/60">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-brand-mutedText mb-2">
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-brand-lightBg border border-brand-border text-[11px] font-mono text-brand-primaryNavy font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-brand-mutedText">
                  +{project.technologies.length - 4}
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
            onClick={() => onSelect(project)}
            className="w-full justify-center group-hover:border-brand-electricBlue/50 group-hover:text-brand-electricBlue"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            View Project Details
          </Button>
        </div>
      </div>
    </div>
  );
};
