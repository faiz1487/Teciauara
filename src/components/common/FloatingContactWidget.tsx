import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const FloatingContactWidget: React.FC = () => {
  const whatsappNumber = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappMessage)}`;
  const phoneCallUrl = COMPANY_INFO.contact.phoneCallLink || 'tel:+918540932264';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none">
      
      {/* 1. Direct Phone Call Button (Electric Blue Circle) */}
      <div className="relative group">
        <a
          href={phoneCallUrl}
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1677FF] hover:bg-[#0e65dc] text-white flex items-center justify-center shadow-lg hover:shadow-[#1677FF]/40 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white stroke-[2.4]" />
        </a>

        {/* Tooltip on hover (left side) */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#0B1528] text-white text-xs font-semibold whitespace-nowrap shadow-elevated border border-slate-700/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200">
          Call: {COMPANY_INFO.contact.phoneDisplay}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#0B1528] border-r border-t border-slate-700/80 rotate-45" />
        </div>
      </div>

      {/* 2. WhatsApp Button (Green Circle) */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle Ping Pulse Effect */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>

          {/* Official WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

        {/* Tooltip on hover (left side) */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#0B1528] text-white text-xs font-semibold whitespace-nowrap shadow-elevated border border-slate-700/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200">
          Chat on WhatsApp
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#0B1528] border-r border-t border-slate-700/80 rotate-45" />
        </div>
      </div>

    </div>
  );
};
