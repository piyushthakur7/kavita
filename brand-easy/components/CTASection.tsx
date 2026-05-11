"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="maroon-floral-bg py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2DB34A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2DB34A]/40 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#2DB34A]/40" />
            <span className="text-[#2DB34A] text-2xl">✦</span>
            <div className="h-px w-16 bg-[#2DB34A]/40" />
          </div>

          <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to <span className="text-[#2DB34A] italic font-medium">Luminate</span> <br />
            Your Brand?
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            From iconic neon to massive LED video walls, we help businesses across India shine brighter. Get your free custom design consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#2DB34A] text-white px-12 py-5 rounded-full text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#1F8A37] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#2DB34A]/20"
            >
              Start Your Project
            </Link>
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-full text-[11px] font-black tracking-[0.3em] uppercase hover:border-[#2DB34A] hover:text-[#2DB34A] transition-all backdrop-blur-md"
            >
              Call HQ: +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#2DB34A]/5 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0099D4]/5 rounded-full blur-3xl" />
    </section>
  );
}
