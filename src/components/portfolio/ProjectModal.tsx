import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, ExternalLink, Terminal, Layers, Server, GitBranch } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';
import { 
  PremiumIconBadge, 
  PremiumCloudIcon, 
  PremiumWorkflowIcon, 
  PremiumCpuIcon, 
  PremiumTerminalIcon 
} from '../common/PremiumIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Auto-focus close button for screen reader & keyboard navigation
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getModalVisuals = (projectId: string) => {
    switch (projectId) {
      case 'intervixa-ai-platform':
        return {
          icon: <PremiumCpuIcon className="w-6 h-6" />,
          variant: 'purple' as const,
          categoryBadge: 'In-House AI Product',
          asciiTopology: `[Client Browser] 
    │ (Next.js 15 App Router / HTTPS)
    ▼
[FastAPI Asynchronous Gateway]
    ├── [OpenAI Agent Engine (Prompt Pipelines)]
    ├── [Prisma ORM Caching Layer]
    └── [PostgreSQL Relational Evaluation DB]`,
        };
      case 'aws-infrastructure-automation':
        return {
          icon: <PremiumCloudIcon className="w-6 h-6" />,
          variant: 'cyan' as const,
          categoryBadge: 'Multi-AZ IaC Blueprint',
          asciiTopology: `[Internet Gateway / Route 53]
    │ (Dual-AZ Failover)
    ▼
[Application Load Balancer (SSL Termination)]
    │
    ▼
[Private Subnets: ECS Fargate Container Mesh]
    │
    ▼
[Isolated Database Subnet: Amazon RDS Multi-AZ]`,
        };
      case 'dockerized-microservices-deployment':
        return {
          icon: <PremiumWorkflowIcon className="w-6 h-6" />,
          variant: 'indigo' as const,
          categoryBadge: 'Decoupled Service Mesh',
          asciiTopology: `[Inbound Traffic] ──▶ [Nginx Reverse Proxy]
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
[User-Facing API]               [Async Queue (Redis)]
          │                               │
          ▼                               ▼
[PostgreSQL Database]           [Background Workers Pool]`,
        };
      case 'ci-cd-pipeline-automation':
        return {
          icon: <PremiumTerminalIcon className="w-6 h-6" />,
          variant: 'emerald' as const,
          categoryBadge: 'Zero-Downtime Delivery',
          asciiTopology: `[git push: feature-branch]
    ├── [Stage 1: Lint & Security SAST Scan]
    ├── [Stage 2: Parallelized Unit & Integration Tests]
    ├── [Stage 3: Multi-Stage Docker Image Build & Push]
    └── [Stage 4: Automated Canary Rollout & Health Check]`,
        };
      default:
        return {
          icon: <PremiumCloudIcon className="w-6 h-6" />,
          variant: 'cyan' as const,
          categoryBadge: 'Enterprise Architecture',
          asciiTopology: `[Client Request] ──▶ [API Gateway] ──▶ [Services Mesh] ──▶ [Storage]`,
        };
    }
  };

  const visuals = getModalVisuals(project.id);

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#070C18] shadow-2xl border border-white/[0.12] overflow-hidden z-10 max-h-[90vh] flex flex-col text-white my-auto">

        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-white/[0.08] bg-[#060B15] flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <PremiumIconBadge size="md" variant={visuals.variant} className="mt-1">
              {visuals.icon}
            </PremiumIconBadge>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  {project.category}
                </span>
                <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.02] text-slate-400 border border-white/[0.06]">
                  {visuals.categoryBadge}
                </span>
              </div>
              <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors focus:outline-none flex-shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Intervixa Demo Video (If Project 01) */}
          {project.id === 'intervixa-ai-platform' && (
            <div className="space-y-3">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-brand-cyanAccent/40 bg-black shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  poster="/intervixa-demo-poster.jpg"
                >
                  <source src="/intervixa-project-demo.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Platform Video Walkthrough
                </span>
                <a
                  href="https://intervixa.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Launch Live Platform (intervixa.online)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Interactive Topology Box (For Infrastructure & DevOps Blueprints) */}
          {project.id !== 'intervixa-ai-platform' && visuals.asciiTopology && (
            <div className="p-4 rounded-2xl bg-[#040A14] border border-slate-800/90 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  ARCHITECTURE TOPOLOGY
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERIFIED DESIGN
                </span>
              </div>
              <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed p-1 select-all font-mono">
                {visuals.asciiTopology}
              </pre>
            </div>
          )}

          {/* Architecture Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              Architecture Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.fullOverview}
            </p>
          </div>

          {/* Problem & Engineered Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <ShieldAlert className="w-4 h-4" />
                <span>Common Bottleneck</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Included Deliverables & Artifacts
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          {project.architecturePoints && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Technical Highlights & SLA Benchmarks
              </h3>
              <ul className="space-y-2">
                {project.architecturePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Technology Stack Standard
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 border-t border-white/[0.08] bg-[#060B15] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Interested in deploying a similar architecture?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              to={`/contact?project=${encodeURIComponent(project.title)}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold text-xs bg-white text-slate-950 hover:bg-slate-100"
              onClick={onClose}
            >
              Discuss Technical Scope
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
