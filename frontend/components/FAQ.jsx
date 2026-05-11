import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '@/lib/mock';

const FAQ = () => {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute right-10 top-10 w-32 h-32 dots-bg opacity-20 rounded-full" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-white/50 mb-3 text-center">
          FAQ
        </p>
        <h2 className="font-serif-display text-center text-[44px] sm:text-[56px] lg:text-[68px] text-white leading-tight">
          Popular <span className="italic font-light text-white/80">Questions</span>
        </h2>

        <div className="mt-14 max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/15 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-[16.5px] lg:text-[17.5px] font-medium text-white hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14.5px] text-white/70 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
