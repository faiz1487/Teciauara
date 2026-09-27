import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../data/companyInfo';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and data governance practices of Teciaura Technologies. Learn how we handle project inquiries and technical data."
      />

      {/* Header */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-3 font-mono">
              <Shield className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Data Governance & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-400 font-mono">
              Effective Date: January 1, 2026 | Last Updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-[#050B17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              1. Overview
            </h2>
            <p className="text-slate-400 font-normal">
              Teciaura Technologies ("Teciaura", "we", "us", or "our") respects your privacy and is dedicated to protecting any personal and commercial data shared with us. This Privacy Policy outlines our procedures concerning the collection, storage, use, and disclosure of information when you interact with our website or engage our engineering, web, cloud, or digital growth services.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-4 text-slate-400 font-normal">
              We collect information strictly necessary to communicate, scope software projects, and deliver technical services:
            </p>
            <ul className="space-y-3 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Inquiry & Contact Details:</strong> Full name, business email address, phone number, company name, and project requirements submitted via our contact forms.
              </li>
              <li>
                <strong className="text-white">Technical Specifications:</strong> Architectural notes, codebase requirements, server configurations, and system credentials provided directly during contracted technical engagements.
              </li>
              <li>
                <strong className="text-white">Automated Analytics:</strong> Standard technical information such as browser type, operating system, and referral paths to evaluate website performance without personal profiling.
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              3. How We Use Collected Information
            </h2>
            <p className="mb-4 text-slate-400 font-normal">We use the information collected for the following legitimate business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <span>Preparing accurate project quotes, milestones, and technical proposals</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <span>Delivering contracted cloud, software, website, and support services</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <span>Responding promptly to customer inquiries and service requests</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <span>Maintaining security, preventing bot spam, and system troubleshooting</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              4. Client Confidentiality & Project IP
            </h2>
            <p className="text-slate-400 font-normal">
              We consider all proprietary software architectures, business logic, customer databases, and commercial data entrusted to us strictly confidential. We execute Non-Disclosure Agreements (NDAs) prior to receiving access to client repositories or server credentials. We never sell, lease, or monetize client data or code under any circumstance.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              5. Contact for Privacy Matters
            </h2>
            <p className="text-slate-400 mb-3 font-normal">
              If you have any questions or requests concerning your data, you can reach out directly to our privacy desk at:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-1.5">
              <div><strong className="text-brand-cyanAccent">Email:</strong> {COMPANY_INFO.contact.email}</div>
              <div><strong className="text-brand-cyanAccent">Subject Line:</strong> Privacy & Data Governance Request</div>
              <div><strong className="text-brand-cyanAccent">Entity:</strong> {COMPANY_INFO.name}, {COMPANY_INFO.contact.location}</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
