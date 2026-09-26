import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled 
          ? 'border-b border-brand-border/80 shadow-subtle py-3' 
          : 'border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the Left */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 relative ${
                    isActive
                      ? 'text-brand-electricBlue font-semibold'
                      : 'text-brand-bodyText hover:text-brand-primaryNavy hover:bg-brand-lightBg'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-brand-electricBlue rounded-full" />
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
              className="p-2 text-brand-electricBlue hover:bg-brand-lightBg rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue"
              aria-label="Contact Teciaura"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-primaryNavy hover:bg-brand-lightBg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue"
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
        <div className="fixed inset-0 top-[65px] z-50 bg-white/95 backdrop-blur-md md:hidden border-t border-brand-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 py-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-mutedText px-3 mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-lightBg text-brand-electricBlue font-semibold border-l-4 border-brand-electricBlue'
                      : 'text-brand-primaryNavy hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-brand-border space-y-3">
            <div className="bg-brand-lightBg p-4 rounded-xl border border-brand-border">
              <p className="text-xs text-brand-mutedText font-medium mb-1">Direct Inquiries</p>
              <p className="text-sm font-semibold text-brand-primaryNavy">hello@teciaura.com</p>
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
