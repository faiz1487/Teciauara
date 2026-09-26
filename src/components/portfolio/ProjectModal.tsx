import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-primaryNavy/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-elevated border border-brand-border overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-brand-border bg-brand-lightBg/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/10 text-brand-electricBlue border border-brand-electricBlue/20">
                {project.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                {project.type} Project
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-primaryNavy">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-brand-border flex items-center justify-center text-slate-500 hover:text-brand-primaryNavy transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Note Banner */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200/80 text-xs sm:text-sm text-brand-secondaryNavy flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Reference Specification: </span>
              This project represents a validated technical architecture blueprint engineered by Teciaura Technologies to demonstrate implementation approach and stack modularity.
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primaryNavy mb-2">
              Architecture Overview
            </h3>
            <p className="text-sm sm:text-base text-brand-bodyText leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Common Bottleneck</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-bodyText leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-bodyText leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primaryNavy mb-3">
              Included Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-bodyText">
                  <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          {project.architecturePoints && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primaryNavy mb-3">
                Key Technical Highlights
              </h3>
              <ul className="space-y-2">
                {project.architecturePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-bodyText">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primaryNavy mb-2.5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-brand-lightBg border border-brand-border text-xs font-mono font-medium text-brand-primaryNavy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 border-t border-brand-border bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-mutedText text-center sm:text-left">
            Interested in deploying a similar architecture for your business?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
              onClick={onClose}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
