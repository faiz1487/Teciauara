import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate context

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
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-white border-brand-electricBlue/40 shadow-card'
                : 'bg-white border-brand-border hover:border-slate-300 shadow-subtle'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electricBlue rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                isOpen ? 'text-brand-electricBlue' : 'text-brand-primaryNavy'
              }`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                isOpen ? 'bg-brand-electricBlue text-white rotate-180' : 'bg-brand-lightBg text-brand-primaryNavy'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-brand-bodyText leading-relaxed border-t border-slate-100"
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
