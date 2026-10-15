import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Cloud, Zap, ShieldCheck, 
  Play, Pause, ArrowRight, CheckCircle2, 
  Layers, Users, HeartHandshake, Sparkles, MessageCircle, Clock, Server, Monitor
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyInfo';

// Isolated memoized video panel to prevent re-renders from interrupting video playback
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

    // Viewport-aware playback
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
      <div className="relative rounded-2xl border border-white/[0.08] bg-black shadow-xl overflow-hidden group">
        {/* 16:9 Video Container */}
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
              className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-white/[0.1] text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-white" />
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
  const [activeTab, setActiveTab] = useState<'web' | 'cloud' | 'automation'>('web');

  const practicalSolutions = {
    web: {
      title: 'High-Converting Websites & Web Apps',
      badge: 'Digital Experience & Frontend',
      summary: 'Clean, lightning-fast web applications built for speed, conversion, and effortless customer navigation.',
      humanBenefit: 'Your pages load in under 800 milliseconds so visitors never bounce, and your business looks instantly credible.',
      keyPoints: [
        'Sub-second page load times (Core Web Vitals green)',
        'Built with React, Next.js, and TypeScript (no bloated plugins)',
        'Mobile-first responsive design tailored for phone users',
        'SEO-ready structure that Google search easily indexes',
      ],
      metrics: [
        { label: 'Avg Mobile Speed', value: '0.8s', color: 'text-emerald-400' },
        { label: 'Lighthouse Score', value: '98+', color: 'text-amber-400' },
        { label: 'Client Conversion', value: '+28%', color: 'text-cyan-400' },
      ],
      clientQuote: 'Visitors immediately commented on how smooth and modern our new site felt compared to our old WordPress theme.',
    },
    cloud: {
      title: 'Reliable Cloud Infrastructure & Backends',
      badge: 'AWS • Multi-AZ • DevOps',
      summary: 'Solid cloud foundations that scale smoothly without expensive servers or midnight emergency breakdowns.',
      humanBenefit: 'Sleep peacefully knowing your system is backed up daily, protected by firewall rules, and scales automatically.',
      keyPoints: [
        'Automated zero-downtime deployments (updates without user interruption)',
        'Multi-AZ cloud redundancy across AWS & modern providers',
        'Cloud cost optimization: no paying for idle, oversized servers',
        'Automated disaster recovery & encrypted database backups',
      ],
      metrics: [
        { label: 'Historical Uptime', value: '99.98%', color: 'text-emerald-400' },
        { label: 'Deploy Downtime', value: '0 sec', color: 'text-amber-400' },
        { label: 'Cost Waste Removed', value: 'Avg 30%', color: 'text-cyan-400' },
      ],
      clientQuote: 'They trimmed $1,200 off our monthly AWS invoice while actually making our application faster.',
    },
    automation: {
      title: 'Smart Automation & Internal Tools',
      badge: 'AI Workflows & Integration',
      summary: 'Custom workflows and AI agent pipelines that eliminate manual repetitive tasks and free up your staff.',
      humanBenefit: 'Cut out hours of copy-pasting between spreadsheets, email threads, and CRM systems every week.',
      keyPoints: [
        'Custom customer portals and employee dashboards',
        'Intelligent document and inquiry triage workflows',
        'Secure APIs connecting payment gateways, WhatsApp, and inventory',
        'Custom AI assistants trained strictly on your business knowledge',
      ],
      metrics: [
        { label: 'Time Saved / Week', value: '15+ hrs', color: 'text-emerald-400' },
        { label: 'Data Error Rate', value: '<0.1%', color: 'text-amber-400' },
        { label: 'Payback Period', value: '<60 days', color: 'text-cyan-400' },
      ],
      clientQuote: 'Our operations team now handles twice the daily order volume without hiring extra administrative staff.',
    },
  };

  const current = practicalSolutions[activeTab];

  return (
    <section 
      aria-label="What We Build & Practical Engineering"
      className="relative py-24 sm:py-32 bg-[#080E1C] text-white border-y border-slate-800/80 overflow-hidden"
    >
      {/* Warm ambient studio lighting */}
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[32rem] h-[32rem] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Clean & Direct */}
        <SectionHeading
          eyebrow="Solutions & Architecture"
          title="Technology that works reliably — in plain English."
          description="Great engineering should never feel complicated or intimidating. Explore what we build and the tangible commercial value it delivers for your business."
          align="center"
        />

        {/* Video Player Panel */}
        <VideoPlayerPanel />

        {/* INTERACTIVE VALUE EXPLORER */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Interactive Solution Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-300">
                  EXPLORE HOW WE HELP YOUR BUSINESS:
                </span>
              </div>

              {/* 3 Human-Friendly Tabs */}
              <div className="flex flex-wrap items-center bg-white/[0.04] rounded-xl p-1 border border-white/[0.08] gap-1 text-xs">
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'web'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Web &amp; Apps</span>
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'cloud'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Cloud &amp; Uptime</span>
                </button>
                <button
                  onClick={() => setActiveTab('automation')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'automation'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Automation &amp; AI</span>
                </button>
              </div>
            </div>

            {/* Tab Details Body */}
            <div className="p-6 sm:p-9 lg:p-10 space-y-8 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Solution Detail & Key Points (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300 text-xs font-medium">
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {current.summary}
                  </p>

                  {/* Real Human Benefit Callout */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 leading-relaxed flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium mb-0.5">The Real-World Impact:</strong>
                      {current.humanBenefit}
                    </div>
                  </div>

                  {/* Bullet Checklist */}
                  <ul className="space-y-2.5 pt-1">
                    {current.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Measurable Impact Stats & Founder Quote (5 cols) */}
                <div className="lg:col-span-5 space-y-5 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.08]">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold border-b border-white/[0.08] pb-2">
                    Measurable Outcomes Delivered
                  </h4>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {current.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className={`text-lg sm:text-xl font-bold ${m.color}`}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 leading-tight font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Founder quote */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{current.clientQuote}&rdquo;
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Button
                      to="/contact"
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full justify-center bg-white hover:bg-slate-100 text-slate-950 font-semibold border-white text-xs"
                    >
                      Ask How This Applies To Your Project
                    </Button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
