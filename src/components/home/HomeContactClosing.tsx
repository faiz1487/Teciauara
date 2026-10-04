import React from 'react';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Sparkles 
} from 'lucide-react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyInfo';

export const HomeContactClosing: React.FC = () => {
  return (
    <section className="py-24 bg-[#070F1E] border-t border-slate-800/80 relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-tr from-brand-electricBlue/20 via-brand-cyanAccent/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1A35] via-[#081429] to-[#040A15] border border-brand-electricBlue/40 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden">
          
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(#1677FF_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-25" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline, Subtext & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-brand-electricBlue/40 text-xs font-semibold text-brand-cyanAccent font-mono shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
                <span>LET'S COLLABORATE</span>
              </div>

              <h2 className="text-display-section font-extrabold text-white tracking-tight">
                Have an Ambitious Idea?{' '}
                <span className="bg-gradient-to-r from-brand-cyanAccent via-brand-electricBlue to-white bg-clip-text text-transparent block sm:inline">
                  Let’s Build It.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Tell us what you're imagining. We'll help you turn it into a practical digital solution.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow-blue hover:shadow-[0_0_25px_rgba(22,119,255,0.7)] font-bold"
                >
                  Start a Conversation
                </Button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Teciaura Team, I have an ambitious project idea.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#09152C] hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 text-white font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Contact Details Card */}
            <div className="lg:col-span-5 bg-[#061022]/90 rounded-2xl border border-slate-700/80 p-6 sm:p-7 space-y-4 font-normal shadow-card">
              <div className="text-xs uppercase tracking-wider font-mono font-bold text-brand-cyanAccent pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Direct Contact Information</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Phone */}
              <a 
                href={COMPANY_INFO.contact.phoneCallLink}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-brand-cyanAccent/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-electricBlue/20 text-brand-cyanAccent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">PHONE & WHATSAPP</div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                    {COMPANY_INFO.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-brand-cyanAccent/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-cyanAccent/20 text-brand-cyanAccent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">OFFICIAL EMAIL</div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-cyanAccent transition-colors">
                    {COMPANY_INFO.contact.email}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">HEADQUARTERS</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {COMPANY_INFO.contact.location}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">WORKING HOURS</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {COMPANY_INFO.contact.businessHours}
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
