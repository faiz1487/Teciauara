import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../data/companyInfo';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and data governance practices of Teciaura Technologies. Learn how we handle project inquiries and technical data."
      />

      {/* Header */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-3">
              <Shield className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Data Governance & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primaryNavy tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-brand-mutedText">
              Effective Date: January 1, 2026 | Last Updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-brand-bodyText text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              1. Overview
            </h2>
            <p>
              Teciaura Technologies ("Teciaura", "we", "us", or "our") respects your privacy and is dedicated to protecting any personal and commercial data shared with us. This Privacy Policy outlines our procedures concerning the collection, storage, use, and disclosure of information when you interact with our website or engage our engineering, web, cloud, or digital growth services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information strictly necessary to communicate, scope software projects, and deliver technical services:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Inquiry & Contact Details:</strong> Full name, business email address, phone number, company name, and project requirements submitted via our contact forms.
              </li>
              <li>
                <strong>Technical Specifications:</strong> Architectural notes, codebase requirements, server configurations, and system credentials provided directly during contracted technical engagements.
              </li>
              <li>
                <strong>Automated Analytics:</strong> Standard technical information such as browser type, operating system, and referral paths to evaluate website performance without personal profiling.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              3. How We Use Collected Information
            </h2>
            <p className="mb-3">We use the information collected for the following legitimate business purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-brand-border text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <span>Preparing accurate project quotes, milestones, and technical proposals</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-brand-border text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <span>Delivering contracted cloud, software, website, and support services</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-brand-border text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <span>Responding promptly to customer inquiries and service requests</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-lightBg border border-brand-border text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <span>Maintaining security, preventing bot spam, and system troubleshooting</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              4. Client Confidentiality & Project IP
            </h2>
            <p>
              We consider all proprietary software architectures, business logic, customer databases, and commercial data entrusted to us strictly confidential. We execute Non-Disclosure Agreements (NDAs) prior to receiving access to client repositories or server credentials. We never sell, lease, or monetize client data or code under any circumstance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              5. Data Security Standards
            </h2>
            <p>
              We apply industry-standard security practices, including TLS 1.3 encryption in transit, strict access control limits, and encrypted password vaulting. Access to client servers and repositories is restricted strictly to assigned engineers on a need-to-know basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              6. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or requests concerning your data, you can reach out directly to our privacy desk at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-brand-lightBg border border-brand-border font-mono text-xs space-y-1">
              <div><strong>Email:</strong> {COMPANY_INFO.contact.email}</div>
              <div><strong>Subject Line:</strong> Privacy & Data Governance Request</div>
              <div><strong>Entity:</strong> {COMPANY_INFO.name}, {COMPANY_INFO.contact.location}</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
