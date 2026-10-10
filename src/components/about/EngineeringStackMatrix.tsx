import React, { useState } from 'react';
import { 
  Cloud, Terminal, Bot, ShieldCheck, CheckCircle2, 
  Layers, Cpu, Server, Database, GitBranch, ArrowRight, Sparkles 
} from 'lucide-react';

interface StackDomain {
  id: string;
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: string[];
  principles: string[];
  asciiTopology: string;
  slaMetric: string;
}

const STACK_DOMAINS: StackDomain[] = [
  {
    id: 'cloud-iac',
    name: 'Cloud & IaC Architecture',
    label: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'We construct secure, modular cloud environments on AWS using Terraform. Every subnet, security group, and cluster is declared in version-controlled code, eliminating manual configuration drift.',
    technologies: ['AWS VPC', 'Terraform', 'Docker', 'Amazon ECS', 'Kubernetes', 'AWS RDS', 'CloudWatch'],
    principles: [
      'Multi-AZ isolation across 3 Availability Zones',
      'Immutable infrastructure with automated state locking (S3/DynamoDB)',
      'Least-privilege IAM roles and encrypted data-at-rest (KMS)',
      'Centralized CloudWatch logging with threshold anomaly alerts',
    ],
    asciiTopology: `[Internet Traffic / Users]
       │
       ▼ (HTTPS / TLS 1.3 Termination)
[AWS Application Load Balancer]
   ├── [AZ-1: Private ECS Task Container Pool]
   ├── [AZ-2: Private ECS Task Container Pool]
   └── [AZ-3: Multi-Region Standby Failover]
       │
       ▼ (Encrypted Subnet Gateway)
[Amazon RDS PostgreSQL Multi-AZ Cluster + S3 Snapshots]`,
    slaMetric: 'Zero Drift • 99.99% Availability Architecture',
  },
  {
    id: 'web-api',
    name: 'High-Performance Web & APIs',
    label: 'Full-Stack & APIs',
    icon: Terminal,
    description: 'Modern, component-driven web architectures built for sub-second page loads, accessible WCAG 2.1 AA interfaces, and high-concurrency API service layers.',
    technologies: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Node.js', 'REST / OpenAPI'],
    principles: [
      'Strict TypeScript typings across all interfaces and data models',
      'Dynamic bundle code splitting with Core Web Vitals LCP < 1.2s',
      'Mobile-first responsive layouts tested across all viewports',
      'Semantic HTML5, ARIA labels, and keyboard navigation compliance',
    ],
    asciiTopology: `[Client Device / Browser]
       │ (HTTP/2 Multiplexing & CDN Caching)
       ▼
[Edge CDN / Next.js SSR & Static Hydration]
       │
       ▼ (Authenticated Bearer Tokens / OpenAPI Contract)
[Asynchronous Microservices Gateway (FastAPI / Node)]
       │
       └── [In-Memory Redis Cache] ──> [Database Store]`,
    slaMetric: 'Lighthouse 95+ • P99 API Latency < 150ms',
  },
  {
    id: 'ai-data',
    name: 'AI & Data Pipelines',
    label: 'AI & Data Systems',
    icon: Bot,
    description: 'Production-ready generative AI integrations, autonomous agent workflows, and vector retrieval (RAG) pipelines backed by structured relational databases.',
    technologies: ['OpenAI API', 'Claude 3.5 Sonnet', 'LangChain', 'Vector Search / RAG', 'PostgreSQL', 'Prisma ORM', 'Redis'],
    principles: [
      'Prompt pipeline validation with structured JSON schema outputs',
      'Hybrid semantic vector search + relational keyword matching',
      'Encrypted user session memory and secure token budgeting',
      'Zero training on confidential client data (Enterprise API privacy)',
    ],
    asciiTopology: `[User Request Context]
       │
       ▼
[Agent Orchestration Layer (Validation & Prompt Sanitization)]
       │
       ├── [Embeddings Engine (Vector Cosine Similarity)]
       ├── [Enterprise RAG Knowledge Store]
       └── [LLM Inference Pipeline (OpenAI / Claude)]
       │
       ▼ (Structured Typed Response & Schema Parsing)
[Frontend Rendering Engine]`,
    slaMetric: 'Deterministic JSON Output • Zero Data Retention',
  },
  {
    id: 'devops-sla',
    name: 'DevOps & Quality Engineering',
    label: 'DevOps & Reliability',
    icon: ShieldCheck,
    description: 'Continuous integration and deployment pipelines that turn software releases from high-stress manual events into routine, verified, zero-downtime background jobs.',
    technologies: ['GitHub Actions', 'Docker OCI', 'ArgoCD', 'SAST Security Scanners', 'Dependabot', 'Prometheus', 'Grafana'],
    principles: [
      'Automated PR quality gates with mandatory lint and test checks',
      'Multi-stage Docker builds minimizing final image surface area',
      'Automated blue/green or canary release traffic switching',
      'Instant rollback capability referencing immutable commit SHAs',
    ],
    asciiTopology: `[Developer Push (git push main)]
       │
       ▼ (Automated GitHub Actions Webhook)
[Static Analysis & Unit Test Suite]
       │ (Passed 100%)
       ▼
[Docker Image Build & Container Registry Push]
       │
       ▼ (Blue/Green Deployment)
[Zero-Downtime Rollout to Production Cluster]`,
    slaMetric: '100% Automated Testing • Instant Commit Rollback',
  },
];

export const EngineeringStackMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cloud-iac');

  const activeDomain = STACK_DOMAINS.find(d => d.id === activeTab) || STACK_DOMAINS[0];
  const ActiveIcon = activeDomain.icon;

  return (
    <div className="rounded-3xl bg-[#070F1E] border border-slate-800 shadow-card p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-sm">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyanAccent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-electricBlue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-cyanAccent uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture Explorer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Teciaura Engineering Stack & Architecture Matrix
          </h3>
        </div>

        {/* Live cluster telemetry badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-300 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{activeDomain.slaMetric}</span>
        </div>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-5 border-b border-slate-800/80 scrollbar-none" role="tablist">
        {STACK_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isActive = domain.id === activeTab;

          return (
            <button
              key={domain.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(domain.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 font-mono ${
                isActive
                  ? 'bg-brand-electricBlue text-white shadow-glow-blue border border-blue-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{domain.label}</span>
            </button>
          );
        })}
      </div>

      {/* Domain Content Showcase */}
      <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Description & Principles (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyanAccent/10 border border-brand-cyanAccent/30 text-brand-cyanAccent flex items-center justify-center">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {activeDomain.name}
              </h4>
              <p className="text-xs text-brand-cyanAccent font-mono">
                Standardized Enterprise Practice
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {activeDomain.description}
          </p>

          {/* Core Architectural Principles */}
          <div className="space-y-2.5 pt-1">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Architectural Standards & Guarantees:
            </h5>
            <ul className="space-y-2 text-xs text-slate-300 font-normal">
              {activeDomain.principles.map((principle, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack Chips */}
          <div>
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Primary Technologies:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {activeDomain.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono font-medium text-brand-cyanAccent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: ASCII Topology Blueprint Box (6 cols) */}
        <div className="lg:col-span-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#040A14] border border-slate-800 shadow-inner font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-brand-cyanAccent font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>ARCHITECTURE BLUEPRINT</span>
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                VERIFIED SPEC
              </span>
            </div>

            <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed p-1 select-all font-mono">
              {activeDomain.asciiTopology}
            </pre>

            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Security: TLS 1.3 / Least-Privilege</span>
              <span className="text-brand-cyanAccent">Modular Terraform / Next.js Ready</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
