import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Play, Pause, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
import { 
  PremiumCloudIcon, 
  PremiumAiBrainIcon, 
  PremiumCodeIcon, 
  PremiumLayoutIcon,
  PremiumShieldCheckIcon 
} from '../common/PremiumIcons';
import { Button } from '../common/Button';

interface HeroVideoSectionProps {
  onScrollClick?: () => void;
}

const CATEGORY_PILLS = [
  {
    name: 'Cloud & DevOps',
    icon: PremiumCloudIcon,
    tag: 'Kubernetes • CI/CD',
    href: '/services#cloud-devops',
  },
  {
    name: 'AI Solutions',
    icon: PremiumAiBrainIcon,
    tag: 'LLMs • Neural Agents',
    href: '/services#ai-solutions',
  },
  {
    name: 'Software Development',
    icon: PremiumCodeIcon,
    tag: 'Enterprise • Scalable',
    href: '/services#software-dev',
  },
  {
    name: 'Web Development',
    icon: PremiumLayoutIcon,
    tag: 'Modern • Ultra-fast',
    href: '/services#web-dev',
  },
];

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ onScrollClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoStarted, setVideoStarted] = useState<boolean>(false);

  // Auto-play attempt on mount and on first user interaction
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
          .then(() => {
            setIsPlaying(true);
            setVideoStarted(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    };

    // Attempt autoplay immediately
    startPlayback();

    // Browser power-saver fallback: resume on any interaction
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

  // Manual play/pause toggle
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = true;
      video.play()
        .then(() => {
          setIsPlaying(true);
          setVideoStarted(true);
        })
        .catch(() => {});
    }
  };

  const handleScrollDown = () => {
    if (onScrollClick) {
      onScrollClick();
      return;
    }
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      aria-label="Teciaura Technologies Hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#050B17] text-white"
    >
      {/* ========================================================================= */}
      {/* 1. CINEMATIC VIDEO BACKGROUND LAYER (Z-INDEX: 0)                          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Instant high-res base plate: ALWAYS rendered so screen is NEVER blank */}
        <img
          src="/hero-tech-poster.jpg"
          alt="Teciaura Technologies Cybernetic Infrastructure Environment"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-center"
          loading="eager"
          fetchPriority="high"
        />

        {/* Cinematic Video Layer */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-tech-poster.jpg"
          onPlaying={() => {
            setIsPlaying(true);
            setVideoStarted(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-center transition-opacity duration-700 ${
            videoStarted ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <source src="/hero-tech-bg.mp4" type="video/mp4" />
          <source src="/hero-tech-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* ========================================================================= */}
      {/* 2. MULTI-LAYER CINEMATIC GRADIENT OVERLAYS (Z-INDEX: 1)                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Left text safe zone: subtle dark on left for text readability, open and bright on right for video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B17]/90 via-[#050B17]/65 via-30% md:via-[#050B17]/40 md:via-45% lg:via-[#050B17]/15 lg:via-55% to-transparent" />

        {/* Top Navbar Soft Vignette Blend */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#050B17]/80 via-[#050B17]/25 to-transparent" />

        {/* Bottom Soft Vignette Blend into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050B17] via-[#050B17]/50 to-transparent" />

        {/* Ambient subtle cyan/blue back-glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyanAccent/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-electricBlue/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 3. EDITABLE HTML/CSS FOREGROUND CONTENT (Z-INDEX: 10)                     */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-[40rem] space-y-5 sm:space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071328]/85 border border-brand-cyanAccent/30 backdrop-blur-md text-xs font-semibold shadow-[0_0_20px_rgba(0,200,232,0.15)] hover:border-brand-cyanAccent/60 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyanAccent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyanAccent" />
            </span>
            <span className="tracking-[0.16em] uppercase text-[11px] sm:text-xs font-bold text-brand-cyanAccent font-mono">
              CLOUD • DEVOPS • AI • SOFTWARE ENGINEERING
            </span>
          </div>

          {/* Main Headline: 5-10% more compact with tighter line-height */}
          <h1 className="text-3xl sm:text-[2.15rem] md:text-[2.65rem] lg:text-[3.15rem] xl:text-[3.55rem] font-extrabold tracking-tight leading-[1.015] text-white">
            <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              WE ENGINEER THE CLOUD
            </span>
            <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              BEHIND AMBITIOUS
            </span>
            <span className="block bg-gradient-to-r from-brand-cyanAccent via-sky-300 to-brand-electricBlue bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,200,232,0.35)]">
              BUSINESSES.
            </span>
          </h1>

          {/* Subtitle / Supporting copy */}
          <p className="text-base sm:text-lg lg:text-[1.0625rem] text-slate-200/90 leading-relaxed max-w-xl font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
            Production-ready cloud infrastructure, DevOps automation and intelligent software engineered for security, scale and reliability.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              className="shadow-[0_0_35px_rgba(22,119,255,0.45)] hover:shadow-[0_0_50px_rgba(0,200,232,0.7)] font-bold px-8 py-4 ring-1 ring-white/20 text-base"
            >
              Start a Project
            </Button>
            <Button
              to="/portfolio"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              className="border-slate-700/80 hover:border-brand-cyanAccent/60 bg-[#071328]/85 hover:bg-[#0B1A38] backdrop-blur-md px-7 py-4 text-base"
            >
              Explore Our Work
            </Button>
          </div>

          {/* Category Pills Strip */}
          <div className="pt-6">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
              Core Capabilities & Architecture
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {CATEGORY_PILLS.map((pill) => {
                const IconComponent = pill.icon;
                return (
                  <a
                    key={pill.name}
                    href={pill.href}
                    className="group relative flex flex-col p-3 rounded-xl bg-[#0B1528]/80 border border-slate-800/90 hover:border-brand-cyanAccent/60 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,200,232,0.18)]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className="w-4 h-4 text-brand-cyanAccent group-hover:text-white transition-colors" />
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                        {pill.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono truncate">
                      {pill.tag}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Security & Reliability Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <PremiumShieldCheckIcon className="w-4 h-4 text-brand-cyanAccent" />
              <span className="text-slate-300">99.99% Uptime Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-slate-300">Production-Ready Deployment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
              <span className="text-slate-300">Enterprise AI Security</span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. USER AGENCY & CONTROLS: Background Video Play/Pause Toggle (Z-INDEX: 20)*/}
      {/* ========================================================================= */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause cinematic background video" : "Play cinematic background video"}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1528]/85 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-cyanAccent/50 backdrop-blur-md text-xs text-slate-300 hover:text-white transition-all shadow-subtle group cursor-pointer"
          title={isPlaying ? "Pause Background Motion" : "Play Background Motion"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-brand-cyanAccent group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-mono">Motion Active</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-brand-electricBlue group-hover:scale-110 transition-transform animate-pulse" />
              <span className="text-[11px] font-mono text-brand-cyanAccent">Click to Play Motion</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 5. BOTTOM SCROLL INDICATOR (Z-INDEX: 20)                                  */}
      {/* ========================================================================= */}
      <div 
        onClick={handleScrollDown}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-cyanAccent transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest font-semibold group-hover:tracking-wider transition-all">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-cyanAccent" />
      </div>
    </section>
  );
};
