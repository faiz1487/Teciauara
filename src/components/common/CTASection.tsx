import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
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
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#050B17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0B1528] to-[#070F1E] overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center border border-brand-electricBlue/30 shadow-elevated">
          
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyanAccent/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-electricBlue/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20 animate-pulse-slow" />
          
          {/* Tech dots pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(22,119,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-electricBlue/15 border border-brand-electricBlue/30 text-xs font-semibold text-brand-cyanAccent mb-4 shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-pulse" />
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
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
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
