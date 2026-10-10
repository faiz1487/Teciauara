import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, Server, GitBranch, Cpu, ShieldCheck, 
  Play, Pause, RefreshCw, Check, Activity, Zap, Terminal, 
  Database, Network, Layers, Sparkles, ArrowRight, Copy, CheckCheck, Trash2
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

    // Viewport-aware playback: stream and play only when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: '150px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
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
            src="/technology-works-beautifully.mp4"
            poster="/tech-works-poster.jpg"
            preload="metadata"
            playsInline
            loop
            muted
            className="w-full h-full object-cover object-center pointer-events-auto"
            onClick={togglePlay}
          >
            <source src="/technology-works-beautifully.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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

// Interactive Sandbox Command Scenarios
interface SandboxCommand {
  id: string;
  command: string;
  label: string;
  tag: string;
  icon: string;
  duration: number;
  output: string[];
}

const SANDBOX_COMMANDS: SandboxCommand[] = [
  {
    id: 'terraform',
    command: 'terraform apply -auto-approve',
    label: 'Provision Multi-AZ AWS Infrastructure',
    tag: 'IaC Terraform',
    icon: '⚡',
    duration: 3200,
    output: [
      '[00:00.12] teciaura@cluster:~/iac$ terraform apply -auto-approve',
      '[00:00.45] Initializing AWS Provider v5.42 (us-east-1)...',
      '[00:00.82] Acquired state lock on S3/DynamoDB: terraform-prod-lock',
      '[00:01.24] module.vpc.aws_vpc.core: Creating... [CIDR 10.0.0.0/16]',
      '[00:01.89] module.vpc.aws_subnet.private[0..2]: Provisioning Multi-AZ subnets across us-east-1a, 1b, 1c',
      '[00:02.35] module.ecs.aws_ecs_cluster.app: Verifying ECS Fargate auto-scaling target pool...',
      '[00:02.80] module.rds.aws_rds_cluster.postgres: Aurora Multi-AZ replica synced (AES-256 encrypted)',
      '[00:03.15] Apply complete! Resources: 18 added, 0 changed, 0 destroyed.',
      '[00:03.20] Output: alb_endpoint = "production-alb-9821.us-east-1.elb.amazonaws.com" [200 OK]',
    ],
  },
  {
    id: 'docker',
    command: 'docker build --target=production -t app:v2.4 .',
    label: 'Compile Minimal OCI Container',
    tag: 'Docker Build',
    icon: '🐳',
    duration: 2800,
    output: [
      '[00:00.08] teciaura@cluster:~/app$ docker build --target=production -t app:v2.4 .',
      '[00:00.35] [+] Building 2.4s (12/12) FINISHED',
      '[00:00.75] => [stage-0 1/3] FROM node:22-alpine AS builder (CACHED)',
      '[00:01.12] => [stage-0 2/3] RUN npm ci --omit=dev (Audit: 0 vulnerabilities found)',
      '[00:01.65] => [stage-0 3/3] RUN npm run build -> Rolldown compiled in 1.25s',
      '[00:02.10] => [stage-1 1/2] FROM gcr.io/distroless/nodejs22-debian12:nonroot',
      '[00:02.55] => exporting to image: app:v2.4 (Minimal distroless size: 38.4MB)',
      '[00:02.75] Vulnerability Scan: Trivy passed with 0 HIGH or CRITICAL CVEs.',
    ],
  },
  {
    id: 'security',
    command: 'teciaura-sec --audit --standards=soc2,hipaa',
    label: 'Execute Cloud Security & IAM Posture Scan',
    tag: 'AppSec & IAM',
    icon: '🛡️',
    duration: 2500,
    output: [
      '[00:00.09] teciaura@cluster:~$ teciaura-sec --audit --standards=soc2,hipaa',
      '[00:00.42] Running automated policy verification against AWS Well-Architected Framework...',
      '[00:00.85] [PASS] IAM Least-Privilege Check: Zero wildcard (*) permissions in prod roles',
      '[00:01.20] [PASS] Data-at-Rest Encryption: S3 KMS & RDS encrypted with AWS Managed Keys',
      '[00:01.65] [PASS] Ingress Isolation: Security groups deny all public traffic except ALB:443',
      '[00:02.10] [PASS] Transport Security: TLS 1.3 enforced with HSTS Preload headers',
      '[00:02.45] AUDIT COMPLETE: 100% COMPLIANT WITH ZERO CRITICAL DRIFT.',
    ],
  },
  {
    id: 'edge',
    command: 'curl -I https://api.teciaura.com/edge/health',
    label: 'Ping Global Edge Anycast PoPs',
    tag: 'Edge Latency',
    icon: '🌐',
    duration: 2200,
    output: [
      '[00:00.05] teciaura@cluster:~$ curl -I https://api.teciaura.com/edge/health',
      '[00:00.32] Resolving Anycast DNS routes across global edge PoPs...',
      '[00:00.68] Mumbai, IN      (ap-south-1)       : 200 OK • Latency: 16.4ms [TLS 1.3: 4.1ms]',
      '[00:01.05] Singapore       (ap-southeast-1)   : 200 OK • Latency: 21.8ms [Cache: HIT]',
      '[00:01.42] Frankfurt, DE   (eu-central-1)     : 200 OK • Latency: 26.2ms [Cache: HIT]',
      '[00:01.80] Virginia, US    (us-east-1)        : 200 OK • Latency: 32.5ms [Cache: HIT]',
      '[00:02.15] GLOBAL EDGE SUMMARY: P99 Latency 24.2ms • HTTP/2 Multiplexing Active',
    ],
  },
];

export const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'sandbox' | 'telemetry'>('sandbox');
  const [selectedArchNode, setSelectedArchNode] = useState<string>('vpc');
  
  // Sandbox State
  const [activeCommandId, setActiveCommandId] = useState<string>('terraform');
  const [isRunningCommand, setIsRunningCommand] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>(SANDBOX_COMMANDS[0].output);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

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

  // Run Sandbox Command Simulator
  const handleRunCommand = (command: SandboxCommand) => {
    if (isRunningCommand) return;
    setActiveCommandId(command.id);
    setIsRunningCommand(true);
    setTerminalLogs([`$ ${command.command}`, 'Running execution pipeline...']);

    let currentIdx = 0;
    const intervalTime = Math.max(250, Math.floor(command.duration / command.output.length));

    const logTimer = setInterval(() => {
      if (currentIdx < command.output.length) {
        const nextLine = command.output[currentIdx];
        setTerminalLogs(prev => [...prev, nextLine]);
        currentIdx++;
      } else {
        clearInterval(logTimer);
        setIsRunningCommand(false);
      }
    }, intervalTime);
  };

  const handleCopyLogs = () => {
    navigator.clipboard.writeText(terminalLogs.join('\n')).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleClearTerminal = () => {
    if (isRunningCommand) return;
    setTerminalLogs(['teciaura@production:~$ _']);
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
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Interactive Systems Architecture"
          title="Technology That Works Beautifully."
          description="Experience real-time interactive demonstrations of how Teciaura engineers resilient cloud environments, automated deployment pipelines, and high-performance applications."
          align="center"
        />

        {/* Video Player Panel */}
        <VideoPlayerPanel />

        {/* INTERACTIVE ARCHITECTURE & DEVOPS CONSOLE */}
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
              <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-700/80 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('sandbox')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === 'sandbox'
                      ? 'bg-brand-electricBlue text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DevOps Sandbox</span>
                </button>
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
              
              {/* TAB 1: DEVOPS TERMINAL SANDBOX (FEATURED LIVE INTERACTIVE SIMULATOR) */}
              {activeTab === 'sandbox' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
                      <span>Select a command below to trigger simulated 60fps cloud orchestration:</span>
                    </span>
                    <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Sandbox Engine: Ready</span>
                    </span>
                  </div>

                  {/* Quick Command Trigger Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {SANDBOX_COMMANDS.map((cmd) => {
                      const isSelected = activeCommandId === cmd.id;
                      return (
                        <button
                          key={cmd.id}
                          disabled={isRunningCommand}
                          onClick={() => handleRunCommand(cmd)}
                          className={`p-3 rounded-xl border text-left transition-all font-mono text-xs flex flex-col justify-between group ${
                            isSelected && isRunningCommand
                              ? 'bg-brand-cyanAccent/15 border-brand-cyanAccent shadow-glow-blue animate-pulse'
                              : isSelected
                                ? 'bg-brand-electricBlue/20 border-brand-cyanAccent shadow-sm'
                                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                          } ${isRunningCommand ? 'cursor-not-allowed opacity-80' : 'cursor-pointer active:scale-95'}`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-base">{cmd.icon}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-sans">
                              {cmd.tag}
                            </span>
                          </div>
                          <div className="font-bold text-white group-hover:text-brand-cyanAccent transition-colors truncate">
                            {cmd.command}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5 font-sans">
                            {cmd.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Terminal Output Window */}
                  <div className="rounded-2xl bg-[#040A14] border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
                    <div className="px-4 py-2.5 bg-[#061022] border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-brand-cyanAccent" />
                        <span>teciaura@prod-us-east-1: ~/infrastructure</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleCopyLogs}
                          className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors"
                          title="Copy terminal output"
                        >
                          {isCopied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span className="text-[10px]">{isCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                        <button
                          onClick={handleClearTerminal}
                          disabled={isRunningCommand}
                          className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors disabled:opacity-50"
                          title="Clear terminal"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span className="text-[10px]">Clear</span>
                        </button>
                      </div>
                    </div>

                    {/* Streaming Terminal Content */}
                    <div className="p-4 sm:p-5 max-h-60 overflow-y-auto space-y-1.5 scrollbar-thin select-all">
                      {terminalLogs.map((log, idx) => {
                        const isCmd = log.startsWith('$') || log.startsWith('[00:00.08] teciaura@') || log.startsWith('[00:00.12] teciaura@') || log.startsWith('[00:00.09] teciaura@') || log.startsWith('[00:00.05] teciaura@');
                        const isSuccess = log.includes('complete') || log.includes('FINISHED') || log.includes('COMPLIANT') || log.includes('200 OK') || log.includes('[PASS]');

                        return (
                          <div key={idx} className="leading-relaxed">
                            {isCmd ? (
                              <span className="text-brand-cyanAccent font-bold">{log}</span>
                            ) : isSuccess ? (
                              <span className="text-emerald-400 font-semibold">{log}</span>
                            ) : log.includes('Creating') || log.includes('Building') ? (
                              <span className="text-brand-electricBlue">{log}</span>
                            ) : (
                              <span className="text-slate-300">{log}</span>
                            )}
                          </div>
                        );
                      })}
                      <div ref={terminalEndRef} />
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-4 rounded-2xl bg-[#061022] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <span className="text-slate-400 font-mono">
                      Interested in provisioning an automated multi-AZ cloud stack for your business?
                    </span>
                    <Button 
                      to="/contact?service=Cloud%20Infrastructure" 
                      variant="primary" 
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Discuss Technical Deployment
                    </Button>
                  </div>
                </div>
              )}

              {/* TAB 2: CLOUD TOPOLOGY BLUEPRINT */}
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
