import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, CheckCircle2, AlertCircle, Info, Mail, Sparkles, 
  Check, Copy, Clock, ShieldCheck, MessageCircle, ExternalLink, 
  Terminal, Globe, Bot, Zap, Cloud, Code, RefreshCw
} from 'lucide-react';
import { ContactFormData } from '../../types';
import { COMPANY_INFO } from '../../data/companyInfo';
import { Button } from '../common/Button';

// Enterprise Service Offerings
const SERVICE_CAPABILITIES = [
  {
    id: 'free-audit',
    label: 'Free Architecture Audit',
    badge: '2026 Special (0% Cost)',
    sub: 'Full Stack & Cloud Analysis • No Obligation',
    icon: Sparkles,
    value: 'Free Business Audit & Strategy',
    highlight: true,
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps Infrastructure',
    sub: 'AWS • Multi-AZ • Docker • CI/CD • IaC',
    icon: Cloud,
    value: 'Cloud Infrastructure & DevOps',
  },
  {
    id: 'web-saas',
    label: 'Full-Stack Web & SaaS',
    sub: 'React • Next.js • Fast APIs • Scalable Mesh',
    icon: Globe,
    value: 'High-Performance Web & SaaS Development',
  },
  {
    id: 'ai-agents',
    label: 'AI & Agent Workflows',
    sub: 'LLMs • RAG Retrieval • Autonomous Pipelines',
    icon: Bot,
    value: 'AI & Intelligent Automation',
  },
  {
    id: 'custom-software',
    label: 'Software & Mobile Apps',
    sub: 'Bespoke Engineering • Secure Backends',
    icon: Terminal,
    value: 'Software & App Development',
  },
  {
    id: 'seo-growth',
    label: 'SEO & Performance Engineering',
    sub: 'Core Web Vitals • Crawlability • Conversion',
    icon: Zap,
    value: 'Digital Marketing & SEO',
  },
  {
    id: 'it-support',
    label: 'IT Support & Maintenance',
    sub: 'SLA Monitoring • Security Patching • 24/7',
    icon: ShieldCheck,
    value: 'IT Support & Maintenance',
  },
];

// Commercial Investment Brackets
const BUDGET_BRACKETS = [
  { label: 'Flexible / Scope Driven', sub: 'Needs Architecture Review', value: 'Flexible / Needs Scope Discussion' },
  { label: '₹50k - ₹1 Lakh', sub: '< $1,200 USD', value: '₹50k - ₹1L (< $1,200)' },
  { label: '₹1L - ₹2.5 Lakh', sub: '$1,200 - $3,000 USD', value: '₹1L - ₹2.5L ($1,200 - $3,000)' },
  { label: '₹2.5L - ₹5 Lakh', sub: '$3,000 - $6,000 USD', value: '₹2.5L - ₹5L ($3,000 - $6,000)' },
  { label: '₹5 Lakh+ Enterprise', sub: '$6,000+ USD', value: '₹5L+ ($6,000+)' },
];

// Speed-to-Market Milestones
const TIMELINE_TIERS = [
  { label: '⚡ Urgent Sprint', sub: '1 - 2 Weeks', value: 'Urgent (1-2 Weeks)' },
  { label: '🚀 Standard Milestone', sub: '3 - 4 Weeks', value: '1 Month Sprint' },
  { label: '🎯 Complete Build', sub: '2 - 3 Months', value: 'Quarterly Roadmap (2-3 Months)' },
  { label: '🗓️ Roadmap Planning', sub: 'Flexible Date', value: 'Flexible / Planning' },
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    serviceRequired: 'Cloud Infrastructure & DevOps',
    estimatedBudget: 'Flexible / Needs Scope Discussion',
    targetTimeline: '1 Month Sprint',
    projectDetails: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [formRenderTime] = useState(Date.now());
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Handle URL Query Parameters (e.g. ?audit=true, ?service=..., ?project=...)
  useEffect(() => {
    const isAudit = searchParams.get('audit') === 'true' || searchParams.get('inquiry') === 'audit';
    const projectParam = searchParams.get('project');
    const serviceParam = searchParams.get('service');

    if (isAudit) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: 'Free Business Audit & Strategy',
        projectDetails: prev.projectDetails || 'Interested in claiming the 2026 Special Free Business Audit & Strategy Session at 0% cost for our business.',
      }));
    } else if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails || `Interested in discussing an engineering architecture similar to the "${projectParam}" reference specification.`,
      }));
    } else if (serviceParam) {
      // Find matching service
      const matched = SERVICE_CAPABILITIES.find(s => s.id === serviceParam || s.value.toLowerCase().includes(serviceParam.toLowerCase()));
      if (matched) {
        setFormData((prev) => ({ ...prev, serviceRequired: matched.value }));
      }
    }
  }, [searchParams]);

  // Validation Logic
  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required';
        if (value.trim().length < 2) return 'Please enter your full name';
        return undefined;
      case 'businessEmail':
        if (!value.trim()) return 'Business Email is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
          return 'Please provide a valid work or personal email address';
        }
        return undefined;
      case 'projectDetails':
        if (!value.trim()) return 'Please share a brief description of your technical objectives';
        if (value.trim().length < 15) return `Please provide at least 15 characters of project context (${15 - value.trim().length} more needed)`;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    const nameErr = validateField('fullName', formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateField('businessEmail', formData.businessEmail);
    if (emailErr) newErrors.businessEmail = emailErr;

    const detailsErr = validateField('projectDetails', formData.projectDetails);
    if (detailsErr) newErrors.projectDetails = detailsErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field] || '');
    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const err = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      businessEmail: true,
      projectDetails: true,
    });

    // Honeypot check & sub-600ms bot deterrence
    if (honeypot || Date.now() - formRenderTime < 600) {
      console.warn('Automated bot submission prevented.');
      return;
    }

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 850);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setTouched({});
    setErrors({});
    setFormData({
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      companyName: '',
      serviceRequired: 'Cloud Infrastructure & DevOps',
      estimatedBudget: 'Flexible / Needs Scope Discussion',
      targetTimeline: '1 Month Sprint',
      projectDetails: '',
    });
  };

  // Structured Payload for Copy / Email / WhatsApp
  const formattedSummary = submittedData 
    ? `=== TECIAURA TECHNOLOGIES PROJECT SPECIFICATION ===
Client: ${submittedData.fullName}
Work Email: ${submittedData.businessEmail}
Company: ${submittedData.companyName || 'Not specified'}
Phone: ${submittedData.phoneNumber || 'Not specified'}
Primary Capability: ${submittedData.serviceRequired}
Budget Tier: ${submittedData.estimatedBudget || 'Flexible'}
Target Timeline: ${submittedData.targetTimeline || 'Not specified'}

Project Overview:
${submittedData.projectDetails}`
    : '';

  const handleCopyPayload = () => {
    if (!formattedSummary) return;
    navigator.clipboard.writeText(formattedSummary).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.fullName || 'New Client'}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.businessEmail}\nPhone: ${formData.phoneNumber || 'Not specified'}\nCompany: ${formData.companyName || 'Not specified'}\nService: ${formData.serviceRequired}\nBudget: ${formData.estimatedBudget || 'Flexible'}\nTimeline: ${formData.targetTimeline || 'Standard'}\n\nProject Scope:\n${formData.projectDetails}`
  );
  const directMailtoLink = `mailto:${COMPANY_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Teciaura Team, my name is ${formData.fullName || 'there'}. I would like to discuss our project regarding ${formData.serviceRequired} (Budget: ${formData.estimatedBudget || 'Flexible'}). Details: ${formData.projectDetails.slice(0, 120)}...`
  );
  const directWhatsappLink = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#0B1528] rounded-3xl border border-white/[0.08] border-t-white/[0.24] shadow-[0_16px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.14)] p-6 sm:p-8 lg:p-10 relative text-white backdrop-blur-sm transition-all duration-300">
      
      {/* ============================================================== */}
      {/* SUBMISSION SUCCESS STATE                                       */}
      {/* ============================================================== */}
      {submittedData ? (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          {/* Header Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-electricBlue/20 via-brand-cyanAccent/15 to-[#0B1528] border border-brand-cyanAccent/40 shadow-glow-blue">
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-cyanAccent/20 border border-brand-cyanAccent/50 flex items-center justify-center text-brand-cyanAccent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Inquiry Specifications Validated & Recorded
                </h3>
                <p className="text-xs text-brand-cyanAccent font-mono">
                  PAYLOAD STATUS: READY FOR DISPATCH • SLA RESPONSE &lt; 24H
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-normal pt-1">
              Thank you, <span className="font-semibold text-white">{submittedData.fullName}</span>. 
              Your project parameters have been compiled into a structured engineering proposal payload below.
            </p>
          </div>

          {/* Formatted Architecture Payload Display */}
          <div className="bg-[#050B16] rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
            <div className="px-5 py-3 bg-[#081224] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-brand-cyanAccent" />
                <span>SPECIFICATION PAYLOAD RECEIPT</span>
              </span>
              <button
                type="button"
                onClick={handleCopyPayload}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="Copy formatted summary to clipboard"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-brand-cyanAccent" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-5 text-xs font-mono space-y-2.5 text-slate-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-800/80">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Client / Lead</span>
                  <span className="text-white font-bold">{submittedData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Verified Email</span>
                  <span className="text-brand-cyanAccent font-medium">{submittedData.businessEmail}</span>
                </div>
                {submittedData.companyName && (
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Company / Organization</span>
                    <span className="text-slate-200">{submittedData.companyName}</span>
                  </div>
                )}
                {submittedData.phoneNumber && (
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Direct Phone</span>
                    <span className="text-slate-200">{submittedData.phoneNumber}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 border-b border-slate-800/80">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Primary Capability</span>
                  <span className="text-white font-semibold">{submittedData.serviceRequired}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Budget Bracket</span>
                  <span className="text-emerald-400 font-semibold">{submittedData.estimatedBudget || 'Flexible'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Speed to Market</span>
                  <span className="text-brand-electricBlue font-semibold">{submittedData.targetTimeline || 'Standard'}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-slate-500 uppercase tracking-wider block text-[10px] mb-1">Architecture / Project Context</span>
                <p className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 font-sans text-xs leading-relaxed">
                  {submittedData.projectDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Dispatch Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Button
              href={directMailtoLink}
              variant="primary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              className="w-full justify-center shadow-glow-blue font-bold font-mono text-xs"
            >
              Open in Email Client
            </Button>
            <a
              href={directWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Direct WhatsApp</span>
            </a>
            <Button
              variant="secondary"
              size="md"
              onClick={handleReset}
              icon={<RefreshCw className="w-3.5 h-3.5" />}
              className="w-full justify-center text-xs font-mono"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        /* ============================================================== */
        /* INTERACTIVE ENTERPRISE INQUIRY FORM                            */
        /* ============================================================== */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          {/* Honeypot field (anti-spam) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="company_website_verify"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* STEP 1: CAPABILITY SELECTOR (INTERACTIVE CHIPS) */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                1. Select Primary Technical Capability <span className="text-rose-400">*</span>
              </label>
              <span className="text-[11px] text-brand-cyanAccent font-mono">
                Click to select
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Select Technical Capability">
              {SERVICE_CAPABILITIES.map((service) => {
                const IconComponent = service.icon;
                const isSelected = formData.serviceRequired === service.value;

                return (
                  <button
                    key={service.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, serviceRequired: service.value }));
                      if (errors.serviceRequired) setErrors(prev => ({ ...prev, serviceRequired: undefined }));
                    }}
                    className={`relative text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-start gap-3 group ${
                      isSelected
                        ? 'border-brand-cyanAccent bg-brand-cyanAccent/10 shadow-[0_0_20px_rgba(0,200,232,0.18)] ring-1 ring-brand-cyanAccent/50'
                        : service.highlight
                          ? 'border-brand-electricBlue/50 bg-[#071329] hover:border-brand-cyanAccent/60 hover:bg-[#091833]'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/90'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                      isSelected 
                        ? 'bg-brand-cyanAccent text-[#050B17]' 
                        : service.highlight
                          ? 'bg-brand-electricBlue/20 text-brand-cyanAccent'
                          : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0 pr-4">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {service.label}
                        </span>
                        {service.badge && (
                          <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5 font-normal">
                        {service.sub}
                      </p>
                    </div>

                    {/* Radio Check Marker */}
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected
                        ? 'border-brand-cyanAccent bg-brand-cyanAccent text-[#050B17]'
                        : 'border-slate-700 bg-transparent'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: CLIENT CONTACT INFORMATION */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 font-mono">
              2. Contact & Commercial Coordinates
            </h4>

            {/* Row 1: Full Name & Business Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('fullName')}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 pr-10 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-rose-500/80 focus:ring-rose-500/30 bg-rose-950/20 text-white'
                        : touched.fullName && formData.fullName.trim().length >= 2
                          ? 'border-emerald-500/80 focus:border-emerald-400 focus:ring-emerald-500/20 bg-slate-900/90 text-white'
                          : 'border-slate-700/80 focus:border-brand-cyanAccent focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                  {touched.fullName && !errors.fullName && formData.fullName.trim().length >= 2 && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="businessEmail" className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Business / Official Email <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    onBlur={() => handleBlur('businessEmail')}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 pr-10 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      errors.businessEmail
                        ? 'border-rose-500/80 focus:ring-rose-500/30 bg-rose-950/20 text-white'
                        : touched.businessEmail && !errors.businessEmail && formData.businessEmail.includes('@')
                          ? 'border-emerald-500/80 focus:border-emerald-400 focus:ring-emerald-500/20 bg-slate-900/90 text-white'
                          : 'border-slate-700/80 focus:border-brand-cyanAccent focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.businessEmail}
                  />
                  {touched.businessEmail && !errors.businessEmail && formData.businessEmail.includes('@') && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
                {errors.businessEmail && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.businessEmail}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone & Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Direct Phone / WhatsApp <span className="text-slate-500 text-[11px]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-700/80 text-sm focus:outline-none focus:border-brand-cyanAccent focus:ring-2 focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500 font-mono"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Company / Brand Name <span className="text-slate-500 text-[11px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corp / Startup Venture"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-700/80 text-sm focus:outline-none focus:border-brand-cyanAccent focus:ring-2 focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 3: COMMERCIAL QUALIFICATION (BUDGET & TIMELINE) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
            {/* Budget Bracket */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                3. Estimated Investment Bracket
              </label>
              <div className="space-y-1.5" role="radiogroup" aria-label="Estimated Budget">
                {BUDGET_BRACKETS.map((tier) => {
                  const isSelected = formData.estimatedBudget === tier.value;
                  return (
                    <button
                      key={tier.label}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setFormData(prev => ({ ...prev, estimatedBudget: tier.value }))}
                      className={`w-full px-3.5 py-2 rounded-xl text-left text-xs border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-cyanAccent bg-brand-cyanAccent/15 text-white font-bold shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span>{tier.label}</span>
                      <span className="text-[11px] font-mono text-slate-400">{tier.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Timeline */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                4. Target Speed-to-Market
              </label>
              <div className="space-y-1.5" role="radiogroup" aria-label="Target Timeline">
                {TIMELINE_TIERS.map((tier) => {
                  const isSelected = formData.targetTimeline === tier.value;
                  return (
                    <button
                      key={tier.label}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setFormData(prev => ({ ...prev, targetTimeline: tier.value }))}
                      className={`w-full px-3.5 py-2 rounded-xl text-left text-xs border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-electricBlue bg-brand-electricBlue/20 text-white font-bold shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span>{tier.label}</span>
                      <span className="text-[11px] font-mono text-slate-400">{tier.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STEP 4: PROJECT DETAILS & TECHNICAL CONTEXT */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                5. Project Scope & Technical Requirements <span className="text-rose-400">*</span>
              </label>
              <span className={`text-[11px] font-mono ${
                formData.projectDetails.trim().length >= 15 ? 'text-emerald-400' : 'text-slate-400'
              }`}>
                {formData.projectDetails.trim().length}/15 chars min
              </span>
            </div>

            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              onBlur={() => handleBlur('projectDetails')}
              placeholder="Tell us about your project objectives, timeline, current tech stack, cloud architecture bottlenecks, or specific challenges..."
              className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 resize-y font-sans leading-relaxed ${
                errors.projectDetails
                  ? 'border-rose-500/80 focus:ring-rose-500/30 bg-rose-950/20 text-white'
                  : touched.projectDetails && formData.projectDetails.trim().length >= 15
                    ? 'border-emerald-500/80 focus:border-emerald-400 focus:ring-emerald-500/20 bg-slate-900/90 text-white'
                    : 'border-slate-700/80 focus:border-brand-cyanAccent focus:ring-brand-cyanAccent/20 bg-slate-900/90 text-white placeholder:text-slate-500'
              }`}
              aria-required="true"
              aria-invalid={!!errors.projectDetails}
            />

            {errors.projectDetails && (
              <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.projectDetails}</span>
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON & ENCRYPTION NOTE */}
          <div className="pt-2 space-y-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
              className="w-full justify-center shadow-glow-blue font-bold font-mono text-sm py-3.5 hover:shadow-[0_0_25px_rgba(22,119,255,0.7)]"
            >
              {isSubmitting ? 'Validating Specifications...' : 'Send Technical Project Inquiry'}
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyanAccent flex-shrink-0" />
                <span>256-Bit TLS Client Encrypted • Mutual NDA upon request</span>
              </span>
              <span className="text-slate-400">
                SLA: Initial Architecture Review within 24 Hours
              </span>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
