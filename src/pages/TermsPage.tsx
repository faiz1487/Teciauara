import React from 'react';
import { Scale, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../data/companyInfo';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description="Terms of service and commercial agreement principles of Teciaura Technologies."
      />

      {/* Header */}
      <section className="bg-brand-lightBg border-b border-brand-border pt-10 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />
          
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-electricBlue mb-3">
              <Scale className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Service Agreement Principles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primaryNavy tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm text-brand-mutedText">
              Effective Date: January 1, 2026 | Last Updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-brand-bodyText text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the Teciaura Technologies website or contracting any of our software, cloud, website development, or digital support services, you agree to comply with and be bound by these Terms and Conditions and our formal Statement of Work (SOW) agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              2. Scope of Services & Deliverables
            </h2>
            <p>
              All client engagements are executed according to a structured Scope of Work specifying milestones, deliverables, timelines, and acceptance criteria. Any requested modifications, additional feature branches, or infrastructure adjustments outside the agreed scope are evaluated via mutual change order documentation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              3. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full payment for contracted milestones, all custom code, user interfaces, documentation, and specific software assets created uniquely for the client become the exclusive property of the client, unless explicitly agreed otherwise. Teciaura retains ownership of pre-existing internal libraries, general-purpose boilerplates, and open-source contributions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              4. Client Cooperation & Access
            </h2>
            <p>
              Timely delivery depends on reciprocal client collaboration, including timely provision of domain DNS credentials, cloud console access, brand assets, and feedback approvals within agreed review windows.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              5. Warranties & Disclaimers
            </h2>
            <p>
              Teciaura Technologies warrants that all services will be rendered with reasonable professional skill and diligence adhering to standard industry practices. We do not guarantee specific organic search engine rankings, third-party platform API uptime, or commercial revenue outcomes, as these external factors remain beyond engineering control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms and any project disputes arising hereunder shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Karnataka, India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-primaryNavy mb-3">
              7. Inquiries Regarding Terms
            </h2>
            <p>
              For legal, contract, or compliance inquiries, please direct correspondence to:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-brand-lightBg border border-brand-border font-mono text-xs space-y-1">
              <div><strong>Email:</strong> {COMPANY_INFO.contact.email}</div>
              <div><strong>Attention:</strong> Contracts & Operations Lead</div>
              <div><strong>Entity:</strong> {COMPANY_INFO.name}</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
