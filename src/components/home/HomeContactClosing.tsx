import React from 'react';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Sparkles 
} from 'lucide-react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/companyInfo';

export const HomeContactClosing: React.FC = () => {
  return (
    <section className="py-24 bg-[#060B15] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline, Subtext & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Let&apos;s Collaborate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
                Have an ambitious project in mind? Let&apos;s talk.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Tell us what you&apos;re building. We&apos;ll give you honest technical feedback, an architectural estimate, and a direct path to execution.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="bg-white hover:bg-slate-100 text-slate-950 font-semibold px-6 py-3.5 rounded-xl shadow-sm text-sm"
                >
                  Start a Conversation
                </Button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Faiz & Teciaura Team, I would like to discuss a project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Contact Details Card */}
            <div className="lg:col-span-5 bg-white/[0.02] rounded-2xl border border-white/[0.08] p-6 sm:p-7 space-y-3 font-normal">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>Direct Contact Information</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              {/* Phone */}
              <a 
                href={COMPANY_INFO.contact.phoneCallLink}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">PHONE &amp; WHATSAPP</div>
                  <div className="text-sm font-semibold text-white">
                    {COMPANY_INFO.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">OFFICIAL EMAIL</div>
                  <div className="text-sm font-semibold text-white">
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
