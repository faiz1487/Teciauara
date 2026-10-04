import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { FreeAuditModal } from '../home/FreeAuditModal';

export const FloatingAuditButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Button on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40 group select-none">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B1528]/95 backdrop-blur-xl border border-brand-electricBlue/50 text-white font-semibold text-xs sm:text-sm shadow-elevated hover:border-brand-cyanAccent hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Claim Free Website Audit"
        >
          {/* Subtle Pulse Glow */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyanAccent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyanAccent" />
          </span>

          <Search className="w-4 h-4 text-brand-cyanAccent stroke-[2.5]" />
          <span className="tracking-wide text-white font-semibold">Free Audit</span>
        </button>
      </div>

      {/* Free Audit Modal */}
      <FreeAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
