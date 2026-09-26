import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ContactForm } from '../components/contact/ContactForm';
import { COMPANY_INFO } from '../data/companyInfo';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Us | Start a Project"
        description="Share a few details about your project goals and the Teciaura Technologies team will follow up to discuss next steps, scope, and technical architecture."
      />

      {/* Hero Section */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-4 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-cyanAccent" />
              <span>Let's Discuss Your Objectives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primaryNavy tracking-tight leading-tight">
              Tell Us About Your Project.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-brand-bodyText leading-relaxed">
              Share a few details about your goals and our team can follow up to discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form + Contact Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-primaryNavy">
                  Project Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-brand-mutedText mt-1">
                  Fill out the form below. Required fields are marked with an asterisk (*).
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Direct Channels & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Channel 1: WhatsApp Instant Inquiry */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-950">
                      Direct WhatsApp Inquiry
                    </h3>
                    <p className="text-xs text-emerald-800">
                      Quick chat for preliminary questions
                    </p>
                  </div>
                </div>

                <p className="text-xs text-emerald-900 leading-relaxed mb-4">
                  Prefer messaging directly? Connect via WhatsApp with your project outline.
                </p>

                <Button
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappMessage)}`}
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-700"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Message on WhatsApp
                </Button>

                <p className="text-[10px] text-emerald-700 italic text-center mt-2.5">
                  * Configurable placeholder: {COMPANY_INFO.contact.phonePlaceholder}
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primaryNavy pb-2 border-b border-brand-border">
                  Direct Communication Channels
                </h3>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-mutedText">Business Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-bold text-brand-primaryNavy hover:text-brand-electricBlue transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-mutedText">Telephone (Placeholder)</span>
                    <span className="text-sm font-mono font-medium text-brand-primaryNavy">
                      {COMPANY_INFO.contact.phonePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-cyanAccent flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-electricBlue" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-mutedText">Location</span>
                    <span className="text-sm font-medium text-brand-primaryNavy">
                      {COMPANY_INFO.contact.location}
                    </span>
                    <span className="block text-xs text-brand-mutedText">
                      Serving clients across India & globally
                    </span>
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-brand-border/60">
                  <div className="w-9 h-9 rounded-lg bg-brand-lightBg border border-brand-border flex items-center justify-center text-brand-electricBlue flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-brand-mutedText">Response Commitment</span>
                    <span className="text-xs text-brand-bodyText">
                      {COMPANY_INFO.contact.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Card */}
              <div className="p-5 rounded-2xl bg-brand-lightBg border border-brand-border flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <div className="text-xs text-brand-bodyText leading-relaxed">
                  <span className="font-bold text-brand-primaryNavy">Project Confidentiality: </span>
                  We treat all project specifications, technical architectures, and trade inquiries with complete commercial confidence. Mutual NDAs are readily signed upon request.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
