import React from 'react';
import { Star, MessageCircle, Quote, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { COMPANY_INFO } from '../../data/companyInfo';

export const ClientTestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#060B15] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            <Quote className="w-3.5 h-3.5 text-slate-400" />
            <span>Founder Stories &amp; Results</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Don&apos;t take our word for it — ask the founders we build for.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We judge our success by one metric: whether our clients feel supported, stress-free, and proud of what we deliver together.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="group p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars and Impact Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3" />
                    <span>{t.impactMetric}</span>
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-white/[0.1] shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.role}, <span className="text-slate-300">{t.company}</span>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {t.location}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-xs text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct Chat Hotline Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-300 inline-flex items-center gap-2">
            <span>Want to speak with our past clients or see live production links?</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Faiz, I saw the client testimonials on Teciaura and would like to learn more about your past projects.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4 flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4 inline" />
              <span>Ask us on WhatsApp</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
