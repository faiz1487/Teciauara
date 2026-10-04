import React, { useState, useEffect } from 'react';
import { 
  Cloud, Cpu, ShieldCheck, Zap, Activity, 
  GitBranch, Server, Sparkles, CheckCircle2
} from 'lucide-react';

export const HeroTechVisual: React.FC = () => {
  const [latency, setLatency] = useState(14);
  const [throughput, setThroughput] = useState(2840);

  // Micro-fluctuations for authentic live telemetry feel
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const val = prev + delta;
        return val >= 12 && val <= 20 ? val : 14;
      });
      setThroughput(prev => prev + Math.floor(Math.random() * 11) - 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none py-2 lg:py-6">
      {/* Layered Atmospheric Glows */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand-electricBlue/20 via-brand-cyanAccent/15 to-indigo-600/10 rounded-full blur-3xl -z-10 animate-ambient-halo" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyanAccent/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

      {/* Main Composition Container */}
      <div className="relative w-full aspect-[5/4] sm:aspect-square max-w-[540px] mx-auto flex items-center justify-center">
        
        {/* Subtle Tech Coordinate Grid Circle */}
        <div className="absolute inset-2 sm:inset-4 rounded-full border border-slate-800/80 bg-[radial-gradient(rgba(22,119,255,0.12)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none opacity-50" />

        {/* Outer Orbital Ring with Slow Rotation */}
        <div className="absolute inset-6 sm:inset-8 rounded-full border border-slate-800 pointer-events-none animate-[spin_80s_linear_infinite]">
          {/* Subtle Orbit Markers */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-cyanAccent shadow-[0_0_12px_rgba(0,200,232,0.9)]" />
          <div className="absolute -bottom-1.5 right-1/3 w-2.5 h-2.5 rounded-full bg-brand-electricBlue shadow-[0_0_10px_rgba(22,119,255,0.8)]" />
        </div>

        {/* Secondary Thin Orbital Ring */}
        <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-slate-700/40 pointer-events-none animate-[spin_55s_linear_infinite_reverse]" />

        {/* Laser Flux Lines Connecting Central Monolith to Satellites */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="laserBeamTop" x1="50%" y1="50%" x2="82%" y2="24%">
              <stop offset="0%" stopColor="#00C8E8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1677FF" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="laserBeamBottom" x1="50%" y1="50%" x2="20%" y2="76%">
              <stop offset="0%" stopColor="#1677FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00C8E8" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          <line x1="50%" y1="50%" x2="80%" y2="22%" stroke="url(#laserBeamTop)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50%" y1="50%" x2="20%" y2="76%" stroke="url(#laserBeamBottom)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* Central Architectural Glass Monolith */}
        <div className="relative z-10 w-64 sm:w-72 rounded-3xl bg-gradient-to-b from-[#0C1B38] via-[#09152C] to-[#050D1C] border border-brand-electricBlue/40 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 hover:border-brand-cyanAccent/70 hover:shadow-[0_0_35px_rgba(0,200,232,0.25)]">
          
          {/* Subtle Top Glowing Rim */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyanAccent to-transparent opacity-80" />

          {/* Monolith Header */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-700/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-electricBlue/20 border border-brand-electricBlue/40 flex items-center justify-center text-brand-cyanAccent">
                <Cpu className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">
                  Teciaura Core Engine
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  v2.6 Enterprise
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Monolith Metrics Display */}
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-black/40 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Edge Latency</span>
                <span className="text-brand-cyanAccent font-mono font-bold">{latency}ms (Global)</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-cyanAccent to-brand-electricBlue rounded-full" style={{ width: `${latency * 4}%` }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-[10px] text-slate-400">THROUGHPUT</div>
                <div className="text-xs font-bold text-white mt-0.5">{throughput.toLocaleString()} req/s</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-[10px] text-slate-400">SLA UPTIME</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">99.99%</div>
              </div>
            </div>
          </div>

          {/* Monolith Status Footer */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyanAccent" />
              Multi-AZ Redundant
            </span>
            <span className="text-slate-500">us-east-1</span>
          </div>
        </div>

        {/* Satellite 1: Top Right (Cloud & DevOps Architecture) */}
        <div className="absolute top-2 right-0 sm:-right-4 z-20 p-3.5 rounded-2xl bg-[#09152C]/95 border border-slate-700/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-brand-cyanAccent/80 animate-float-slow">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-electricBlue/20 border border-brand-electricBlue/40 flex items-center justify-center text-brand-cyanAccent">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">AWS Cloud Mesh</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-cyanAccent/20 text-brand-cyanAccent font-mono font-bold">
                  Terraform IaC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">Auto-Scaling • Zero Drift</p>
            </div>
          </div>
        </div>

        {/* Satellite 2: Bottom Left (AI & Intelligent Automation) */}
        <div className="absolute bottom-4 left-0 sm:-left-4 z-20 p-3.5 rounded-2xl bg-[#09152C]/95 border border-slate-700/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-indigo-400/80 animate-float-delayed">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Intelligent AI Mesh</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-bold">
                  LLM RAG
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">Autonomous Workflows</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
