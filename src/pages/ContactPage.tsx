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
      <section className="bg-[#070C18] border-b border-white/[0.08] pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Direct Engineering Communication</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Tell us about your project.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Share a few details about your technical requirements and our engineering team will respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form + Contact Details */}
      <section className="py-20 sm:py-24 bg-[#060B15]">
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
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/[0.08]">
                  Direct Communication Channels
                </h3>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">Business Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-slate-300 transition-colors font-mono"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">Direct Telephone</span>
                    <a
                      href={COMPANY_INFO.contact.phoneCallLink}
                      className="text-sm font-mono font-medium text-white hover:text-slate-300 transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">Location</span>
                    <span className="text-sm font-medium text-white">
                      {COMPANY_INFO.contact.location}
                    </span>
                    <span className="block text-xs text-slate-500">
                      Serving clients across India & globally
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">Working Hours</span>
                    <span className="text-sm font-medium font-mono text-white">
                      {COMPANY_INFO.contact.businessHours}
                    </span>
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-white/[0.08]">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">Response Commitment</span>
                    <span className="text-xs text-slate-300">
                      {COMPANY_INFO.contact.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Project Confidentiality: </span>
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
