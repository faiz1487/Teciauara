import React, { useState } from 'react';
import { 
  CheckCircle2, MessageCircle, ArrowRight, Sparkles, Shield, Cpu, Cloud, Terminal
} from 'lucide-react';
import { FreeAuditModal } from './FreeAuditModal';
import { COMPANY_INFO } from '../../data/companyInfo';

export const FreeAuditSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checklistItems = [
    'Cloud Cost & AWS/GCP Resource Optimization',
    'DevOps CI/CD Automation & Release Velocity',
    'Zero-Trust Security & Access Governance',
    'Database & Latency Profiling (P99 Metrics)',
    'Microservices & High Availability (HA) Architecture',
    'Disaster Recovery & Production SLA Protocols',
  ];

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Teciaura Engineering Team, I would like to request an Architecture & Cloud Infrastructure Assessment.')}`;

  return (
    <section id="architecture-assessment" className="py-20 lg:py-24 relative overflow-hidden scroll-mt-24 bg-[#050B17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Clean Minimal Border */}
        <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 lg:p-14 overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Offer Content & Checklist (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Complimentary Engineering &amp; Architecture Audit</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
                Evaluate your website &amp; cloud setup before you scale.
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Identify performance bottlenecks, slow loading times, security vulnerabilities, and cloud bill waste with a direct, comprehensive code review by our senior engineers.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Free Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>

              {/* Trust Line */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>100% Confidential • NDA Protected • Direct Senior Engineer Review</span>
              </div>
            </div>

            {/* Right Column: Clean Scorecard Blueprint Card (5 cols on lg) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white/[0.02] text-white p-7 sm:p-8 border border-white/[0.08] flex flex-col justify-between">
                
                {/* Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Health Benchmark
                  </span>
                  <span className="text-emerald-400 font-medium">Free 48h Turnaround</span>
                </div>

                {/* Score Summary */}
                <div className="py-6 text-center">
                  <div className="inline-flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-3">
                    <span className="text-2xl font-bold text-white">99%+</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Target</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Production Reliability Index</div>
                  <p className="text-xs text-slate-400 mt-0.5">Speed, Cost, Security &amp; Uptime Health</p>
                </div>

                {/* Benchmark Bars */}
                <div className="space-y-3.5 text-xs border-t border-white/[0.06] pt-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300 text-[11px]">
                      <span>Cloud Cost Efficiency</span>
                      <span className="text-emerald-400 font-medium">~35% Savings Potential</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300 text-[11px]">
                      <span>Page Speed &amp; Core Web Vitals</span>
                      <span className="text-white font-medium">Sub-Second Target</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full w-[95%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300 text-[11px]">
                      <span>Code &amp; Security Hardening</span>
                      <span className="text-slate-300 font-medium">Verified</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-slate-300 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-4 border-t border-white/[0.06] text-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    Claim Free Architecture Audit
                  </button>
                  <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Includes Actionable PDF Roadmap</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Assessment Modal */}
      <FreeAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
