"use client";
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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-kavita-tan mb-3 text-center">
          FAQ
        </p>
        <h2 className="font-serif-display text-center text-[44px] sm:text-[56px] lg:text-[68px] text-gray-900 leading-tight font-bold">
          Popular <span className="italic font-normal text-kavita-tan">Questions</span>
        </h2>

        <div className="mt-14 max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#fcfbf9] border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-[16.5px] lg:text-[17.5px] font-bold text-gray-900 hover:no-underline py-5 hover:text-kavita-tan transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-gray-600 leading-relaxed pb-6">
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
