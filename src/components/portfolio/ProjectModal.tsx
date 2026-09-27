import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1528] shadow-elevated border border-slate-700 overflow-hidden z-10 max-h-[90vh] flex flex-col text-white">
        
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-800 bg-[#070F1E] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent border border-brand-electricBlue/30">
                {project.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {project.type} Project
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Note Banner */}
          <div className="p-4 rounded-xl bg-brand-electricBlue/10 border border-brand-electricBlue/30 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Reference Specification: </span>
              This project represents a validated technical architecture blueprint engineered by Teciaura Technologies to demonstrate implementation approach and stack modularity.
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent mb-2 font-mono">
              Architecture Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.fullOverview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Common Bottleneck</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent mb-3 font-mono">
              Included Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          {project.architecturePoints && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent mb-3 font-mono">
                Key Technical Highlights
              </h3>
              <ul className="space-y-2">
                {project.architecturePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent mb-2.5 font-mono">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-brand-cyanAccent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 border-t border-slate-800 bg-[#070F1E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
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
