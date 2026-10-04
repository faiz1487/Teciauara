import React, { useState } from 'react';
import { 
  CheckCircle2, MessageCircle, ArrowRight, TrendingUp, Sparkles, Star, Zap 
} from 'lucide-react';
import { FreeAuditModal } from './FreeAuditModal';
import { COMPANY_INFO } from '../../data/companyInfo';

export const FreeAuditSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checklistItems = [
    'Website Speed Analysis',
    'SEO & Google Ranking Audit',
    'Mobile Responsiveness Check',
    'Security & Technical Review',
    'Competitor Benchmarking',
    'Lead Conversion Recommendations',
  ];

  const reportItems = [
    'SEO Score Report',
    'Page Speed Insights',
    'Technical Error Detection',
    'Mobile Optimization Review',
    'Growth Opportunities',
  ];

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Teciaura Team, I would like to claim the Free Website Audit Report.')}`;

  return (
    <section id="free-audit" className="py-20 lg:py-24 relative overflow-hidden scroll-mt-24 bg-[#050B17]">
      {/* Background Container matching dark theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow behind container */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-electricBlue/25 via-brand-cyanAccent/20 to-brand-primaryNavy/30 rounded-3xl blur-2xl -z-10 animate-pulse-slow" />

          {/* Main Card with Deep Dark Glassmorphism */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#091730] via-[#0B1E40] to-[#061124] border border-brand-electricBlue/35 shadow-elevated p-8 sm:p-12 lg:p-14 overflow-hidden backdrop-blur-xl">
            
            {/* Ambient Lighting & Glow Highlights */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-electricBlue/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:22px_22px] pointer-events-none opacity-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              
              {/* Left Column: Offer Content & Checklist (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-brand-electricBlue/40 text-xs font-semibold text-brand-cyanAccent font-mono shadow-card">
                  <span className="text-sm leading-none">🚀</span>
                  <span className="tracking-wider uppercase">LIMITED TIME OFFER</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-display-section font-extrabold text-white tracking-tight">
                  Your Website Has Potential.{' '}
                  <span className="bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-white bg-clip-text text-transparent">
                    Let’s Unlock It.
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                  Get a complimentary review of your website's performance, SEO, responsiveness, and user experience.
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-electricBlue to-brand-cyanAccent hover:brightness-110 text-white font-bold text-sm tracking-wide transition-all shadow-glow-blue hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Get My Free Website Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-[#0B1528] hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 text-white font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Microcopy Trust Line */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium pt-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Professional Audit • No Cost • No Obligation</span>
                </div>
              </div>

              {/* Right Column: Executive Sample Audit Card (5 cols on lg) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-[#081427]/95 text-white p-7 sm:p-8 shadow-elevated border border-brand-electricBlue/40 backdrop-blur-xl flex flex-col justify-between relative transform hover:-translate-y-1 hover:border-brand-cyanAccent/70 transition-all duration-300 group">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                    <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
                      SAMPLE AUDIT PREVIEW
                    </span>
                    <span className="text-emerald-400 font-bold">100% COMPLIMENTARY</span>
                  </div>

                  {/* Overall Score Badge */}
                  <div className="py-5 text-center">
                    <div className="inline-flex flex-col items-center justify-center w-24 h-24 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] mb-3">
                      <span className="text-3xl font-extrabold text-white font-mono">98</span>
                      <span className="text-[10px] text-emerald-400 font-bold tracking-wider">GRADE A+</span>
                    </div>
                    <div className="text-sm font-bold text-white">Full-Stack Website Health</div>
                    <p className="text-xs text-slate-400 mt-0.5">Speed, SEO, Responsiveness & Code Quality</p>
                  </div>

                  {/* Benchmark Bars */}
                  <div className="space-y-3 font-mono text-xs border-t border-slate-800/80 pt-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Page Speed & Core Vitals</span>
                        <span className="text-emerald-400 font-bold">0.8s (Fast)</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[98%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Google Search & SEO Index</span>
                        <span className="text-brand-cyanAccent font-bold">100/100</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-cyanAccent rounded-full w-[100%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Mobile UX & Viewports</span>
                        <span className="text-brand-electricBlue font-bold">100% Pass</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-electricBlue rounded-full w-[96%]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-5 mt-4 border-t border-slate-800 text-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-3 rounded-xl bg-brand-electricBlue hover:bg-brand-electricHover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow-blue active:scale-98"
                    >
                      Claim Your Audit Report
                    </button>
                    <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Executive PDF sent within 24 hours</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Free Audit Modal */}
      <FreeAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
