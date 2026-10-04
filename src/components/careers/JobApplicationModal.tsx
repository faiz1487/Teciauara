import React, { useState } from 'react';
import { X, CheckCircle2, Send, Briefcase, Mail, Phone, User, Link as LinkIcon, FileText, Sparkles } from 'lucide-react';
import { JobPosition } from '../../data/careers';

interface JobApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    portfolioLink: '',
    githubLink: '',
    resumeLink: '',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      portfolioLink: '',
      githubLink: '',
      resumeLink: '',
      note: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#070F1E] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Glow Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-electricBlue via-brand-cyanAccent to-brand-electricBlue" />

        {/* Modal Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-cyan">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">Application Received!</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                Thank you for applying to <span className="text-brand-cyanAccent font-semibold">{job ? job.title : 'Teciaura Technologies'}</span>. Our talent team reviews every application thoroughly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1528] border border-slate-800 text-xs text-slate-400 text-left space-y-1.5 max-w-md mx-auto font-mono">
              <p><strong className="text-slate-200">Candidate:</strong> {formData.name}</p>
              <p><strong className="text-slate-200">Email:</strong> {formData.email}</p>
              <p><strong className="text-slate-200">Next Step:</strong> You will hear back via email within 48 business hours.</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 text-white font-semibold text-sm transition-all shadow-glow-blue"
            >
              Done & Return to Open Roles
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header info */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-electricBlue/10 border border-brand-electricBlue/20 text-xs font-semibold text-brand-cyanAccent font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{job ? job.department : 'General Application'}</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {job ? `Apply for ${job.title}` : 'Open Application at Teciaura'}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {job 
                  ? `${job.type} • ${job.location} • ${job.experience}` 
                  : 'Tell us about your background and how you want to contribute.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Years of Experience <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors appearance-none"
                    >
                      <option value="" disabled>Select experience</option>
                      <option value="Fresher / 0-1 Yr">Fresher / 0–1 Year</option>
                      <option value="1-3 Years">1–3 Years</option>
                      <option value="3-5 Years">3–5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume / Portfolio Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Resume / CV Link <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      name="resumeLink"
                      required
                      placeholder="Google Drive / Dropbox / PDF URL"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Ensure link sharing is set to viewable.</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    LinkedIn / GitHub / Portfolio URL
                  </label>
                  <div className="relative">
                    <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      name="portfolioLink"
                      placeholder="https://linkedin.com/in/... or github.com/..."
                      value={formData.portfolioLink}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Note / Cover intro */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Brief Note: Why are you interested in this role?
                </label>
                <textarea
                  name="note"
                  rows={3}
                  placeholder="Share a project you enjoyed building or what excites you about joining Teciaura..."
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B1528] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyanAccent transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Or email directly to <a href="mailto:careers@teciaura.com" className="text-brand-cyanAccent hover:underline">careers@teciaura.com</a>
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-electricBlue hover:bg-brand-electricBlue/90 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-glow-blue"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
