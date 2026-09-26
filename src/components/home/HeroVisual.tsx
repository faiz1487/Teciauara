import React from 'react';
import { Cloud, Server, Database, ShieldCheck, Cpu, GitBranch, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* Subtle Glow Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-electricBlue/20 via-brand-cyanAccent/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Console Container */}
      <div className="relative rounded-2xl bg-brand-primaryNavy/95 border border-brand-electricBlue/30 shadow-elevated p-5 sm:p-6 backdrop-blur-xl text-white overflow-hidden">
        
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

        {/* Console Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 font-medium">teciaura-cloud-arch // v2.4</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Systems Optimal</span>
          </div>
        </div>

        {/* Central Architecture Flow Diagram */}
        <div className="space-y-3.5 relative z-10">
          
          {/* Node 1: Cloud & DevOps Cluster */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-brand-electricBlue/50 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-electricBlue/20 border border-brand-electricBlue/40 flex items-center justify-center text-brand-cyanAccent">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Cloud Infrastructure</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-electricBlue/30 text-brand-cyanAccent font-mono">AWS</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Terraform IaC • Multi-AZ VPC • Automated Scaling</div>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            </div>
          </div>

          {/* Connected Flow Line */}
          <div className="flex justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-brand-electricBlue to-brand-cyanAccent opacity-70" />
          </div>

          {/* Node 2: CI/CD Pipeline & Containers */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-brand-cyanAccent/50 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-cyanAccent/20 border border-brand-cyanAccent/40 flex items-center justify-center text-brand-cyanAccent">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>CI/CD Automated Pipeline</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">Passing</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Lint • Build • Test • Docker Staging • Production</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-brand-cyanAccent">0m 42s</span>
            </div>
          </div>

          {/* Connected Flow Line */}
          <div className="flex justify-center -my-1">
            <div className="w-0.5 h-3 bg-gradient-to-b from-brand-cyanAccent to-brand-electricBlue opacity-70" />
          </div>

          {/* Node 3: Web & App Platform */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-brand-electricBlue/50 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Modern Web Platform</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/30 text-indigo-200 font-mono">Edge CDN</span>
                  </div>
                  <div className="text-[11px] text-slate-400">React Frontend • REST/GraphQL APIs • Responsive</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">200 OK</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-4 pt-3.5 border-t border-slate-700/60 grid grid-cols-3 gap-2 text-center relative z-10">
          <div className="p-2 rounded-lg bg-slate-900/60">
            <div className="text-[10px] text-slate-400 font-medium">Delivery Model</div>
            <div className="text-xs font-bold text-white mt-0.5">Milestone-Based</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/60">
            <div className="text-[10px] text-slate-400 font-medium">Architecture</div>
            <div className="text-xs font-bold text-brand-cyanAccent mt-0.5">Cloud-Native</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/60">
            <div className="text-[10px] text-slate-400 font-medium">Stack Focus</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5">Reliable & Lean</div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top Right */}
      <div className="hidden sm:flex absolute -top-4 -right-4 bg-white text-brand-primaryNavy px-3.5 py-2 rounded-xl shadow-lg border border-brand-border items-center gap-2 z-20 animate-bounce duration-1000">
        <div className="w-6 h-6 rounded-md bg-brand-electricBlue/10 text-brand-electricBlue flex items-center justify-center">
          <Cpu className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-brand-primaryNavy leading-tight">Fast & Scalable</p>
          <p className="text-[9px] text-brand-mutedText">Modern Engineering</p>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left */}
      <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white text-brand-primaryNavy px-3.5 py-2 rounded-xl shadow-lg border border-brand-border items-center gap-2 z-20">
        <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-brand-primaryNavy leading-tight">Production Ready</p>
          <p className="text-[9px] text-brand-mutedText">Clear Milestones</p>
        </div>
      </div>
    </div>
  );
};
