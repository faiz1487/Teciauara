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
          className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B1220]/95 backdrop-blur-xl border border-white/[0.12] text-white font-medium text-xs sm:text-sm shadow-xl hover:border-white/[0.24] hover:bg-[#0f172a] active:scale-95 transition-all duration-200"
          aria-label="Claim Free Architecture Audit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <Search className="w-3.5 h-3.5 text-slate-300" />
          <span className="tracking-normal text-slate-200 font-medium">Free Audit</span>
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
