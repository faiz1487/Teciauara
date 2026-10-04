import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Layout, Code2, Cpu, TrendingUp, Wrench, 
  ArrowRight, CheckCircle2, Sparkles, Terminal, Activity, Zap
} from 'lucide-react';
import { 
  PremiumIconBadge, 
  PremiumCloudIcon, 
  PremiumLayoutIcon, 
  PremiumCodeIcon, 
  PremiumAiBrainIcon, 
  PremiumTrendingIcon, 
  PremiumWrenchIcon,
  PremiumTerminalIcon
} from '../common/PremiumIcons';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ServicesEditorialGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#050B17] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-electricBlue/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Heading */}
        <SectionHeading
          eyebrow="Core Competencies & Engineering"
          title="Technology, Thoughtfully Engineered."
          description="From the first idea to production-ready solutions, we help businesses turn ambitious concepts into meaningful digital experiences."
          align="center"
        />

        {/* Asymmetrical Bento Grid */}
        <div className="mt-14 space-y-6">
          
          {/* ROW 1: Two Featured Anchor Cards (7 cols + 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Cloud & DevOps (7 cols) - Flagship Spotlight */}
            <div className="lg:col-span-7 group relative rounded-3xl bg-gradient-to-br from-[#0B172E] via-[#091428] to-[#060E1D] border border-slate-800 p-8 sm:p-10 hover:border-brand-cyanAccent/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Subtle top glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-cyanAccent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <PremiumIconBadge variant="blue" size="lg">
                    <PremiumCloudIcon className="w-8 h-8" />
                  </PremiumIconBadge>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Multi-AZ Cloud Active</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono font-bold tracking-wider text-brand-cyanAccent mb-2">
                  <span>Flagship Practice</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
                  Cloud & DevOps Architecture
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  We build resilient cloud infrastructure, automate deployment pipelines with zero downtime, and eliminate manual server operations using declarative Terraform and container orchestration.
                </p>

                {/* Micro Terminal Preview */}
                <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <PremiumTerminalIcon className="w-4 h-4 text-brand-cyanAccent" />
                      terraform-aws-architecture.tf
                    </span>
                    <span className="text-emerald-400 font-semibold">Verified IaC</span>
                  </div>
                  <div className="text-brand-cyanAccent pt-1">$ terraform plan -out=production.tfplan</div>
                  <div className="text-slate-400">Plan: 18 to add, 0 to change, 0 to destroy. (Multi-AZ VPC, ECS, RDS)</div>
                </div>

                {/* Key Deliverables Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AWS Infrastructure', 'Terraform IaC', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Cost Optimization'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyanAccent group-hover:text-white transition-colors"
                >
                  <span>Explore Cloud & DevOps Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-slate-500 font-mono">01 // CLOUD</span>
              </div>
            </div>

            {/* Card 2: Web Design & Dev (5 cols) - Visual Frontend Showcase */}
            <div className="lg:col-span-5 group relative rounded-3xl bg-gradient-to-br from-[#0B172E] via-[#091428] to-[#060E1D] border border-slate-800 p-8 sm:p-10 hover:border-brand-electricBlue/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-electricBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <PremiumIconBadge variant="cyan" size="lg">
                    <PremiumLayoutIcon className="w-8 h-8" />
                  </PremiumIconBadge>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-brand-cyanAccent">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Lighthouse 99+</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono font-bold tracking-wider text-brand-cyanAccent mb-2">
                  <span>Digital Experience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-brand-cyanAccent transition-colors">
                  Web Design & Dev
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Bespoke, lightning-fast digital experiences engineered with React, TypeScript, and modern CSS. Built for sub-second speeds, flawless responsiveness, and conversion.
                </p>

                {/* Performance Metric Badge Card */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                    <span>Core Web Vitals Pass Rate</span>
                    <span className="text-emerald-400 font-mono font-bold">100% (Green)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded-xl bg-black/40 border border-slate-800">
                      <div className="text-[10px] text-slate-400">LCP</div>
                      <div className="text-xs font-bold text-emerald-400">0.8s</div>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-slate-800">
                      <div className="text-[10px] text-slate-400">FID</div>
                      <div className="text-xs font-bold text-emerald-400">12ms</div>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-slate-800">
                      <div className="text-[10px] text-slate-400">CLS</div>
                      <div className="text-xs font-bold text-emerald-400">0.00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Accessible UI'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyanAccent group-hover:text-white transition-colors"
                >
                  <span>Explore Web Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-slate-500 font-mono">02 // WEB</span>
              </div>
            </div>

          </div>

          {/* ROW 2: Four Companion Bento Cards (3 cols each on lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 3: Custom Software & Apps */}
            <div className="group relative rounded-3xl bg-[#09152C]/80 border border-slate-800 p-6 sm:p-7 hover:border-brand-electricBlue/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="indigo" size="md" className="mb-5">
                  <PremiumCodeIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                  Custom Software & Apps
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Tailored web applications, internal tools, customer portals, and API integrations engineered for daily commercial scale.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>SaaS Product Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Enterprise REST & GraphQL APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Role-Based Access Control</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link to="/services" className="font-semibold text-brand-cyanAccent group-hover:text-white flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-mono">03 // APP</span>
              </div>
            </div>

            {/* Card 4: AI & Intelligent Automation */}
            <div className="group relative rounded-3xl bg-[#09152C]/80 border border-slate-800 p-6 sm:p-7 hover:border-brand-cyanAccent/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="purple" size="md" className="mb-5">
                  <PremiumAiBrainIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                  AI & Intelligent Automation
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Custom LLM agent workflows, intelligent document pipelines, and autonomous integrations that eliminate operational drag.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Proprietary Data RAG Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Autonomous AI Support Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Workflow Orchestration</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link to="/services" className="font-semibold text-brand-cyanAccent group-hover:text-white flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-mono">04 // AI</span>
              </div>
            </div>

            {/* Card 5: Digital Marketing & SEO */}
            <div className="group relative rounded-3xl bg-[#09152C]/80 border border-slate-800 p-6 sm:p-7 hover:border-brand-electricBlue/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="cyan" size="md" className="mb-5">
                  <PremiumTrendingIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                  Digital Marketing & SEO
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Audit technical search health, capture commercial buyer intent queries, and drive high-intent organic traffic growth.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Comprehensive Technical SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>High-Intent Keyword Roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
                    <span>Conversion Rate Optimization</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link to="/services" className="font-semibold text-brand-cyanAccent group-hover:text-white flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-mono">05 // SEO</span>
              </div>
            </div>

            {/* Card 6: IT Infrastructure & Support */}
            <div className="group relative rounded-3xl bg-[#09152C]/80 border border-slate-800 p-6 sm:p-7 hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="emerald" size="md" className="mb-5">
                  <PremiumWrenchIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                  IT Infrastructure & Support
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Preventive system maintenance, security patching, backup verification, and rapid-response SLA support for total peace of mind.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>24/7 Uptime & DNS Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Automated Backup & Disaster Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Security & Dependency Patching</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link to="/services" className="font-semibold text-brand-cyanAccent group-hover:text-white flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-mono">06 // IT</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Action Bar */}
        <div className="mt-14 text-center">
          <Button
            to="/services"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Full Services Breakdown & Deliverables
          </Button>
        </div>

      </div>
    </section>
  );
};
