import React, { useRef, useEffect } from 'react';
import { 
  Cloud, Cpu, Database, ShieldCheck, CheckCircle2, ArrowRight, 
  Terminal, Layers, Globe, Activity, Zap, Check, Lock, 
  Monitor, GitCommit, GitBranch, Play, Sparkles, Bot, 
  FileText, Compass, Server, Code2, Workflow, Box, ExternalLink
} from 'lucide-react';
import { 
  PremiumIconBadge, 
  PremiumCloudIcon, 
  PremiumCpuIcon, 
  PremiumDatabaseIcon, 
  PremiumGlobeIcon, 
  PremiumZapIcon, 
  PremiumShieldCheckIcon, 
  PremiumWorkflowIcon, 
  PremiumBoxIcon, 
  PremiumActivityIcon, 
  PremiumRocketIcon, 
  PremiumTerminalIcon, 
  PremiumLayersIcon 
} from '../common/PremiumIcons';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';

interface PortfolioShowcaseSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioShowcaseSection: React.FC<PortfolioShowcaseSectionProps> = ({ onSelectProject }) => {
  const intervixaVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = intervixaVideoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    // Viewport-aware playback: stream and play only when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: '150px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#050B17] relative overflow-hidden">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute top-1/4 -right-36 w-[500px] h-[500px] bg-brand-cyanAccent/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-36 w-[500px] h-[500px] bg-brand-electricBlue/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,200,232,0.035)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portfolio Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Selected Client Work</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Real Products. Measurable Results.
            </h2>

            {/* Supporting text */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Explore real-world software products, client portals, and cloud infrastructure engineered by Teciaura.
            </p>
          </div>

          <Button
            to="/portfolio"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="flex-shrink-0 self-start md:self-auto border-white/[0.12] hover:border-white/[0.24] bg-white/[0.04] hover:bg-white/[0.08] text-white"
          >
            View All Projects
          </Button>
        </div>

        {/* Vertical Case-Study Storytelling Cards */}
        <div className="space-y-12 lg:space-y-16">

          {/* ========================================================================= */}
          {/* FEATURED PROJECT — 01: Intervixa AI (First & Most Prominent)              */}
          {/* ========================================================================= */}
          <div 
            onClick={() => onSelectProject(PROJECTS_DATA[0])}
            className="group cursor-pointer rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] shadow-2xl transition-all duration-500 overflow-hidden relative min-h-[460px] lg:h-[480px] xl:h-[500px] flex flex-col justify-between"
          >
            {/* 1. Full-Bleed Video Background Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              {/* Fallback Base Poster Plate */}
              <img
                src="/intervixa-demo-poster.jpg"
                alt="Intervixa AI Demo Preview"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
              />

              <video
                ref={intervixaVideoRef}
                loop
                muted
                playsInline
                preload="metadata"
                poster="/intervixa-demo-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              >
                <source src="/intervixa-project-demo.mp4" type="video/mp4" />
              </video>

              {/* Refined gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050B17]/95 via-[#050B17]/55 via-35% md:via-[#050B17]/25 md:via-50% to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/95 via-[#050B17]/30 via-40% to-transparent z-10" />
            </div>

            {/* Top Bar: Clean badges on left & right */}
            <div className="relative z-20 p-6 sm:p-8 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium border border-white/[0.1] shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Featured Project
              </span>

              <a
                href="https://intervixa.online"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md border border-white/[0.12] hover:border-white/[0.25] text-xs text-slate-200 hover:text-white transition-all duration-200 cursor-pointer"
                title="Open intervixa.online in new tab"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Live Demo</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 group-hover/demo:text-white transition-colors font-medium">intervixa.online</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Bottom Content Area: Minimal & clean so video stays prominent */}
            <div className="relative z-20 p-6 sm:p-8 pt-0 max-w-xl">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors duration-200 drop-shadow-md">
                  Intervixa AI
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  AI-Powered Career Intelligence Platform
                </p>
              </div>

              {/* Tech Badges (Core 4 only) */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                {['Next.js', 'FastAPI', 'OpenAI API', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-0.5 rounded-md bg-[#050B17]/80 backdrop-blur-md border border-white/[0.08] text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Minimal CTA Link */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white/70 group-hover:text-white" />
                </button>
                <span className="text-[11px] text-slate-500 font-medium">
                  Featured Platform
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 02: AWS Infrastructure Automation                                 */}
          {/* ========================================================================= */}
          <div 
            onClick={() => onSelectProject(PROJECTS_DATA[1])}
            className="group cursor-pointer rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] shadow-xl transition-all duration-300 overflow-hidden relative min-h-[440px] lg:h-[460px] xl:h-[480px] flex flex-col lg:flex-row"
          >
            {/* Left Column: Premium Glass Information Panel */}
            <div className="w-full lg:w-[46%] xl:w-[44%] p-7 sm:p-9 lg:p-11 flex flex-col justify-between z-20 relative bg-[#070C18]/90">
              <div>
                {/* Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/[0.08]">
                    Cloud & DevOps
                  </span>
                  <span className="text-xs text-slate-500">
                    Production Architecture
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors duration-200">
                  AWS Infrastructure Automation
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Scalable AWS infrastructure automated with Terraform, containerized workloads and managed cloud services.
                </p>

                {/* Technology Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['AWS', 'Terraform', 'Amazon ECS', 'Docker', 'Amazon RDS', 'CloudWatch'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white/70 group-hover:text-white" />
                </button>
                <span className="text-[11px] text-slate-500 font-medium">
                  IaC Architecture
                </span>
              </div>
            </div>

            {/* Right Column: AWS Architecture / Infrastructure Visual */}
            <div className="w-full lg:w-[54%] xl:w-[56%] bg-[#030814] border-t lg:border-t-0 lg:border-l border-slate-800/80 p-4 sm:p-6 lg:p-7 relative overflow-hidden flex flex-col justify-between group-hover:bg-[#030917] transition-colors duration-500">
              {/* Terminal Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-300 font-semibold ml-1.5 flex items-center gap-1.5">
                    <PremiumTerminalIcon className="w-4 h-4 text-slate-400" />
                    aws-production-vpc.tf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Multi-AZ Mesh
                  </span>
                </div>
              </div>

              {/* AWS Multi-Tier Cloud Architecture Layout */}
              <div className="relative z-10 my-auto py-4 space-y-3 transform group-hover:scale-[1.01] transition-transform duration-500 ease-out">
                {/* Tier 1: Ingress Layer */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-slate-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="cyan" size="sm">
                      <PremiumCloudIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">AWS Application Load Balancer</div>
                      <div className="text-[11px] text-slate-400">Strict TLS 1.3 • Multi-AZ Public Ingress Subnets</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Managed
                  </span>
                </div>

                {/* Tier 2: Compute Layer */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-slate-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="blue" size="sm">
                      <PremiumCpuIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Amazon ECS Fargate Cluster</div>
                      <div className="text-[11px] text-slate-400">Stateless Containers • Isolated Private Subnets</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Auto-Scaling
                  </span>
                </div>

                {/* Tier 3: Database Layer */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-slate-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="indigo" size="sm">
                      <PremiumDatabaseIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Amazon RDS PostgreSQL</div>
                      <div className="text-[11px] text-slate-400">Multi-AZ Standby Sync • Encrypted Automated Snapshots</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Encrypted
                  </span>
                </div>
              </div>

              {/* Bottom Visual Strip */}
              <div className="relative z-10 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <PremiumShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                  <span>Terraform State Lock • Zero Configuration Drift</span>
                </div>
                <span className="text-emerald-400 font-semibold">AWS Architecture</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 03: Document / Microservices Deployment                           */}
          {/* ========================================================================= */}
          <div 
            onClick={() => onSelectProject(PROJECTS_DATA[2])}
            className="group cursor-pointer rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] shadow-xl transition-all duration-300 overflow-hidden relative min-h-[440px] lg:h-[460px] xl:h-[480px] flex flex-col lg:flex-row"
          >
            {/* Left Column: Premium Glass Information Panel */}
            <div className="w-full lg:w-[46%] xl:w-[44%] p-7 sm:p-9 lg:p-11 flex flex-col justify-between z-20 relative bg-[#070C18]/90">
              <div>
                {/* Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/[0.08]">
                    Backend & Cloud
                  </span>
                  <span className="text-xs text-slate-500">
                    Microservices Mesh
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors duration-200">
                  Document / Microservices Deployment
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Containerized document-processing architecture using asynchronous services, cloud storage and managed databases.
                </p>

                {/* Technology Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'Node.js', 'Redis', 'PostgreSQL', 'Nginx'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white/70 group-hover:text-white" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  MICROSERVICE MESH
                </span>
              </div>
            </div>

            {/* Right Column: Clean Microservices Architecture Visual */}
            <div className="w-full lg:w-[54%] xl:w-[56%] bg-[#030814] border-t lg:border-t-0 lg:border-l border-slate-800/80 p-4 sm:p-6 lg:p-7 relative overflow-hidden flex flex-col justify-between group-hover:bg-[#030917] transition-colors duration-500">
              {/* Background ambient glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Terminal Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-300 font-semibold ml-1.5 flex items-center gap-1.5">
                    <PremiumLayersIcon className="w-4 h-4 text-indigo-400" />
                    k8s-microservices-mesh.yaml
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Service Mesh
                  </span>
                </div>
              </div>

              {/* Service Mesh Pipeline & Flow */}
              <div className="relative z-10 my-auto py-4 space-y-3 transform group-hover:scale-[1.01] transition-transform duration-500 ease-out">
                {/* Node 1: Ingress Gateway */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-indigo-500/40 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="indigo" size="sm">
                      <PremiumGlobeIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Nginx API Ingress Gateway</div>
                      <div className="text-[11px] text-slate-400">Reverse Proxy Routing • Document API Endpoints</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Ingress
                  </span>
                </div>

                {/* Node 2: Asynchronous Queue Worker */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-slate-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="cyan" size="sm">
                      <PremiumZapIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Redis Queue & Worker Cluster</div>
                      <div className="text-[11px] text-slate-400">Decoupled Asynchronous Processing • Node.js Workers</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Async
                  </span>
                </div>

                {/* Node 3: Storage & Database Tier */}
                <div className="p-3.5 rounded-2xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-emerald-500/40 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBadge variant="emerald" size="sm">
                      <PremiumDatabaseIcon className="w-5 h-5" />
                    </PremiumIconBadge>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">PostgreSQL & Cloud Storage</div>
                      <div className="text-[11px] text-slate-400">Persistent Metadata • Encrypted Document Storage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Persistent
                  </span>
                </div>
              </div>

              {/* Bottom Visual Strip */}
              <div className="relative z-10 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <PremiumActivityIcon className="w-4 h-4 text-emerald-400" />
                  <span>Health Check Endpoints • Resilient Worker Recovery</span>
                </div>
                <span className="text-indigo-400 font-semibold">Containerized Services</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 04: CI/CD Pipeline Automation                                     */}
          {/* ========================================================================= */}
          <div 
            onClick={() => onSelectProject(PROJECTS_DATA[3])}
            className="group cursor-pointer rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] shadow-xl transition-all duration-300 overflow-hidden relative min-h-[440px] lg:h-[460px] xl:h-[480px] flex flex-col lg:flex-row"
          >
            {/* Left Column: Premium Glass Information Panel */}
            <div className="w-full lg:w-[46%] xl:w-[44%] p-7 sm:p-9 lg:p-11 flex flex-col justify-between z-20 relative bg-[#070C18]/90">
              <div>
                {/* Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/[0.08]">
                    DevOps & Automation
                  </span>
                  <span className="text-xs text-slate-500">
                    GitOps Workflows
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors duration-200">
                  CI/CD Pipeline Automation
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Automated build, testing, security checks and deployment workflows for modern applications.
                </p>

                {/* Technology Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['GitHub Actions', 'Jenkins', 'Docker', 'Terraform', 'ArgoCD', 'Bash'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-white/70 group-hover:text-white" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  GITOPS WORKFLOW
                </span>
              </div>
            </div>

            {/* Right Column: Jenkins / CI-CD Pipeline Visual */}
            <div className="w-full lg:w-[54%] xl:w-[56%] bg-[#030814] border-t lg:border-t-0 lg:border-l border-slate-800/80 p-4 sm:p-6 lg:p-7 relative overflow-hidden flex flex-col justify-between group-hover:bg-[#030917] transition-colors duration-500">
              {/* Background ambient glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pipeline Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-300 font-semibold ml-1.5 flex items-center gap-1.5">
                    <PremiumWorkflowIcon className="w-4 h-4 text-emerald-400" />
                    jenkins-cicd-pipeline.groovy
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Pipeline Succeeded
                  </span>
                </div>
              </div>

              {/* 5-Stage Multi-Conduit Pipeline Flow */}
              <div className="relative z-10 my-auto py-4 space-y-2.5 transform group-hover:scale-[1.01] transition-transform duration-500 ease-out">
                {[
                  { stage: '1. Checkout & SAST', desc: 'Static Code & Vulnerability Scan', icon: PremiumShieldCheckIcon, variant: 'emerald' as const, status: 'Verified' },
                  { stage: '2. Automated Tests', desc: 'Unit, Component & Integration Suites', icon: PremiumActivityIcon, variant: 'cyan' as const, status: 'Passed' },
                  { stage: '3. Docker Build', desc: 'Multi-Stage Build & Layer Cache', icon: PremiumBoxIcon, variant: 'blue' as const, status: 'Packaged' },
                  { stage: '4. Production Rollout', desc: 'ArgoCD Zero-Downtime Deployment', icon: PremiumRocketIcon, variant: 'indigo' as const, status: 'Active' },
                ].map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div 
                      key={step.stage} 
                      className="p-3 rounded-xl bg-[#09152B]/95 border border-slate-800/90 group-hover:border-emerald-500/40 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <PremiumIconBadge variant={step.variant} size="sm">
                          <StepIcon className="w-4 h-4" />
                        </PremiumIconBadge>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">{step.stage}</div>
                          <div className="text-[11px] text-slate-400">{step.desc}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                          {step.status}
                        </span>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Visual Strip */}
              <div className="relative z-10 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <GitCommit className="w-3.5 h-3.5 text-slate-400" />
                  <span>Version Control: <strong className="text-white">Git-Managed</strong> (Main Branch)</span>
                </div>
                <span className="text-emerald-400 font-semibold">Zero-Downtime Rollout</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-9 rounded-[28px] bg-gradient-to-r from-[#09152B] via-[#0B1A38] to-[#071328] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a bespoke technical blueprint for your infrastructure?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We design and implement custom cloud, web, and automation architectures tailored to your exact stack requirements.
            </p>
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="flex-shrink-0"
          >
            Start a Technical Discussion
          </Button>
        </div>

      </div>
    </section>
  );
};
