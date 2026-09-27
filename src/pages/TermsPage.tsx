import React from 'react';
import { Scale } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../data/companyInfo';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#050B17] text-slate-300">
      <SEOHead
        title="Terms and Conditions"
        description="Terms of service and commercial agreement principles of Teciaura Technologies."
      />

      {/* Header */}
      <section className="bg-[#070F1E] border-b border-slate-800/80 pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />
          
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-slate-800 text-xs font-semibold text-brand-cyanAccent mb-3 font-mono">
              <Scale className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Service Agreement Principles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm text-slate-400 font-mono">
              Effective Date: January 1, 2026 | Last Updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-[#050B17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-400 font-normal">
              By accessing the Teciaura Technologies website or contracting any of our software, cloud, website development, or digital support services, you agree to comply with and be bound by these Terms and Conditions and our formal Statement of Work (SOW) agreements.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              2. Scope of Services & Deliverables
            </h2>
            <p className="text-slate-400 font-normal">
              All client engagements are executed according to a structured Scope of Work specifying milestones, deliverables, timelines, and acceptance criteria. Any requested modifications, additional feature branches, or infrastructure adjustments outside the agreed scope are evaluated via mutual change order documentation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              3. Intellectual Property Rights
            </h2>
            <p className="text-slate-400 font-normal">
              Upon receipt of full payment for contracted milestones, all custom code, user interfaces, documentation, and specific software assets created uniquely for the client become the exclusive property of the client, unless explicitly agreed otherwise. Teciaura retains ownership of pre-existing internal libraries, general-purpose boilerplates, and open-source contributions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              4. Warranties & Disclaimers
            </h2>
            <p className="text-slate-400 font-normal">
              Teciaura Technologies warrants that all services will be rendered with reasonable professional skill and diligence adhering to standard industry practices. We do not guarantee specific organic search engine rankings, third-party platform API uptime, or commercial revenue outcomes, as these external factors remain beyond engineering control.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              5. Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-400 font-normal">
              These Terms and any project disputes arising hereunder shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Karnataka, India.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0B1528] border border-slate-800 shadow-card">
            <h2 className="text-xl font-bold text-white mb-3">
              6. Inquiries Regarding Terms
            </h2>
            <p className="text-slate-400 mb-3 font-normal">
              For legal, contract, or compliance inquiries, please direct correspondence to:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-1.5">
              <div><strong className="text-brand-cyanAccent">Email:</strong> {COMPANY_INFO.contact.email}</div>
              <div><strong className="text-brand-cyanAccent">Attention:</strong> Contracts & Operations Lead</div>
              <div><strong className="text-brand-cyanAccent">Entity:</strong> {COMPANY_INFO.name}</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
