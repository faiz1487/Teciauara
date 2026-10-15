import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const cleanNumber = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const chatUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent('Hi Faiz & Teciaura Team, I have a project inquiry and would like to chat.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Friendly Human Floating Tooltip / Speech Bubble */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-300 bg-[#0E1729] text-white p-3.5 pr-8 rounded-2xl border border-emerald-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-xs relative text-xs">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close tooltip"
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-emerald-400 font-mono">Faiz & Team Online</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-normal">
            👋 Have a question about your website or app idea? Message us directly on WhatsApp for honest advice.
          </p>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Teciaura lead engineer on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-700" />
        </div>
        <span className="text-xs font-bold tracking-wide">
          Chat With Engineer
        </span>
      </a>
    </div>
  );
};
