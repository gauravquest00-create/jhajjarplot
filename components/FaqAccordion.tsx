'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/types/property';

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = 'Frequently Asked Questions (FAQs)',
  subtitle = 'Find clear answers to common questions about plot registry, RERA status, loans, and possession in Jhajjar.',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-8 sm:my-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <span className="text-amber-600 font-mono text-xs font-black">Q{idx + 1}.</span>
                  {faq.question}
                </span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-700 font-bold text-xs transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-white' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
