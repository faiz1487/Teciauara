import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, Server, GitBranch, Cpu, ShieldCheck, 
  Play, Pause, RefreshCw, Check, Activity, Zap, Terminal, 
  Database, Network, Layers, Sparkles, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

// Isolated memoized video panel to prevent telemetry interval re-renders from interrupting video playback
const VideoPlayerPanel = React.memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const startPlayback = () => {
      if (!video) return;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };

    // Attempt autoplay immediately
    startPlayback();

    // Browser power-saver/policy fallback: resume on any interaction
    const handleFirstInteraction = () => {
      if (video && video.paused) {
        startPlayback();
      }
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-3xl border border-[#0F2448] sm:border-[#102A56] bg-[#071328]/90 shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(22,119,255,0.20),0_0_15px_rgba(0,200,232,0.12)] overflow-hidden group">
        {/* Subtle blue/cyan ambient glow halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyanAccent/20 via-brand-electricBlue/25 to-brand-cyanAccent/20 rounded-2xl sm:rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

        {/* Premium 16:9 Video Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/tech-works-poster.jpg"
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            onPlay={() => setIsPlaying(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/technology-works-beautifully.mp4" type="video/mp4" />
            <source src="/Technology%20That%20Works%20Beautifully.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Floating Play/Pause Minimalist Control Pill */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
            <button
              onClick={togglePlay}
              type="button"
              className="px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-slate-700/80 hover:border-brand-cyanAccent/60 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono shadow-lg cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-cyanAccent" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-cyanAccent" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'pipeline' | 'telemetry'>('architecture');
  const [selectedArchNode, setSelectedArchNode] = useState<string>('vpc');
  
  // Pipeline simulation state
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [deployLogs, setDeployLogs] = useState<string[]>([
    'System ready. Click "Trigger Deployment" to simulate production CI/CD.'
  ]);

  // Telemetry real-time state
  const [telemetryLatency, setTelemetryLatency] = useState(14);
  const [throughput, setThroughput] = useState(2840);
  const [cpuUsage, setCpuUsage] = useState(38);

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryLatency(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const val = prev + delta;
        return val >= 12 && val <= 20 ? val : 14;
      });
      setThroughput(prev => prev + Math.floor(Math.random() * 15) - 7);
      setCpuUsage(prev => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const val = prev + delta;
        return val >= 32 && val <= 46 ? val : 38;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleRunPipeline = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);
    setDeployLogs(['[00:00.12] Initiating automated CI/CD pipeline for main branch...']);

    setTimeout(() => {
      setDeployStep(2);
      setDeployLogs(prev => [
        ...prev,
        '[00:00.68] Step 1: TypeScript typecheck & ESLint validation -> PASSED (0 errors)',
        '[00:01.04] Step 2: Executing 148 automated unit & integration tests...'
      ]);
    }, 800);

    setTimeout(() => {
      setDeployStep(3);
      setDeployLogs(prev => [
        ...prev,
        '[00:01.82] 148/148 tests passed (100% coverage on core business logic)',
        '[00:02.15] Step 3: Compiling multi-stage Docker container (alpine base, sha256:8f2a9c)...'
      ]);
    }, 1800);

    setTimeout(() => {
      setDeployStep(4);
      setDeployLogs(prev => [
        ...prev,
        '[00:03.02] Container image verified and pushed to AWS ECR registry.',
        '[00:03.45] Step 4: Terraform applying ECS task definition with Blue/Green traffic shifting...'
      ]);
    }, 2800);

    setTimeout(() => {
      setDeployStep(5);
      setDeployLogs(prev => [
        ...prev,
        '[00:04.20] Health checks verified on port 443 across 3 Availability Zones.',
        '[00:04.55] DEPLOYMENT SUCCESSFUL: Zero downtime cutover completed.'
      ]);
      setTimeout(() => {
        setIsDeploying(false);
      }, 2500);
    }, 3900);
  };

  const archNodes = [
    {
      id: 'edge',
      name: 'Global Edge & WAF',
      type: 'CloudFront + AWS WAF',
      specs: 'TLS 1.3 • DDoS Mitigation • Sub-15ms Anycast Routing',
      status: 'Active',
      metric: '99.999% SLA'
    },
    {
      id: 'vpc',
      name: 'Isolated VPC Core',
      type: 'Multi-AZ Subnets',
      specs: 'Terraform IaC • Private CIDR /16 • NAT Gateway Redundancy',
      status: 'Healthy',
      metric: '3 Availability Zones'
    },
    {
      id: 'compute',
      name: 'ECS Fargate Cluster',
      type: 'Container Orchestration',
      specs: 'Auto-scaling (2-16 tasks) • Zero-downtime Blue/Green • Dockerized',
      status: 'Scaling Ready',
      metric: '42ms P99 latency'
    },
    {
      id: 'database',
      name: 'Aurora PostgreSQL & Redis',
      type: 'Data Persistence & Cache',
      specs: 'Automated Snapshots • Read Replicas • In-Memory Acceleration',
      status: 'Synchronized',
      metric: 'RPO: 0s / RTO: <1min'
    }
  ];

  return (
    <section 
      aria-label="Technology That Works Beautifully"
      className="relative py-24 sm:py-32 bg-[#050B17] text-white border-y border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient dark and cinematic lighting */}
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-brand-cyanAccent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[32rem] h-[32rem] bg-brand-electricBlue/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,119,255,0.06),transparent_60%)] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Existing Section Heading */}
        <SectionHeading
          eyebrow="Interactive Systems Architecture"
          title="Technology That Works Beautifully."
          description="Experience real-time interactive demonstrations of how Teciaura engineers resilient cloud environments, automated deployment pipelines, and high-performance applications."
          align="center"
        />

        {/* ========================================================================= */}
        {/* LARGE PREMIUM 16:9 ROUNDED VIDEO PANEL WITH BLUE/CYAN GLOW & NAVY BORDER  */}
        {/* ========================================================================= */}
        {/* Render Memoized Video Player Panel */}
        <VideoPlayerPanel />

        {/* ========================================================================= */}
        {/* EXISTING SECTION CONTENT: INTERACTIVE ARCHITECTURE CONSOLE                */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#09152C]/90 border border-brand-electricBlue/35 shadow-elevated overflow-hidden backdrop-blur-xl transition-all duration-300">
            
            {/* Window Header / Tab Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-slate-700/80 bg-[#061022]">
              {/* Window controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-cyanAccent" />
                  teciaura-telemetry-engine
                </span>
              </div>

              {/* Mode Tabs */}
              <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-700/80 text-xs">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === 'architecture'
                      ? 'bg-brand-electricBlue text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Cloud Topology</span>
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === 'pipeline'
                      ? 'bg-brand-electricBlue text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>CI/CD Simulator</span>
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === 'telemetry'
                      ? 'bg-brand-electricBlue text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Observability</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              
              {/* TAB 1: CLOUD TOPOLOGY */}
              {activeTab === 'architecture' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span>Click any architectural component to inspect IaC provisioning parameters:</span>
                    <span className="font-mono text-brand-cyanAccent">Stack: AWS • Terraform • Docker</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {archNodes.map((node) => {
                      const isSelected = selectedArchNode === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedArchNode(node.id)}
                          className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                            isSelected
                              ? 'bg-brand-electricBlue/15 border-brand-cyanAccent shadow-[0_0_20px_rgba(0,200,232,0.25)] -translate-y-1'
                              : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {node.status}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">{node.name}</h4>
                          <p className="text-xs text-brand-cyanAccent font-mono mb-2">{node.type}</p>
                          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">{node.specs}</p>
                          <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>{node.metric}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Inspector Panel for Selected Node */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-slate-800 font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                      <span>INSPECTOR: {selectedArchNode.toUpperCase()} MODULE</span>
                      <span className="text-emerald-400">Terraform Verified • Zero Security Findings</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {selectedArchNode === 'edge' && 'resource "aws_cloudfront_distribution" "main" { enabled = true, default_root_object = "index.html", price_class = "PriceClass_100", ssl_support_method = "sni-only" }'}
                      {selectedArchNode === 'vpc' && 'module "vpc" { source = "terraform-aws-modules/vpc/aws", cidr = "10.0.0.0/16", azs = ["us-east-1a", "us-east-1b", "us-east-1c"], enable_nat_gateway = true }'}
                      {selectedArchNode === 'compute' && 'resource "aws_ecs_service" "app" { launch_type = "FARGATE", desired_count = 3, deployment_circuit_breaker { rollback = true } }'}
                      {selectedArchNode === 'database' && 'module "db" { source = "terraform-aws-modules/rds-aurora/aws", engine = "aurora-postgresql", backup_retention_period = 30, storage_encrypted = true }'}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: CI/CD PIPELINE SIMULATOR */}
              {activeTab === 'pipeline' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-brand-cyanAccent" />
                        Automated Production Delivery Pipeline
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Run a simulated continuous integration and zero-downtime deployment release.
                      </p>
                    </div>

                    <button
                      onClick={handleRunPipeline}
                      disabled={isDeploying}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 ${
                        isDeploying
                          ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                          : 'bg-brand-electricBlue hover:bg-brand-electricHover text-white shadow-glow-blue active:scale-95'
                      }`}
                    >
                      {isDeploying ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-cyanAccent" />
                          <span>Deploying Pipeline...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Trigger Deployment</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Visual Progress Steps */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { step: 1, label: 'Lint & Typecheck' },
                      { step: 2, label: '148 Unit Tests' },
                      { step: 3, label: 'Docker Multi-stage' },
                      { step: 4, label: 'Blue/Green Rollout' }
                    ].map((s) => {
                      const isComplete = deployStep >= s.step;
                      const isCurrent = deployStep === s.step && isDeploying;

                      return (
                        <div
                          key={s.step}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isComplete
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                              : isCurrent
                              ? 'bg-brand-electricBlue/20 border-brand-cyanAccent text-brand-cyanAccent animate-pulse'
                              : 'bg-slate-900/60 border-slate-800 text-slate-500'
                          }`}
                        >
                          <div className="text-[10px] font-mono mb-1">PHASE {s.step}</div>
                          <div className="text-xs font-semibold">{s.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Log Console */}
                  <div className="rounded-2xl bg-black/60 border border-slate-800 p-4 font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto scrollbar-none">
                    {deployLogs.map((log, index) => (
                      <div key={index} className="text-slate-300">
                        {log.includes('PASSED') || log.includes('SUCCESSFUL') ? (
                          <span className="text-emerald-400 font-semibold">{log}</span>
                        ) : log.includes('Step') ? (
                          <span className="text-brand-cyanAccent">{log}</span>
                        ) : (
                          <span>{log}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: OBSERVABILITY & TELEMETRY */}
              {activeTab === 'telemetry' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Latency Metric */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Edge Response Time</span>
                        <Zap className="w-4 h-4 text-brand-cyanAccent" />
                      </div>
                      <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                        <span>{telemetryLatency}</span>
                        <span className="text-xs text-brand-cyanAccent font-normal">ms (P95)</span>
                      </div>
                      {/* Mini Live Sparkline Waveform */}
                      <div className="mt-3 h-5 flex items-center">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path
                            d={`M 0 14 Q 25 ${Math.max(4, 22 - telemetryLatency)} 50 10 T 100 ${Math.min(18, 10 + (telemetryLatency % 8))}`}
                            fill="none"
                            stroke="#00C8E8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="transition-all duration-500"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Throughput Metric */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Active Throughput</span>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                        <span>{throughput.toLocaleString()}</span>
                        <span className="text-xs text-emerald-400 font-normal">req/s</span>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span>0.000% Error Rate</span>
                      </div>
                    </div>

                    {/* Compute Load Metric */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>ECS Cluster CPU</span>
                        <Cpu className="w-4 h-4 text-brand-electricBlue" />
                      </div>
                      <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
                        <span>{cpuUsage}</span>
                        <span className="text-xs text-slate-400 font-normal">% Allocated</span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-brand-electricBlue rounded-full" style={{ width: `${cpuUsage}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#061022] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300 font-mono">
                        AWS Well-Architected Framework: 100% Compliance Verified
                      </span>
                    </div>
                    <Button to="/contact" variant="outline" size="sm">
                      Discuss Your Cloud Architecture
                    </Button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
