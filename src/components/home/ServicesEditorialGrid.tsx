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
    <section id="services" className="py-24 bg-[#060B15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Heading */}
        <SectionHeading
          eyebrow="What We Build For You"
          title="Practical Engineering. Zero Tech Headaches."
          description="No confusing buzzwords or disappearing freelancers. Just senior engineers building fast websites, scalable cloud setups, and software that actually grow your revenue."
          align="center"
        />

        {/* Asymmetrical Bento Grid */}
        <div className="mt-14 space-y-6">
          
          {/* ROW 1: Two Featured Anchor Cards (7 cols + 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Cloud & DevOps (7 cols) - Flagship Spotlight */}
            <div className="lg:col-span-7 group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <PremiumIconBadge variant="blue" size="lg">
                    <PremiumCloudIcon className="w-7 h-7" />
                  </PremiumIconBadge>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Multi-AZ Cloud Active</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2">
                  <span>Flagship Practice</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight transition-colors">
                  Cloud &amp; DevOps Architecture
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  We build resilient cloud infrastructure, automate deployment pipelines with zero downtime, and eliminate manual server operations using declarative Terraform and container orchestration.
                </p>

                {/* Human-Centered Infrastructure Outcome */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-white/[0.06]">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Our Infrastructure Standard
                    </span>
                    <span className="text-emerald-400 font-medium">Zero-Downtime Guarantee</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-0.5 text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>30–45% Cloud Bill Savings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Automated Daily Backups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Direct WhatsApp Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>100% Code &amp; AWS Ownership</span>
                    </div>
                  </div>
                </div>

                {/* Key Deliverables Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AWS Infrastructure', 'Terraform IaC', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Cloud Cost Optimization'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300 transition-colors"
                >
                  <span>Explore Cloud &amp; DevOps Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">Cloud &amp; DevOps</span>
              </div>
            </div>

            {/* Card 2: Web Design & Dev (5 cols) - Visual Frontend Showcase */}
            <div className="lg:col-span-5 group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <PremiumIconBadge variant="cyan" size="lg">
                    <PremiumLayoutIcon className="w-7 h-7" />
                  </PremiumIconBadge>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Lighthouse 99+</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2">
                  <span>Digital Experience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight transition-colors">
                  Web Design &amp; Dev
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Bespoke, lightning-fast digital experiences engineered with React, TypeScript, and modern CSS. Built for sub-second speeds, flawless responsiveness, and conversion.
                </p>

                {/* Performance Metric Badge Card */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                    <span>Core Web Vitals Pass Rate</span>
                    <span className="text-emerald-400 font-medium">100% (Green)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400">LCP</div>
                      <div className="text-xs font-bold text-emerald-400">0.8s</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400">FID</div>
                      <div className="text-xs font-bold text-emerald-400">12ms</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[10px] text-slate-400">CLS</div>
                      <div className="text-xs font-bold text-emerald-400">0.00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Accessible UI'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300 transition-colors"
                >
                  <span>Explore Web Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">Web &amp; UI</span>
              </div>
            </div>

          </div>

          {/* ROW 2: Four Companion Bento Cards (3 cols each on lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 3: Custom Software & Apps */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="indigo" size="md" className="mb-5">
                  <PremiumCodeIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white transition-colors">
                  Custom Software &amp; Apps
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tailored web applications, internal tools, customer portals, and API integrations engineered for daily commercial scale.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>SaaS Product Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Enterprise REST &amp; GraphQL APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Role-Based Access Control</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <Link to="/services" className="font-medium text-white hover:text-slate-300 flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-medium">Web Apps</span>
              </div>
            </div>

            {/* Card 4: AI & Intelligent Automation */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="purple" size="md" className="mb-5">
                  <PremiumAiBrainIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white transition-colors">
                  AI &amp; Intelligent Automation
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Custom LLM agent workflows, intelligent document pipelines, and autonomous integrations that eliminate operational drag.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Proprietary Data RAG Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Autonomous Support Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Workflow Orchestration</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <Link to="/services" className="font-medium text-white hover:text-slate-300 flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-medium">Automation</span>
              </div>
            </div>

            {/* Card 5: Digital Marketing & SEO */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="cyan" size="md" className="mb-5">
                  <PremiumTrendingIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white transition-colors">
                  Digital Marketing &amp; SEO
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Audit technical search health, capture commercial buyer intent queries, and drive high-intent organic traffic growth.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Comprehensive Technical SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>High-Intent Keyword Roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>Conversion Rate Optimization</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <Link to="/services" className="font-medium text-white hover:text-slate-300 flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-medium">Growth &amp; SEO</span>
              </div>
            </div>

            {/* Card 6: IT Infrastructure & Support */}
            <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
              <div>
                <PremiumIconBadge variant="emerald" size="md" className="mb-5">
                  <PremiumWrenchIcon className="w-6 h-6" />
                </PremiumIconBadge>
                <h4 className="text-lg font-bold text-white transition-colors">
                  IT Infrastructure &amp; Support
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Preventive system maintenance, security patching, backup verification, and rapid-response SLA support for total peace of mind.
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>24/7 Uptime &amp; DNS Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Automated Backup &amp; Disaster Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Security &amp; Dependency Patching</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <Link to="/services" className="font-medium text-white hover:text-slate-300 flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-500 font-medium">Support</span>
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
