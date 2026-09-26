import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../../data/companyInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Cloud & DevOps', path: '/services#cloud-devops' },
    { label: 'Website Development', path: '/services#website-development' },
    { label: 'Software & App Development', path: '/services#software-app-development' },
    { label: 'Digital Marketing & SEO', path: '/services#digital-marketing-seo' },
    { label: 'Social Media Management', path: '/services#social-media-management' },
    { label: 'IT Support & Maintenance', path: '/services#it-support-maintenance' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Portfolio & Work', path: '/portfolio' },
    { label: 'Insights & Blog', path: '/insights' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-brand-footerBg text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Brand Info, Links, and Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="md" showTagline={true} />
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed pt-2">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primaryNavy border border-brand-electricBlue/20 text-xs text-brand-cyanAccent font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-cyanAccent animate-pulse" />
                {COMPANY_INFO.positioning}
              </div>
            </div>

            {/* Social Links (Clean SVG icons & editable placeholders) */}
            <div className="pt-4 flex items-center gap-3">
              {/* LinkedIn */}
              <a 
                href={COMPANY_INFO.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-brand-electricBlue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Teciaura on LinkedIn (Placeholder)"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href={COMPANY_INFO.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-brand-electricBlue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Teciaura on X/Twitter (Placeholder)"
                title="Twitter / X Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href={COMPANY_INFO.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-brand-electricBlue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Teciaura on GitHub (Placeholder)"
                title="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              
              {/* WhatsApp direct chat link */}
              <a 
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-700/40 text-xs font-medium transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-cyanAccent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-150 block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Placeholders */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Business Email</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-300 hover:text-white transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-brand-electricBlue flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Direct Inquiries</span>
                  <span className="text-slate-300 font-mono text-xs">{COMPANY_INFO.contact.phonePlaceholder}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-cyanAccent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Base Location</span>
                  <span className="text-slate-300">{COMPANY_INFO.contact.location}</span>
                </div>
              </li>
            </ul>

            <div className="pt-1">
              <p className="text-[11px] text-slate-500 italic">
                * Contact info shown above are editable placeholders for client deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-slate-800/80 bg-[#050f22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-brand-cyanAccent font-medium tracking-wide">
              {COMPANY_INFO.tagline}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
