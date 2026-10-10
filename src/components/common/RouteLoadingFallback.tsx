import React from 'react';

export const RouteLoadingFallback: React.FC = () => {
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="min-h-[70vh] flex flex-col items-center justify-center bg-[#050B17] text-white px-4 select-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient glow */}
        <div className="absolute w-24 h-24 bg-brand-cyanAccent/20 rounded-full blur-2xl animate-pulse" />
        
        {/* Outer rotating ring */}
        <div className="w-14 h-14 rounded-full border-2 border-brand-cyanAccent/20 border-t-brand-cyanAccent animate-spin" />
        
        {/* Inner static branding symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-cyanAccent to-brand-electricBlue shadow-[0_0_15px_rgba(0,200,232,0.8)]" />
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyanAccent animate-ping" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
          Loading
        </span>
      </div>
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
};
