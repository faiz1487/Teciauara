import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Sparkles, Home, 
  MessageCircle, Activity, ExternalLink 
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { COMPANY_INFO } from '../../data/companyInfo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Track scroll position for dynamic glass darkening & glow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  // Authentic realistic glassmorphism styles with specular highlights & refraction
  const glassStyle: React.CSSProperties = scrolled
    ? {
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 35%, rgba(5, 11, 23, 0.88) 100%), rgba(7, 18, 41, 0.90)',
        boxShadow:
          'inset 0 1px 1px 0 rgba(255, 255, 255, 0.40), inset 0 0 20px 0 rgba(22, 119, 255, 0.12), 0 12px 35px 0 rgba(0, 0, 0, 0.6), 0 0 25px 0 rgba(22, 119, 255, 0.20)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%) contrast(105%)',
        backdropFilter: 'blur(24px) saturate(190%) contrast(105%)',
      }
    : {
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 35%, rgba(5, 11, 23, 0.70) 100%), rgba(7, 18, 41, 0.75)',
        boxShadow:
          'inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 18px 0 rgba(22, 119, 255, 0.08), 0 8px 30px 0 rgba(0, 0, 0, 0.4), 0 0 20px 0 rgba(22, 119, 255, 0.14)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%) contrast(105%)',
        backdropFilter: 'blur(20px) saturate(180%) contrast(105%)',
      };

  const mobileGlassStyle: React.CSSProperties = {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 30%, rgba(5, 11, 23, 0.96) 100%), rgba(7, 18, 41, 0.98)',
    boxShadow:
      'inset 0 1px 1px 0 rgba(255, 255, 255, 0.30), 0 16px 45px 0 rgba(0, 0, 0, 0.8), 0 0 25px 0 rgba(22, 119, 255, 0.18)',
    WebkitBackdropFilter: 'blur(24px) saturate(190%)',
    backdropFilter: 'blur(24px) saturate(190%)',
  };

  const cleanWhatsappNumber = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full select-none">
      
      {/* 1. TOP TELEMETRY & SYSTEM OPERATIONAL STRIP (Desktop & Tablet) */}
      <div className="bg-[#030814]/95 border-b border-slate-800/80 text-[11px] font-mono py-1.5 px-4 text-slate-400 hidden md:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Live Engineering Team Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wider">ENGINEERING TEAM ONLINE</span>
            </div>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <span>NOIDA &amp; DELHI NCR • DIRECT REPLIES IN &lt; 2 HOURS</span>
            </span>
          </div>

          {/* Right: 20-Min Call & Direct Contact */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact?inquiry=audit" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors group"
            >
              <Sparkles className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold underline decoration-amber-400/40">Free 20-Min Project Discussion</span>
            </Link>
            
            <span className="text-slate-700">|</span>

            <a 
              href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent('Hello Faiz and Teciaura team, I would like to discuss a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN FULL-WIDTH GLASSMORPHISM NAVBAR */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          scrolled ? 'border-white/[0.1] py-2.5 sm:py-3 bg-[#060B15]/95' : 'border-white/[0.08] py-3 sm:py-3.5 bg-[#060B15]/80'
        }`}
        style={glassStyle}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Teciaura Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo size="md" variant="light" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-xl transition-all duration-200 relative inline-flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white font-medium bg-white/[0.08] border border-white/[0.12]'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        {Icon && !isActive && <Icon className="w-3.5 h-3.5 text-slate-400" />}
                        <span>{link.label}</span>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent('Hello Teciaura Team, I have a project inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all shadow-sm"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-white hover:bg-slate-100 text-slate-950 font-semibold rounded-xl text-xs xl:text-sm border-white shadow-sm"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex text-xs py-1.5 px-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-semibold"
              >
                Start a Project
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="w-5 h-5 text-brand-cyanAccent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE DROPDOWN GLASS MENU */}
      {isOpen && (
        <div
          id="mobile-navigation"
          role="region"
          aria-label="Mobile Navigation Drawer"
          className="w-full border-b border-white/20 p-5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={mobileGlassStyle}
        >
          {/* Telemetry pill for mobile */}
          <div className="max-w-7xl mx-auto mb-3 p-2.5 rounded-xl bg-[#030814] border border-emerald-500/30 flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold">SYSTEM STATUS: 99.99% OK</span>
            </div>
            <Link 
              to="/contact?inquiry=audit"
              onClick={() => setIsOpen(false)}
              className="text-amber-300 font-semibold"
            >
              Claim 0% Audit →
            </Link>
          </div>

          <div className="max-w-7xl mx-auto space-y-1.5 py-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2 flex items-center gap-2 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Menu Navigation</span>
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-brand-cyanAccent/10 text-brand-cyanAccent font-bold border border-brand-cyanAccent/30 shadow-sm'
                        : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-2.5">
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-pulse" />
                        ) : Icon ? (
                          <Icon className="w-4 h-4 text-slate-400" />
                        ) : null}
                        <span>{link.label}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto pt-4 mt-3 border-t border-white/10 space-y-3">
            <div className="bg-[#0B1528]/80 p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Official Hotline</span>
              <a 
                href={COMPANY_INFO.contact.phoneCallLink} 
                className="text-xs font-mono text-brand-cyanAccent font-semibold"
              >
                {COMPANY_INFO.contact.phoneDisplay}
              </a>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center shadow-glow-blue font-bold rounded-xl text-sm font-mono"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
