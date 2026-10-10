import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 border backdrop-blur-sm overflow-hidden ${
              isOpen
                ? 'bg-[#0E1A32] border-brand-electricBlue/50 border-t-cyan-300 shadow-glow-blue'
                : 'bg-[#0B1528]/85 border-white/[0.08] border-t-white/[0.22] hover:border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.10)]'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanAccent rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                isOpen ? 'text-brand-cyanAccent' : 'text-white'
              }`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                isOpen 
                  ? 'bg-brand-electricBlue text-white rotate-180 shadow-glow-blue' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
