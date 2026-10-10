import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ContactForm } from '../components/contact/ContactForm';
import { COMPANY_INFO } from '../data/companyInfo';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Contact Us | Start a Project"
        description="Share a few details about your project goals and the Teciaura Technologies team will follow up to discuss next steps, scope, and technical architecture."
      />

      {/* Hero Section */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-card font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
              <span>Let's Discuss Your Objectives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tell Us About Your Project.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Share a few details about your goals and our team can follow up to discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form + Contact Details */}
      <section className="py-20 sm:py-24 bg-[#050B17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Project Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below. Required fields are marked with an asterisk (*).
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Direct Channels & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Channel 1: WhatsApp Instant Inquiry */}
              <div className="p-6 sm:p-7 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 border-t-emerald-400/50 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(16,185,129,0.15)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-200">
                      Direct WhatsApp Inquiry
                    </h3>
                    <p className="text-xs text-emerald-400/80">
                      Quick chat for preliminary questions
                    </p>
                  </div>
                </div>

                <p className="text-xs text-emerald-300/90 leading-relaxed mb-4 font-normal">
                  Prefer messaging directly? Connect via WhatsApp with your project outline.
                </p>

                <Button
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappMessage)}`}
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 text-white"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Message on WhatsApp
                </Button>
              </div>

              {/* Direct Channels Cards */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1528] border border-white/[0.08] border-t-white/[0.22] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)] space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyanAccent pb-2 border-b border-slate-800 font-mono">
                  Direct Communication Channels
                </h3>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-cyanAccent flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Business Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-bold text-white hover:text-brand-cyanAccent transition-colors font-mono"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-electricBlue flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Direct Telephone</span>
                    <a
                      href={COMPANY_INFO.contact.phoneCallLink}
                      className="text-sm font-mono font-medium text-white hover:text-brand-cyanAccent transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-cyanAccent flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-cyanAccent" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Location</span>
                    <span className="text-sm font-medium text-white">
                      {COMPANY_INFO.contact.location}
                    </span>
                    <span className="block text-xs text-slate-400">
                      Serving clients across India & globally
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-cyanAccent flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-cyanAccent" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Working Hours</span>
                    <span className="text-sm font-medium font-mono text-white">
                      {COMPANY_INFO.contact.businessHours}
                    </span>
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-brand-electricBlue flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Response Commitment</span>
                    <span className="text-xs text-slate-300">
                      {COMPANY_INFO.contact.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Card */}
              <div className="p-5 rounded-2xl bg-[#0B1528] border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white">Project Confidentiality: </span>
                  We treat all project specifications, technical architectures, and trade inquiries with complete commercial confidence. Mutual NDAs are readily signed upon request.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
