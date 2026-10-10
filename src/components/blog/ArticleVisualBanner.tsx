import React from 'react';
import { 
  GitBranch, Cloud, Cpu, Layout, Search, Server, 
  Terminal, ShieldCheck, CheckCircle2, TrendingUp, Zap, Sparkles 
} from 'lucide-react';

interface ArticleVisualBannerProps {
  articleId: string;
  category: string;
  variant?: 'card' | 'hero';
}

export const ArticleVisualBanner: React.FC<ArticleVisualBannerProps> = ({ 
  articleId, 
  category, 
  variant = 'card' 
}) => {
  const isHero = variant === 'hero';

  // 1. DevOps & Unifying Culture
  if (articleId === 'what-is-devops-and-why-does-it-matter') {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#061022] via-[#081836] to-[#040C1A] border-b border-slate-800 ${
        isHero ? 'h-52 sm:h-64' : 'h-40'
      } flex items-center justify-center select-none`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyanAccent/10 rounded-full blur-2xl pointer-events-none" />

        {/* Vector DevOps Loop Graphic */}
        <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-xs mb-3">
            <span className="text-[10px] font-mono font-bold text-brand-cyanAccent bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              DEV (CODE • BUILD)
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-r from-brand-cyanAccent to-brand-electricBlue" />
            <span className="text-[10px] font-mono font-bold text-brand-electricBlue bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
              OPS (DEPLOY • MONITOR)
            </span>
          </div>

          {/* Infinity / Pipeline Nodes */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-200 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>git push</span>
            </div>
            <div className="w-3 h-0.5 bg-slate-600" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/60 border border-brand-electricBlue/40 text-xs font-mono text-cyan-300 shadow-sm">
              <Cloud className="w-3.5 h-3.5 text-brand-electricBlue" />
              <span>CI/CD Test</span>
            </div>
            <div className="w-3 h-0.5 bg-slate-600" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Live Multi-AZ</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Continuous Deployment Pipeline: Active • SLA 99.99%</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. AWS Cost Optimization
  if (articleId === 'aws-cost-optimization-practices-for-small-businesses') {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#051120] via-[#0A1B30] to-[#040E1B] border-b border-slate-800 ${
        isHero ? 'h-52 sm:h-64' : 'h-40'
      } flex items-center justify-center select-none`}>
        <div className="absolute inset-0 bg-[radial-gradient(#00C8E8_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <div className="absolute -left-10 top-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
          <div className="flex items-center gap-3 w-full max-w-xs justify-between mb-2.5">
            <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-left">
              <div className="text-[9px] font-mono text-slate-400 uppercase">Legacy x86 (t3)</div>
              <div className="text-xs font-mono font-bold text-rose-300">$142.50 /mo</div>
            </div>
            <div className="text-brand-cyanAccent font-mono text-xs font-bold">
              → 38% SAVINGS →
            </div>
            <div className="p-2 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-left">
              <div className="text-[9px] font-mono text-emerald-400 uppercase">Graviton (t4g)</div>
              <div className="text-xs font-mono font-bold text-emerald-300">$88.35 /mo</div>
            </div>
          </div>

          {/* Telemetry pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Orphan EBS Pruning & Auto-Scaling Active</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Mobile Friendly Website & Web Vitals
  if (articleId === 'why-every-business-needs-a-mobile-friendly-website') {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#081224] via-[#0E1A35] to-[#050C1A] border-b border-slate-800 ${
        isHero ? 'h-52 sm:h-64' : 'h-40'
      } flex items-center justify-center select-none`}>
        <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-center gap-6">
          {/* Mobile phone mockup silhouette */}
          <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl bg-[#030814] border-2 border-brand-cyanAccent/50 p-1.5 flex flex-col justify-between shadow-glow-blue">
            <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto" />
            <div className="space-y-1">
              <div className="h-2 w-10 bg-brand-cyanAccent/70 rounded" />
              <div className="h-1.5 w-14 bg-slate-700 rounded" />
              <div className="h-1.5 w-12 bg-slate-700 rounded" />
            </div>
            <div className="h-3 w-full bg-brand-electricBlue/40 rounded flex items-center justify-center text-[7px] font-mono text-cyan-200">
              FAST TAP
            </div>
          </div>

          {/* Core Web Vitals telemetry badge */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>LIGHTHOUSE: 99 / 100</span>
            </div>
            <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
              <div>LCP: <strong className="text-emerald-400">0.84s</strong> (Target &lt; 2.5s)</div>
              <div>CLS: <strong className="text-emerald-400">0.00</strong> (Zero Shift)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. CI/CD Pipeline Automation
  if (articleId === 'understanding-ci-cd-pipelines') {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#071329] via-[#0A1A3A] to-[#040C1A] border-b border-slate-800 ${
        isHero ? 'h-52 sm:h-64' : 'h-40'
      } flex items-center justify-center select-none`}>
        <div className="absolute inset-0 bg-[radial-gradient(#00C8E8_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        <div className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center">
          {/* Branch visualization */}
          <div className="flex items-center justify-between w-full mb-3 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-brand-cyanAccent">
              <GitBranch className="w-3.5 h-3.5" />
              <span>branch/main</span>
            </div>
            <span className="text-slate-500">commit #c82e01</span>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full text-center">
            <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-[10px] font-mono">
              <div className="text-slate-400">1. LINT & TEST</div>
              <div className="text-emerald-400 font-bold mt-0.5">PASS (28/28)</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-[10px] font-mono">
              <div className="text-slate-400">2. DOCKER OCI</div>
              <div className="text-brand-cyanAccent font-bold mt-0.5">CACHED 1.2s</div>
            </div>
            <div className="p-2 rounded-xl bg-blue-950/60 border border-brand-electricBlue/40 text-[10px] font-mono">
              <div className="text-slate-300">3. DEPLOY</div>
              <div className="text-brand-electricBlue font-bold mt-0.5">ROLLOUT ✓</div>
            </div>
          </div>

          <div className="mt-2.5 text-[10px] font-mono text-slate-400">
            Zero-Downtime Blue/Green Cluster Sync
          </div>
        </div>
      </div>
    );
  }

  // 5. Technical SEO & Schema.org
  if (articleId === 'technical-seo-basics-for-business-websites') {
    return (
      <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#061022] via-[#091836] to-[#040C1A] border-b border-slate-800 ${
        isHero ? 'h-52 sm:h-64' : 'h-40'
      } flex items-center justify-center select-none`}>
        <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        <div className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center">
          {/* SERP Preview Simulation */}
          <div className="w-full p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-sm text-left font-sans">
            <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 mb-1">
              <Search className="w-3 h-3" />
              <span>https://teciaura.com › cloud-infrastructure</span>
            </div>
            <div className="text-xs font-bold text-brand-cyanAccent truncate">
              Teciaura Technologies — Cloud & Software Engineering
            </div>
            <div className="text-[10px] text-slate-400 mt-1 line-clamp-1 font-mono">
              JSON-LD: @type: ProfessionalService • 5.0 ★★★★★ Verified
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>Googlebot Crawlability Score: 100% • Semantic Graph Synced</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Generic Graphic
  return (
    <div className={`relative w-full overflow-hidden bg-[#070F1E] border-b border-slate-800 ${
      isHero ? 'h-52 sm:h-64' : 'h-40'
    } flex items-center justify-center select-none`}>
      <div className="flex items-center gap-2 text-brand-cyanAccent font-mono text-xs">
        <Sparkles className="w-4 h-4" />
        <span>TECIAURA ENGINEERING PERSPECTIVE</span>
      </div>
    </div>
  );
};
