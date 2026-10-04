import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  const bannerContent = (
    <div className="flex items-center space-x-6 sm:space-x-8 px-4 flex-shrink-0 text-xs sm:text-sm font-medium tracking-wide">
      {/* Segment 1: 2026 Special Free Business Audit */}
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-electricBlue/20 text-brand-cyanAccent font-bold text-[11px] font-mono border border-brand-electricBlue/30">
          <Sparkles className="w-3 h-3 text-brand-cyanAccent animate-pulse" />
          <span>2026 SPECIAL</span>
        </span>
        <span className="text-white font-semibold">
          🚀 Claim your <span className="text-brand-cyanAccent underline decoration-brand-cyanAccent/40 underline-offset-2">Free Business Audit & Strategy Session</span> at <span className="text-emerald-400 font-bold">0% Cost!</span>
        </span>
      </span>

      {/* Divider */}
      <span className="text-brand-electricBlue/50 select-none">|</span>

      {/* Segment 2: Web & Software Development */}
      <span className="inline-flex items-center gap-1.5 text-slate-200">
        <span className="text-emerald-400 font-bold">✅</span>
        <span className="font-semibold text-white">Professional Web & Software Development</span>
      </span>

      {/* Divider */}
      <span className="text-brand-electricBlue/50 select-none">|</span>

      {/* Segment 3: Digital Marketing */}
      <span className="inline-flex items-center gap-1.5 text-slate-200">
        <span>📈</span>
        <span>Scale your business with our <strong className="text-brand-cyanAccent font-semibold">Expert Digital Marketing!</strong></span>
      </span>

      {/* Divider */}
      <span className="text-brand-electricBlue/50 select-none">|</span>

      {/* Segment 4: CTA Button */}
      <a
        href="/#free-audit"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-brand-cyanAccent to-brand-electricBlue text-[#050B17] font-bold text-xs shadow-glow-cyan hover:shadow-glow-blue hover:brightness-110 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
      >
        <span>Claim Your Spot Now!</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>

      {/* Extra space before repeating */}
      <span className="text-slate-700 select-none px-2">•</span>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-r from-[#061226] via-[#091D42] to-[#061226] border-b border-brand-electricBlue/30 overflow-hidden select-none z-50 py-2 sm:py-2.5 marquee-container group">
      {/* Ambient background highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      
      {/* Top glowing laser line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyanAccent/60 to-transparent" />

      {/* Marquee Track (Double duplicate for seamless infinite scrolling) */}
      <div className="flex animate-marquee cursor-default">
        {bannerContent}
        {bannerContent}
      </div>
    </div>
  );
};
