"use client";
import { motion } from "motion/react";

export default function BrandStatementSection() {
  return (
    <section className="py-24 md:py-32 bg-white flex flex-col items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <p className="text-[#2DB34A] text-[10px] font-black tracking-[0.5em] uppercase mb-8">The Ethos</p>
        <h2 className="text-[#0A2733] font-serif text-3xl md:text-5xl font-black leading-tight mb-12">
          "Your brand is not just what you say, but what your customers <span className="text-[#0099D4] italic">perceive</span> through every touchpoint."
        </h2>
        <div className="w-24 h-px bg-slate-200 mx-auto mb-12" />
        <p className="text-slate-500 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
          At Brand Easy, we believe your branding tells your story. Our high-end printing and branding solutions 
          are crafted with precision, blending modern technology with timeless quality to transform 
          every business presence into a professional masterpiece.
        </p>
      </motion.div>
    </section>
  );
}
