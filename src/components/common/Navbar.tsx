import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position for dynamic shadow/border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#050B17]/85 backdrop-blur-xl ${
        scrolled 
          ? 'border-b border-slate-800 shadow-elevated py-3' 
          : 'border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the Left */}
          <div className="flex-shrink-0">
            <Logo size="md" variant="light" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-150 relative ${
                    isActive
                      ? 'text-brand-cyanAccent font-semibold bg-brand-electricBlue/10 border border-brand-electricBlue/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-brand-electricBlue to-brand-cyanAccent rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => navigate('/contact')}
              className="p-2 text-brand-cyanAccent hover:bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue"
              aria-label="Contact Teciaura"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#050B17]/95 backdrop-blur-2xl md:hidden border-t border-slate-800 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5 py-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Menu Navigation</span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-electricBlue/15 text-brand-cyanAccent font-semibold border-l-4 border-brand-electricBlue'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <div className="bg-[#0B1528] p-4 rounded-2xl border border-slate-800">
              <p className="text-xs text-slate-400 font-medium mb-1">Direct Inquiries</p>
              <p className="text-sm font-semibold text-white">hello@teciaura.com</p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
