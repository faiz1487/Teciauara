import React from 'react';
import { Home, Compass } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#050B17] text-slate-300 min-h-[70vh] flex items-center justify-center">
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
      />

      <section className="py-24 px-4 text-center flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mx-auto text-brand-cyanAccent shadow-glow-cyan">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyanAccent bg-[#0B1528] border border-slate-800 px-3 py-1 rounded-full">
              404 Error
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              The page you are trying to reach might have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              to="/services"
              variant="secondary"
              size="md"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
