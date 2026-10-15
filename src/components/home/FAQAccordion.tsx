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
            className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
              isOpen
                ? 'bg-white/[0.04] border-white/[0.14]'
                : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.10]'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                isOpen ? 'text-white' : 'text-slate-200'
              }`}>
                {item.question}
              </span>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                isOpen 
                  ? 'bg-white text-slate-950 rotate-180' 
                  : 'bg-white/[0.05] text-slate-400 border border-white/[0.08]'
              }`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-200"
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
