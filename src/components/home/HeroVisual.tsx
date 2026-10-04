import React, { useState, useEffect } from 'react';
import { 
  Cloud, Server, GitBranch, Cpu, ShieldCheck, 
  Play, RefreshCw, Check
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'pipeline' | 'telemetry'>('architecture');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [latency, setLatency] = useState(18);

  // Micro-fluctuation for real-time telemetry feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next >= 14 && next <= 24 ? next : 18;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Pipeline simulation sequence
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    const step1 = setTimeout(() => setSimStep(2), 700);
    const step2 = setTimeout(() => setSimStep(3), 1500);
    const step3 = setTimeout(() => setSimStep(4), 2200);
    const step4 = setTimeout(() => {
      setSimStep(5);
      setTimeout(() => {
        setIsSimulating(false);
        setSimStep(0);
      }, 2000);
    }, 3000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none animate-dashboard-float">
      {/* Dynamic Animated Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-electricBlue/25 via-brand-cyanAccent/20 to-brand-primaryNavy/10 rounded-3xl blur-2xl -z-10 animate-ambient-halo" />

      {/* Main Glassmorphic Console Container */}
      <div className="relative rounded-3xl bg-brand-primaryNavy/95 border border-brand-electricBlue/35 shadow-elevated p-5 sm:p-6 backdrop-blur-xl text-white overflow-hidden transition-all duration-300 hover:border-brand-electricBlue/60">
        
        {/* Slow Animated Scanning Radar Line */}
        <div className="absolute inset-x-0 h-16 -top-16 bg-gradient-to-b from-transparent via-brand-cyanAccent/10 to-transparent pointer-events-none animate-radar-scan z-10" />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-20 pointer-events-none" />

        {/* Console Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-700/70 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm" />
            <img src="/teciaura-icon.png" alt="TA" className="w-4 h-4 object-contain inline-block ml-1 opacity-90" />
            <span className="text-xs font-mono text-slate-300 font-semibold tracking-wide">
              teciaura-sys // v2.6
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-700/80 text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
                activeTab === 'architecture'
                  ? 'bg-brand-electricBlue text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Arch
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
                activeTab === 'pipeline'
                  ? 'bg-brand-electricBlue text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CI/CD
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
                activeTab === 'telemetry'
                  ? 'bg-brand-electricBlue text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Telemetry
            </button>
          </div>
        </div>

        {/* TAB 1: ARCHITECTURE VIEW */}
        {activeTab === 'architecture' && (
          <div className="space-y-3.5 relative z-10 animate-in fade-in duration-200">
            
            {/* Node 1: Cloud & DevOps Cluster */}
            <div className="group/node p-3.5 rounded-xl bg-slate-900/85 border border-slate-700/90 hover:border-brand-electricBlue/80 hover:bg-slate-900/95 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(22,119,255,0.25)] shadow-subtle cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-electricBlue/20 border border-brand-electricBlue/40 flex items-center justify-center text-brand-cyanAccent group-hover/node:scale-105 group-hover/node:border-brand-electricBlue transition-all duration-300">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>AWS Cloud Infrastructure</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-electricBlue/30 text-brand-cyanAccent font-mono">
                        Multi-AZ
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Terraform IaC • Isolated Subnets • Auto-Scaling
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Healthy</span>
                </div>
              </div>
            </div>

            {/* Connecting Flow Line with Animated Energy Beam */}
            <div className="flex justify-center -my-1 relative overflow-hidden h-4">
              <div className="w-0.5 h-full bg-slate-700/80 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-cyanAccent via-brand-electricBlue to-brand-cyanAccent animate-energy-flow" />
              </div>
            </div>

            {/* Node 2: Containerized Workload & Microservices */}
            <div className="group/node p-3.5 rounded-xl bg-slate-900/85 border border-slate-700/90 hover:border-brand-cyanAccent/80 hover:bg-slate-900/95 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,200,232,0.22)] shadow-subtle cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyanAccent/20 border border-brand-cyanAccent/40 flex items-center justify-center text-brand-cyanAccent group-hover/node:scale-105 group-hover/node:border-brand-cyanAccent transition-all duration-300">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Dockerized Services</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        v2.4.0
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Stateless Workers • Redis Queue • Zero-Downtime
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-brand-cyanAccent bg-brand-cyanAccent/10 px-2 py-0.5 rounded border border-brand-cyanAccent/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-pulse" />
                  <span>4 Pods Active</span>
                </span>
              </div>
            </div>

            {/* Connecting Flow Line with Animated Energy Beam */}
            <div className="flex justify-center -my-1 relative overflow-hidden h-4">
              <div className="w-0.5 h-full bg-slate-700/80 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-electricBlue via-brand-cyanAccent to-brand-electricBlue animate-energy-flow" />
              </div>
            </div>

            {/* Node 3: Edge Web & App Layer */}
            <div className="group/node p-3.5 rounded-xl bg-slate-900/85 border border-slate-700/90 hover:border-brand-electricBlue/80 hover:bg-slate-900/95 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(22,119,255,0.25)] shadow-subtle cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 group-hover/node:scale-105 group-hover/node:border-indigo-400 transition-all duration-300">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Edge Web Application</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-200 font-mono">
                        CDN Routed
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      React + TypeScript • Sub-Second FCP • SEO Ready
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>200 OK</span>
                </span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CI/CD PIPELINE VIEW (With Interactive Simulation!) */}
        {activeTab === 'pipeline' && (
          <div className="space-y-3 relative z-10 animate-in fade-in duration-200">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white">Automated Deployment Workflow</span>
                <p className="text-[11px] text-slate-400">Triggered via GitHub Actions / Webhooks</p>
              </div>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-electricBlue hover:bg-brand-electricHover text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Test Deploy</span>
                  </>
                )}
              </button>
            </div>

            {/* Pipeline Steps Tracker */}
            <div className="space-y-2">
              {[
                { step: 1, label: 'Lint & Static Analysis', tool: 'Oxlint / ESLint', time: '0.4s' },
                { step: 2, label: 'Unit & Contract Tests', tool: 'Jest / Vitest', time: '1.2s' },
                { step: 3, label: 'Multi-Stage Docker Build', tool: 'Alpine / Distroless', time: '2.8s' },
                { step: 4, label: 'AWS Staging Rollout', tool: 'ECS Task Definition', time: '1.1s' },
                { step: 5, label: 'Edge Health Verification', tool: 'Smoke Test Suite', time: '0.3s' },
              ].map((item) => {
                const isPassed = !isSimulating || simStep >= item.step;
                const isCurrent = isSimulating && simStep === item.step;

                return (
                  <div
                    key={item.step}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs ${
                      isCurrent
                        ? 'bg-brand-electricBlue/20 border-brand-electricBlue text-white shadow-glow-blue'
                        : isPassed
                        ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                        : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isCurrent
                          ? 'bg-brand-electricBlue text-white animate-spin'
                          : isPassed
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                        {isPassed && !isCurrent ? <Check className="w-3 h-3" /> : item.step}
                      </div>
                      <div>
                        <span className="font-semibold">{item.label}</span>
                        <span className="text-[10px] text-slate-400 ml-2 font-mono">({item.tool})</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-brand-cyanAccent">{item.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: TELEMETRY & LIVE PERFORMANCE */}
        {activeTab === 'telemetry' && (
          <div className="space-y-3 relative z-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-brand-cyanAccent/50 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-subtle">
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">
                  Edge Response Latency
                </span>
                <div className="text-xl font-extrabold text-brand-cyanAccent font-mono mt-1 flex items-baseline gap-1">
                  <span>{latency}</span>
                  <span className="text-xs font-normal text-slate-400">ms</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-cyanAccent h-full w-[88%] rounded-full animate-pulse" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/50 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-subtle">
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">
                  Uptime Availability
                </span>
                <div className="text-xl font-extrabold text-emerald-400 font-mono mt-1">
                  99.98%
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[99%] rounded-full" />
                </div>
              </div>
            </div>

            {/* Live Infrastructure Indicators */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors duration-300">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Load Balancer Routing</span>
                <span className="text-emerald-400 font-mono">Weighted Round-Robin</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Database Storage Tier</span>
                <span className="text-slate-200 font-mono">Encrypted AWS RDS Multi-AZ</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">SSL / TLS Encryption</span>
                <span className="text-brand-cyanAccent font-mono">TLS 1.3 Strict</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Interactive Ticker & Live Metrics Bar */}
        <div className="mt-4 pt-3.5 border-t border-slate-700/70 grid grid-cols-3 gap-2 text-center relative z-10">
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5">
            <div className="text-[10px] text-slate-400 font-medium">Delivery Model</div>
            <div className="text-xs font-bold text-white mt-0.5">Milestone-Based</div>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5">
            <div className="text-[10px] text-slate-400 font-medium">Architecture</div>
            <div className="text-xs font-bold text-brand-cyanAccent mt-0.5">Cloud-Native</div>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5">
            <div className="text-[10px] text-slate-400 font-medium">Production Care</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5">Zero-Downtime</div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top Right (Float animation) */}
      <div className="hidden sm:flex absolute -top-5 -right-4 bg-white/95 backdrop-blur-md text-brand-primaryNavy px-4 py-2.5 rounded-2xl shadow-elevated border border-brand-border items-center gap-2.5 z-20 animate-float-slow">
        <div className="w-8 h-8 rounded-xl bg-brand-electricBlue/10 text-brand-electricBlue flex items-center justify-center shadow-subtle">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-primaryNavy leading-tight">Scalable Systems</p>
          <p className="text-[10px] text-brand-mutedText">Built for Real Workloads</p>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left (Delayed float animation) */}
      <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md text-brand-primaryNavy px-4 py-2.5 rounded-2xl shadow-elevated border border-brand-border items-center gap-2.5 z-20 animate-float-delayed">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-subtle">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-primaryNavy leading-tight">Automated Deploy</p>
          <p className="text-[10px] text-brand-mutedText">Clear Delivery Gates</p>
        </div>
      </div>
    </div>
  );
};
