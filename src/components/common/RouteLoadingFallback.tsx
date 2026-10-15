import React from 'react';

export const RouteLoadingFallback: React.FC = () => {
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="min-h-[70vh] flex flex-col items-center justify-center bg-[#050B17] text-white px-4 select-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Clean minimal spinner */}
        <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-white animate-spin" />
      </div>

      {/* Status indicator */}
      <div className="mt-5 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
          Loading
        </span>
      </div>
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
};
