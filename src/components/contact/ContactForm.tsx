import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { ContactFormData } from '../../types';
import { COMPANY_INFO } from '../../data/companyInfo';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    serviceRequired: 'Cloud & DevOps',
    estimatedBudget: '',
    projectDetails: '',
  });

  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please provide a valid email address';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief description of your project';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide at least 15 characters of project context';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on field change
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot honeypot detection
    if (honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      companyName: '',
      serviceRequired: 'Cloud & DevOps',
      estimatedBudget: '',
      projectDetails: '',
    });
  };

  // Generate mailto link for direct sending
  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.businessEmail}\nPhone: ${formData.phoneNumber || 'Not specified'}\nCompany: ${formData.companyName || 'Not specified'}\nService: ${formData.serviceRequired}\nBudget: ${formData.estimatedBudget || 'Not specified'}\n\nProject Details:\n${formData.projectDetails}`
  );
  const directMailtoLink = `mailto:${COMPANY_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="bg-white rounded-3xl border border-brand-border shadow-card p-6 sm:p-8 lg:p-10 relative">
      
      {/* Submitted State: Transparent Frontend Confirmation with Backend Integration Note */}
      {submittedData ? (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-6 h-6 text-brand-electricBlue" />
              <h3 className="text-lg font-bold text-brand-primaryNavy">
                Inquiry Form Validated & Captured
              </h3>
            </div>
            <p className="text-sm text-brand-bodyText leading-relaxed">
              Thank you, <span className="font-semibold text-brand-primaryNavy">{submittedData.fullName}</span>. 
              Your submission parameters have been verified and formatted below.
            </p>
          </div>

          {/* Backend Integration Notice Banner */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Backend Integration Documentation: </span>
              In this production frontend template, submission data is captured and validated on the client side. 
              To route live inquiries directly into your company inbox or CRM, connect this handler to an endpoint (e.g., 
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs mx-1 font-mono">Resend</code>, 
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs mx-1 font-mono">AWS SES</code>, 
              <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs mx-1 font-mono">Formspree</code>, or your serverless API).
            </div>
          </div>

          {/* Captured Data Summary */}
          <div className="bg-brand-lightBg p-4 rounded-xl border border-brand-border text-xs space-y-2 font-mono">
            <div className="text-[11px] font-bold text-brand-mutedText uppercase font-sans mb-1">
              Captured Submission Payload:
            </div>
            <div className="text-brand-primaryNavy"><strong>Service:</strong> {submittedData.serviceRequired}</div>
            <div className="text-brand-primaryNavy"><strong>Sender:</strong> {submittedData.fullName} &lt;{submittedData.businessEmail}&gt;</div>
            {submittedData.companyName && <div><strong>Company:</strong> {submittedData.companyName}</div>}
            {submittedData.phoneNumber && <div><strong>Phone:</strong> {submittedData.phoneNumber}</div>}
            {submittedData.estimatedBudget && <div><strong>Budget:</strong> {submittedData.estimatedBudget}</div>}
            <div className="pt-1 text-brand-bodyText">
              <strong>Context:</strong> {submittedData.projectDetails}
            </div>
          </div>

          {/* Direct Transmission Options */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              href={directMailtoLink}
              variant="primary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              className="flex-1 justify-center"
            >
              Open in Email Client
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleReset}
              className="flex-1 justify-center"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        /* Contact Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden from real users to catch automated bots) */}
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

          {/* Row 1: Full Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                    : 'border-brand-border focus:border-brand-electricBlue focus:ring-brand-electricBlue/20 bg-white'
                }`}
                aria-required="true"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="businessEmail" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Business Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.businessEmail
                    ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                    : 'border-brand-border focus:border-brand-electricBlue focus:ring-brand-electricBlue/20 bg-white'
                }`}
                aria-required="true"
                aria-invalid={!!errors.businessEmail}
              />
              {errors.businessEmail && (
                <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.businessEmail}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Phone Number <span className="text-brand-mutedText font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-electricBlue focus:ring-2 focus:ring-brand-electricBlue/20 bg-white"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Company Name <span className="text-brand-mutedText font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Corp / Startup Name"
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-electricBlue focus:ring-2 focus:ring-brand-electricBlue/20 bg-white"
              />
            </div>
          </div>

          {/* Row 3: Service Required & Estimated Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-electricBlue focus:ring-2 focus:ring-brand-electricBlue/20 bg-white text-brand-primaryNavy font-medium"
              >
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Website Development">Website Development</option>
                <option value="Software & App Development">Software & App Development</option>
                <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
                Estimated Budget <span className="text-brand-mutedText font-normal text-[11px]">(Optional)</span>
              </label>
              <select
                id="estimatedBudget"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-electricBlue focus:ring-2 focus:ring-brand-electricBlue/20 bg-white text-brand-primaryNavy font-medium"
              >
                <option value="">Select an estimated range...</option>
                <option value="₹50k - ₹1L (< $1,200)">₹50k - ₹1 Lakh ($600 - $1,200)</option>
                <option value="₹1L - ₹2.5L ($1,200 - $3,000)">₹1 Lakh - ₹2.5 Lakh ($1,200 - $3,000)</option>
                <option value="₹2.5L - ₹5L ($3,000 - $6,000)">₹2.5 Lakh - ₹5 Lakh ($3,000 - $6,000)</option>
                <option value="₹5L+ ($6,000+)">₹5 Lakh+ ($6,000+)</option>
                <option value="Flexible / Let's Discuss">Flexible / Needs Scope Discussion</option>
              </select>
            </div>
          </div>

          {/* Row 4: Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-xs font-semibold text-brand-primaryNavy uppercase tracking-wider mb-2">
              Project Details <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your project objectives, timeline, current tech stack, or specific challenges..."
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 resize-y ${
                errors.projectDetails
                  ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/30'
                  : 'border-brand-border focus:border-brand-electricBlue focus:ring-brand-electricBlue/20 bg-white'
              }`}
              aria-required="true"
              aria-invalid={!!errors.projectDetails}
            />
            {errors.projectDetails && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.projectDetails}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Send Project Inquiry
            </Button>
          </div>

          <div className="pt-2 text-center text-xs text-brand-mutedText flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-brand-electricBlue" />
            <span>We strictly respect non-disclosure and maintain commercial privacy.</span>
          </div>
        </form>
      )}
    </div>
  );
};
