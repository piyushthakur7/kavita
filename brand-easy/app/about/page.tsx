"use client";
import { motion } from "motion/react";

const timeline = [
  { year: "2012", event: "Founded as a small specialized printing unit in Surat, Gujarat." },
  { year: "2016", event: "Expanded into high-quality outdoor signage and custom vinyl banners." },
  { year: "2019", event: "Pioneered large-scale digital branding for retail and corporate spaces." },
  { year: "2023", event: "Became a leading provider of comprehensive branding solutions across the region." },
  { year: "2026", event: "Launching our next-gen digital design portal for automated business signage." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="maroon-floral-bg py-24 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <p className="text-[#2DB34A] text-xs tracking-[0.4em] uppercase font-black mb-4">Curating Excellence</p>
          <h1 className="text-white font-serif text-5xl md:text-7xl font-bold">
            About <span className="text-[#2DB34A] italic text-shadow-glow">Brand Easy</span>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-[#0A2733] font-serif text-3xl md:text-5xl font-bold mb-8 italic leading-tight">Where Branding Meets <br />High-Impact Results</h2>
            <p className="text-[#2A5566] text-lg leading-relaxed font-light mb-8 max-w-lg">
              Brand Easy is a premier destination for high-end printing and branding solutions, specializing in museum-grade signage that transforms business spaces into professional identities. Based in Surat with a regional leadership, we blend technology with quality.
            </p>
            <div className="h-1.5 w-24 bg-[#2DB34A] rounded-full" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-100 aspect-square rounded-full flex items-center justify-center border-8 border-white shadow-2xl relative overflow-hidden group"
          >
            <div className="text-center p-12 group-hover:scale-110 transition-transform duration-500">
               <span className="block text-[#0A2733] font-serif text-9xl font-black italic opacity-10">14+</span>
               <span className="block text-[#0099D4] font-black text-xs tracking-[0.2em] uppercase -mt-10">Years of Branding Excellence</span>
            </div>
          </motion.div>
        </div>

        <div className="mb-32">
          <h2 className="text-center font-serif text-4xl md:text-6xl font-bold mb-24 underline decoration-[#2DB34A]/30 decoration-8 underline-offset-[1rem]">Our Journey</h2>
          <div className="space-y-16">
            {timeline.map((t, i) => (
              <motion.div 
                key={t.year} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-24 group"
              >
                <div className="text-[#0099D4] font-serif text-5xl font-black italic min-w-[150px] group-hover:text-[#2DB34A] transition-colors">{t.year}</div>
                <div className="hidden md:block h-px flex-1 bg-slate-200 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2DB34A] scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-[#2DB34A]/40" />
                </div>
                <div className="text-[#2A5566] text-lg font-light max-w-md text-center md:text-left leading-relaxed">{t.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
