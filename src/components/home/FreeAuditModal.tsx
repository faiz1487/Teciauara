import React, { useState } from 'react';
import { X, CheckCircle2, Globe, Mail, Phone, User, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeAuditModal: React.FC<FreeAuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    name: '',
    email: '',
    phone: '',
    primaryConcern: 'Overall Performance & Speed',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      websiteUrl: '',
      name: '',
      email: '',
      phone: '',
      primaryConcern: 'Overall Performance & Speed',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={handleResetAndClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#070F1E] border border-brand-electricBlue/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Glow Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-electricBlue via-brand-cyanAccent to-emerald-400" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-cyan animate-in zoom-in-50 duration-200">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">Audit Request Confirmed!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                We're analyzing <span className="text-brand-cyanAccent font-semibold font-mono">{formData.websiteUrl}</span>. Your comprehensive PDF report will be delivered within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1528] border border-slate-800 text-xs text-slate-400 text-left space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Website:</span>
                <span className="text-white font-medium">{formData.websiteUrl}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Recipient:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Price:</span>
                <span className="text-emerald-400 font-bold">₹0 (100% FREE)</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white font-semibold text-sm transition-all shadow-glow-blue"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header info */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-electricBlue/20 border border-brand-electricBlue/30 text-xs font-semibold text-brand-cyanAccent font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
                <span>LIMITED TIME OFFER • 100% FREE</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Claim Your Free Website Audit
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Worth <span className="line-through text-rose-400 font-medium">₹4,999</span> — completely complimentary. Discover speed, SEO, and UX roadblocks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Website URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Website URL <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    name="websiteUrl"
                    required
                    placeholder="https://yourcompany.com"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Verma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Report Delivery Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp <span className="text-slate-500 text-[11px] font-normal">(For instant PDF copy)</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                  />
                </div>
              </div>

              {/* Primary Focus Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Focus / Concern
                </label>
                <select
                  name="primaryConcern"
                  value={formData.primaryConcern}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                >
                  <option value="Overall Performance & Speed">Overall Performance & Speed</option>
                  <option value="Google Rankings & SEO">Google Rankings & SEO</option>
                  <option value="Mobile Responsiveness & UI/UX">Mobile Responsiveness & UI/UX</option>
                  <option value="Low Conversions & Inquiries">Low Conversions & Inquiries</option>
                  <option value="Technical Security & Errors">Technical Security & Errors</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-electricBlue to-brand-cyanAccent hover:brightness-110 text-white font-bold text-sm transition-all shadow-glow-blue active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Generating Audit Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Audit Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    No spam ever
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-brand-cyanAccent" />
                    Delivered in 24h
                  </span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
