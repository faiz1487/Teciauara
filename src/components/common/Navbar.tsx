import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Home } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  // Authentic realistic glassmorphism styles with specular highlights & refraction
  const glassStyle: React.CSSProperties = scrolled
    ? {
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 35%, rgba(5, 11, 23, 0.85) 100%), rgba(7, 18, 41, 0.88)',
        boxShadow:
          'inset 0 1px 1px 0 rgba(255, 255, 255, 0.40), inset 0 0 20px 0 rgba(22, 119, 255, 0.12), 0 12px 35px 0 rgba(0, 0, 0, 0.6), 0 0 25px 0 rgba(22, 119, 255, 0.20)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%) contrast(105%)',
        backdropFilter: 'blur(24px) saturate(190%) contrast(105%)',
      }
    : {
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 35%, rgba(5, 11, 23, 0.65) 100%), rgba(7, 18, 41, 0.70)',
        boxShadow:
          'inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 18px 0 rgba(22, 119, 255, 0.08), 0 8px 30px 0 rgba(0, 0, 0, 0.4), 0 0 20px 0 rgba(22, 119, 255, 0.14)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%) contrast(105%)',
        backdropFilter: 'blur(20px) saturate(180%) contrast(105%)',
      };

  const mobileGlassStyle: React.CSSProperties = {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 30%, rgba(5, 11, 23, 0.94) 100%), rgba(7, 18, 41, 0.96)',
    boxShadow:
      'inset 0 1px 1px 0 rgba(255, 255, 255, 0.30), 0 16px 45px 0 rgba(0, 0, 0, 0.8), 0 0 25px 0 rgba(22, 119, 255, 0.18)',
    WebkitBackdropFilter: 'blur(24px) saturate(190%)',
    backdropFilter: 'blur(24px) saturate(190%)',
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full">
      {/* 1. Full-Width Edge-to-Edge Glassmorphism Navbar (Right & Left 100% Full) */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          scrolled ? 'border-cyan-400/30 py-2.5 sm:py-3' : 'border-white/[0.12] py-3 sm:py-3.5'
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
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-200 relative inline-flex items-center gap-1.5 ${
                        isActive
                          ? 'text-brand-cyanAccent font-semibold bg-brand-cyanAccent/10 border border-brand-cyanAccent/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                      }`
                    }
                  >
                    {Icon && <Icon className="w-4 h-4 text-brand-cyanAccent" />}
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow-blue hover:shadow-[0_0_28px_rgba(22,119,255,0.65)] font-semibold rounded-xl text-sm"
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
                className="hidden sm:inline-flex text-xs py-1.5 px-3.5 rounded-lg shadow-glow-blue font-semibold"
              >
                Start a Project
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-brand-cyanAccent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Glass Menu */}
      {isOpen && (
        <div
          className="w-full border-b border-white/20 p-5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={mobileGlassStyle}
        >
          <div className="max-w-7xl mx-auto space-y-1.5 py-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2 flex items-center gap-2">
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
                        ? 'bg-brand-cyanAccent/10 text-brand-cyanAccent font-semibold border border-brand-cyanAccent/25 shadow-sm'
                        : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                    }`
                  }
                >
                  <span className="flex items-center gap-2.5">
                    {Icon && <Icon className="w-4 h-4 text-brand-cyanAccent" />}
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </NavLink>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto pt-4 mt-3 border-t border-white/10 space-y-3">
            <div className="bg-[#0B1528]/80 p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Direct Inquiries</span>
              <span className="text-xs font-mono text-brand-cyanAccent font-semibold">info@teciaura.com</span>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center shadow-glow-blue font-semibold rounded-xl text-sm"
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
