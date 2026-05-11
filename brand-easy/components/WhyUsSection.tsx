"use client";
import { motion } from "motion/react";
import Image from "next/image";

const points = [
  { title: "End-to-End Solutions", desc: "From concept to installation — we handle design, fabrication, permits, and maintenance." },
  { title: "Premium Quality", desc: "Weather-resistant, energy-efficient LED technology built to last 5+ years outdoors." },
  { title: "24/7 Support", desc: "Dedicated AMC teams across India. Always reachable when you need us." },
  { title: "Fast Turnaround", desc: "Most projects delivered within 7-15 working days with zero compromise on quality." },
];

export default function WhyUsSection() {
  return (
    <section className="floral-bg py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="maroon-floral-bg rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
              className="absolute top-6 left-6 opacity-40"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4 Q30 14 24 24 Q18 14 24 4Z" fill="#2DB34A" />
                <path d="M24 44 Q30 34 24 24 Q18 34 24 44Z" fill="#2DB34A" />
                <path d="M4 24 Q14 30 24 24 Q14 18 4 24Z" fill="#2DB34A" />
                <path d="M44 24 Q34 30 24 24 Q34 18 44 24Z" fill="#2DB34A" />
                <circle cx="24" cy="24" r="4" fill="#2DB34A" />
              </svg>
            </motion.div>
            
            <p className="text-[#2DB34A] font-serif italic font-black leading-none text-6xl md:text-8xl tracking-tight">BRAND</p>
            <p className="text-white font-serif italic font-black leading-none text-6xl md:text-8xl tracking-tight">EASY</p>
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="h-px w-24 bg-[#2DB34A]" />
              <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-bold">Premium Quality Signage</p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-8 -right-8 bg-[#2DB34A] text-white text-[10px] sm:text-xs font-black px-6 py-4 shadow-2xl rotate-12 tracking-widest uppercase"
          >
            Since 2009
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0099D4] text-xs md:text-sm tracking-[0.4em] uppercase font-black mb-6">Expertise & Heritage</p>
            <h2 className="text-[#0A2733] font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              India&apos;s Trusted LED <br />
              <span className="text-[#0077A8] italic">Manufacturing</span>
            </h2>
            <p className="text-[#2A5566] text-base md:text-lg leading-relaxed mb-10 font-light max-w-xl">
              Brand Easy is India&apos;s leading LED sign board manufacturer and installer. With over 15 years of industry leadership and 300+ successful projects, we transform artistic visions into luminous reality.
            </p>
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            {points.map((p, i) => (
              <motion.div 
                key={p.title} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 group"
              >
                <div className="shrink-0 w-10 h-10 bg-[#0099D4]/10 text-[#0099D4] flex items-center justify-center text-sm font-black rounded-xl group-hover:bg-[#0099D4] group-hover:text-white transition-all duration-300">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-[#0A2733] font-bold text-lg mb-1">{p.title}</h4>
                  <p className="text-[#2A5566] text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
