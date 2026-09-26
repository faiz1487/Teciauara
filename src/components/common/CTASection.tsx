import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from './Button';

interface CTASectionProps {
  headline?: string;
  text?: string;
  buttonText?: string;
  buttonTo?: string;
  secondaryButtonText?: string;
  secondaryButtonTo?: string;
  variant?: 'banner' | 'final';
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = 'Have a Project in Mind?',
  text = 'Let’s discuss how Teciaura Technologies can help you build, improve, or grow your digital presence.',
  buttonText = 'Talk to Our Team',
  buttonTo = '/contact',
  secondaryButtonText,
  secondaryButtonTo,
  variant = 'banner',
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-primaryNavy overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center border border-brand-electricBlue/20 shadow-elevated">
          
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-electricBlue/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          {/* Tech dots pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electricBlue/20 border border-brand-electricBlue/40 text-xs font-semibold text-brand-cyanAccent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent" />
              <span>Direct Collaboration</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {headline}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              {text}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                to={buttonTo}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {buttonText}
              </Button>

              {secondaryButtonText && secondaryButtonTo && (
                <Button
                  to={secondaryButtonTo}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-slate-600 hover:bg-white/10"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
              <MessageSquare className="w-3.5 h-3.5 text-brand-cyanAccent" />
              <span>Prompt, structured responses within 24 business hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
